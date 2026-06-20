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
        <linearGradient id="zlv-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.58 0.24 300)" />
          <stop offset="50%" stopColor="oklch(0.7 0.18 250)" />
          <stop offset="100%" stopColor="oklch(0.82 0.15 195)" />
        </linearGradient>
        <filter id="zlv-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M 100 100 C 100 40, 180 40, 200 100 C 220 160, 300 160, 300 100 C 300 40, 220 40, 200 100 C 180 160, 100 160, 100 100 Z"
        stroke="url(#zlv-grad)"
        strokeWidth="3"
        filter="url(#zlv-glow)"
      >
        <animate attributeName="stroke-dasharray" from="0 1000" to="1000 0" dur="6s" repeatCount="indefinite" />
      </path>
      {Array.from({ length: 60 }).map((_, i) => {
        const t = i / 60;
        const angle = t * Math.PI * 2;
        const cx = 200 + Math.cos(angle) * 100;
        const cy = 100 + Math.sin(angle * 2) * 50;
        return (
          <circle key={i} cx={cx} cy={cy} r={1.4} fill="url(#zlv-grad)" opacity={0.7}>
            <animate attributeName="opacity" values="0.2;1;0.2" dur={`${3 + (i % 5)}s`} repeatCount="indefinite" begin={`${i * 0.05}s`} />
          </circle>
        );
      })}
    </svg>
  );
}
