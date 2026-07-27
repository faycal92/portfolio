export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      role="img"
      aria-label="Illustration géométrique abstraite"
    >
      <circle
        cx="250"
        cy="250"
        r="180"
        stroke="#2563EB"
        strokeOpacity="0.15"
        strokeWidth="2"
      />
      <circle
        cx="250"
        cy="250"
        r="130"
        stroke="#2563EB"
        strokeOpacity="0.25"
        strokeWidth="2"
        strokeDasharray="6 8"
      />

      <g className="animate-float">
        <rect
          x="150"
          y="120"
          width="120"
          height="120"
          rx="24"
          fill="#2563EB"
        />
        <rect
          x="170"
          y="140"
          width="120"
          height="120"
          rx="24"
          fill="#1E40AF"
          fillOpacity="0.85"
        />
      </g>

      <g style={{ animationDelay: "1.5s" }} className="animate-float">
        <circle cx="360" cy="330" r="46" fill="#2563EB" fillOpacity="0.9" />
      </g>

      <g style={{ animationDelay: "0.8s" }} className="animate-float">
        <rect
          x="90"
          y="300"
          width="70"
          height="70"
          rx="16"
          fill="#1E40AF"
          fillOpacity="0.15"
        />
      </g>

      <path
        d="M180 380 L220 340 L260 370 L340 280"
        stroke="#2563EB"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
      />
      <circle cx="340" cy="280" r="6" fill="#2563EB" />
      <circle cx="260" cy="370" r="6" fill="#2563EB" />
      <circle cx="220" cy="340" r="6" fill="#2563EB" />
      <circle cx="180" cy="380" r="6" fill="#2563EB" />
    </svg>
  );
}
