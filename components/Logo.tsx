import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
  color?: "ink" | "white" | "burgundy";
  /** Force single-line rendering. Defaults to true; pass false to allow natural wrapping in narrow containers. */
  noWrap?: boolean;
};

const SIZE_CLASS: Record<NonNullable<Props["size"]>, string> = {
  xs: "text-xl sm:text-2xl",
  sm: "text-2xl sm:text-3xl",
  md: "text-3xl sm:text-4xl",
  lg: "text-4xl sm:text-5xl",
};

const COLOR_CLASS: Record<NonNullable<Props["color"]>, string> = {
  ink: "text-ink",
  white: "text-white",
  burgundy: "text-burgundy-600",
};

/**
 * Typographic logo for AAA Awning Co., Inc.
 * Rendered as text in Pinyon Script via next/font — crisp at any size.
 */
export function Logo({
  className,
  size = "md",
  color = "ink",
  noWrap = true,
}: Props) {
  return (
    <span
      className={cn(
        "font-script leading-none select-none inline-block max-w-full",
        noWrap ? "whitespace-nowrap" : "whitespace-normal",
        SIZE_CLASS[size],
        COLOR_CLASS[color],
        className,
      )}
      aria-label="AAA Awning Co. Inc."
    >
      A A A Awning Co. Inc.
    </span>
  );
}
