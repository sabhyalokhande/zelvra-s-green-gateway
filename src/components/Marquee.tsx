interface MarqueeProps {
  items: string[];
  /** seconds for one full pass */
  duration?: number;
  separator?: string;
  /** extra className applied to each item span (e.g. for text color on dark bg) */
  className?: string;
}

export function Marquee({ items, duration = 28, separator = "·", className = "text-muted-foreground/50" }: MarqueeProps) {
  // Triple the items so seamless loop always has content
  const band = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden" aria-hidden>
      <div
        className="flex min-w-max items-center gap-8 whitespace-nowrap"
        style={{ animation: `marquee-scroll ${duration}s linear infinite` }}
      >
        {band.map((item, i) => (
          <span key={i} className={`flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] ${className}`}>
            {item}
            {i < band.length - 1 && (
              <span className="opacity-40">{separator}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
