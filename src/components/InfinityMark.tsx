export function InfinityMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        {/* Logo-accurate purple → violet → cyan gradient */}
        <linearGradient id="zlv-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#6B21C8" />
          <stop offset="38%"  stopColor="#7C5CF7" />
          <stop offset="100%" stopColor="#06C9E8" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="zlv-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Strong glow for the main path */}
        <filter id="zlv-glow-strong" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow ring (thicker, low opacity) */}
      <path
        d="M 100 100 C 100 40, 180 40, 200 100 C 220 160, 300 160, 300 100 C 300 40, 220 40, 200 100 C 180 160, 100 160, 100 100 Z"
        stroke="url(#zlv-grad)"
        strokeWidth="10"
        opacity="0.18"
        filter="url(#zlv-glow-strong)"
      />

      {/* Main animated loop */}
      <path
        d="M 100 100 C 100 40, 180 40, 200 100 C 220 160, 300 160, 300 100 C 300 40, 220 40, 200 100 C 180 160, 100 160, 100 100 Z"
        stroke="url(#zlv-grad)"
        strokeWidth="3.5"
        filter="url(#zlv-glow)"
      >
        <animate
          attributeName="stroke-dasharray"
          from="0 1000"
          to="1000 0"
          dur="5s"
          repeatCount="indefinite"
        />
      </path>

      {/* Network node dots — purple side */}
      {Array.from({ length: 28 }).map((_, i) => {
        const t = i / 28;
        const angle = t * Math.PI;
        const cx = 150 + Math.cos(angle + Math.PI) * 56 + Math.cos(angle * 2) * 8;
        const cy = 100 + Math.sin(angle) * 55;
        return (
          <circle key={`p${i}`} cx={cx} cy={cy} r={i % 4 === 0 ? 2.2 : 1.3} fill="#7C5CF7" opacity={0.8}>
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur={`${2.5 + (i % 4) * 0.5}s`}
              repeatCount="indefinite"
              begin={`${i * 0.07}s`}
            />
          </circle>
        );
      })}

      {/* Network node dots — cyan side */}
      {Array.from({ length: 28 }).map((_, i) => {
        const t = i / 28;
        const angle = t * Math.PI;
        const cx = 250 + Math.cos(angle) * 56 + Math.cos(angle * 2) * 8;
        const cy = 100 + Math.sin(angle + Math.PI) * 55;
        return (
          <circle key={`c${i}`} cx={cx} cy={cy} r={i % 4 === 0 ? 2.2 : 1.3} fill="#06C9E8" opacity={0.8}>
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur={`${2.5 + (i % 4) * 0.5}s`}
              repeatCount="indefinite"
              begin={`${i * 0.07 + 0.15}s`}
            />
          </circle>
        );
      })}

      {/* Connection lines between nodes (centre-cross) */}
      {[[175, 78, 195, 95], [205, 105, 225, 122], [185, 92, 215, 108]].map(([x1, y1, x2, y2], i) => (
        <line
          key={`l${i}`}
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="url(#zlv-grad)"
          strokeWidth="0.8"
          opacity="0.45"
        />
      ))}
    </svg>
  );
}
