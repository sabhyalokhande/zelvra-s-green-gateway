import { useEffect, useRef, useState } from "react";

export function useCountUp(target: number, duration = 1800) {
  const [value, setValue] = useState(0);
  const elRef = useRef<HTMLElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!elRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();

          const tick = (now: number) => {
            const elapsed = now - t0;
            const progress = Math.min(elapsed / duration, 1);
            // Cubic ease-out
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.6 },
    );

    observer.observe(elRef.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref: elRef };
}
