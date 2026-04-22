import { ImageResponse } from "next/og";

export const alt =
  "AAA Awning Co., Inc. — Custom Awnings, Canopies & Shade Structures in Texas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function RootOpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background:
            "linear-gradient(135deg, #B22951 0%, #8E1E40 50%, #651A33 100%)",
          color: "white",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: 6,
            textTransform: "uppercase",
            opacity: 0.9,
          }}
        >
          AAA Awning Co., Inc. · since 1984
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -1,
              maxWidth: 1000,
            }}
          >
            Custom Awnings, Canopies &amp; Shade Structures in Texas.
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 400,
              opacity: 0.92,
              marginTop: 28,
              maxWidth: 1000,
            }}
          >
            40+ years of metal and canvas awning fabrication &mdash; Houston,
            Dallas, Fort Worth, Austin, San Antonio, Texas Gulf Coast.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            opacity: 0.85,
          }}
        >
          <div>aaaawning.net</div>
          <div style={{ fontWeight: 600 }}>Sunbrella Preferred Partner</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
