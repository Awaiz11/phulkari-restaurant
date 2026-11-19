/** A band of phulkari-style embroidery: gold and magenta diamonds on maroon khaddar. */
export default function Border() {
  return (
    <div className="border" aria-hidden="true">
      <svg width="100%" height="30" preserveAspectRatio="none">
        <defs>
          <pattern id="bagh" width="30" height="30" patternUnits="userSpaceOnUse">
            <rect width="30" height="30" fill="#5b1a1f" />
            <path d="M15 3 L27 15 L15 27 L3 15 Z" fill="#e8a33d" />
            <path d="M15 9 L21 15 L15 21 L9 15 Z" fill="#c23b6b" />
            <path d="M15 13 L17 15 L15 17 L13 15 Z" fill="#f3dcd4" />
          </pattern>
        </defs>
        <rect width="100%" height="30" fill="url(#bagh)" />
      </svg>
    </div>
  );
}
