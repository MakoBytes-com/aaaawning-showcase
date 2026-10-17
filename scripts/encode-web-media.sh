#!/usr/bin/env bash
# Re-encode the showcase hero film from its master in gen/masters/.
#
#   bash scripts/encode-web-media.sh             # watermarked demo encode (what ships)
#   WATERMARK=0 bash scripts/encode-web-media.sh # clean encode, for a licensed buyer
#
# The master (gen/masters/hero-runway-original.mp4, the 8-second Runway render this
# site was built with) is never written to. The output replaces
# public/images/hero/aaa-awning-texas-projects-hero.mp4.
#
# Why the watermark is burned in rather than overlaid with CSS: anyone can save the
# mp4 straight out of the browser, so a CSS overlay protects nothing.
#
# There is one file for every screen, and the hero crops it with object-fit:cover,
# so the marks are placed by what each screen actually sees (measured 2026-10-17):
#   desktops/laptops  crop top and bottom; rows ~14%–86% survive. The hero copy sits
#                     left (x up to ~48%), so the main mark goes top-right and the
#                     faint second mark bottom-left, below the buttons.
#   phones            crop the sides; only the middle third (x ~33%–67%) survives and
#                     the hero copy fills everything but a thin strip at the bottom,
#                     so a small centred mark sits in that strip (desktops crop it off).
#   tablets (portrait) see the centre strip too, so they also get the bottom mark.
# The main mark is sized to start right of x 67% so phones never show a cut-off piece.
#
# Encode settings match the encode that was live before the watermark:
#   1280x720, 24 fps, ping-pong loop (192 forward + 190 reversed frames = 382, the
#   turn-around duplicates trimmed so the loop has no hitch), libx264 preset slow,
#   crf 27, default GOP (keyint 250), no audio, +faststart (moov first).
set -euo pipefail

cd "$(dirname "$0")/.."
ROOT="$(pwd)"
FFMPEG="${FFMPEG:-ffmpeg}"
WATERMARK="${WATERMARK:-1}"
YEAR="2026"
OWNER="Mako Logics LLC"
SITE_URL="https://aaaawning-showcase.vercel.app"
FONT="C\\:/Windows/Fonts/seguisb.ttf"   # Segoe UI Semibold; escaped for the filter graph

# drawtext reads its text from files: keeps the copyright sign and middle dot out of
# shell/filter escaping. Paths are relative to the work dir because a drive-letter
# colon breaks the filter graph.
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT
printf '\xc2\xa9 %s %s \xc2\xb7 License required' "$YEAR" "$OWNER" > "$WORK/main.txt"
printf '\xc2\xa9 %s' "$OWNER" > "$WORK/corner.txt"

SHADOW="shadowcolor=black@0.45:shadowx=2:shadowy=2"
WM="drawtext=fontfile='$FONT':textfile=main.txt:fontsize=h*0.022:fontcolor=white@0.62:$SHADOW:x=w*0.965-tw:y=h*0.17"
WM+=",drawtext=fontfile='$FONT':textfile=corner.txt:fontsize=h*0.019:fontcolor=white@0.30:shadowcolor=black@0.3:shadowx=1:shadowy=1:x=w*0.05:y=h*0.80"
WM+=",drawtext=fontfile='$FONT':textfile=main.txt:fontsize=h*0.021:fontcolor=white@0.55:$SHADOW:x=(w-tw)/2:y=h*0.945"

# Ping-pong: forward, then reversed without its first and last frame.
LOOP="[0:v]split[f][b];[b]reverse,trim=start_frame=1:end_frame=191,setpts=PTS-STARTPTS[r];[f][r]concat=n=2:v=1:a=0"
if [ "$WATERMARK" = "1" ]; then
  GRAPH="$LOOP,$WM[out]"
  NOTICE="Demo footage. Any use outside $SITE_URL requires a license from $OWNER. See $SITE_URL/license"
else
  GRAPH="$LOOP[out]"
  NOTICE="Licensed footage. Use is governed by the license agreement with $OWNER."
fi

win() { if command -v cygpath >/dev/null; then cygpath -m "$1"; else printf '%s' "$1"; fi; }
IN="$(win "$ROOT/gen/masters/hero-runway-original.mp4")"
OUT="$(win "$ROOT/public/images/hero/aaa-awning-texas-projects-hero.mp4")"

echo "[1/1] aaa-awning-texas-projects-hero.mp4"
( cd "$WORK" && "$FFMPEG" -v error -y -i "$IN" -an -filter_complex "$GRAPH" -map "[out]" \
    -c:v libx264 -preset slow -crf 27 -pix_fmt yuv420p -movflags +faststart \
    -metadata "title=AAA Awning showcase hero film" \
    -metadata "artist=$OWNER" \
    -metadata "author=$OWNER" \
    -metadata "copyright=© $YEAR $OWNER. All rights reserved." \
    -metadata "comment=$NOTICE" \
    -metadata "description=$NOTICE" \
    "$OUT" )
echo "Done. watermark=$WATERMARK"
echo "Now bump the ?v= tag on HERO_VIDEO_SRC in lib/site.ts: /images/* is cached for a year."
