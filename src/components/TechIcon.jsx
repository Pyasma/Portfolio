import techIcons from "../data/techIcons";

/** Perceived brightness of a #rrggbb string, 0 (black) to 1 (white). */
function luminance(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export default function TechIcon({ name, className = "size-3.5" }) {
  const icon = techIcons[name];
  if (!icon) return null;

  // Near-black and near-white brand colors disappear against one of the two
  // themes, so those fall back to the surrounding text color.
  const lum = luminance(icon.hex);
  const color = lum < 0.18 || lum > 0.92 ? "currentColor" : icon.hex;

  return (
    <svg
      className={`shrink-0 ${className}`}
      viewBox="0 0 24 24"
      fill={color}
      role="img"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}
