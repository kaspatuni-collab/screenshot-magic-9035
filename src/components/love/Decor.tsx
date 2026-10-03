import { useEffect, useRef, useState, type ReactNode } from "react";

const SYMBOLS = ["♡", "✦", "❀", "♡", "✧"];

export function FloatingHearts({ count = 14 }: { count?: number }) {
  const [items, setItems] = useState<
    { left: number; delay: number; dur: number; size: number; s: string }[]
  >([]);
  useEffect(() => {
    setItems(
      Array.from({ length: count }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 14,
        dur: 12 + Math.random() * 12,
        size: 10 + Math.random() * 14,
        s: SYMBOLS[i % SYMBOLS.length],
      })),
    );
  }, [count]);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {items.map((it, i) => (
        <span
          key={i}
          className="animate-float-up absolute -bottom-8 text-primary/40"
          style={{
            left: `${it.left}%`,
            fontSize: it.size,
            animationDelay: `${it.delay}s`,
            animationDuration: `${it.dur}s`,
          }}
        >
          {it.s}
        </span>
      ))}
    </div>
  );
}

export function Burst({ count = 18, spread = 140 }: { count?: number; spread?: number }) {
  const parts = useRef(
    Array.from({ length: count }, (_, i) => {
      const a = (Math.PI * 2 * i) / count + Math.random() * 0.4;
      const r = spread * (0.5 + Math.random() * 0.6);
      return {
        dx: Math.cos(a) * r,
        dy: Math.sin(a) * r - 40,
        rot: Math.random() * 180 - 90,
        s: SYMBOLS[i % SYMBOLS.length],
        size: 12 + Math.random() * 12,
        delay: Math.random() * 0.15,
      };
    }),
  ).current;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {parts.map((p, i) => (
        <span
          key={i}
          className="animate-burst absolute text-rose"
          style={
            {
              "--dx": `${p.dx}px`,
              "--dy": `${p.dy}px`,
              "--rot": `${p.rot}deg`,
              fontSize: p.size,
              animationDelay: `${p.delay}s`,
            } as React.CSSProperties
          }
        >
          {p.s}
        </span>
      ))}
    </div>
  );
}

export function FadeIn({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`fade-section ${className}`}>
      {children}
    </div>
  );
}

export function SectionTitle({ children, kicker }: { children: ReactNode; kicker?: string }) {
  return (
    <div className="mb-10 text-center">
      {kicker && <p className="font-hand text-2xl text-primary">{kicker}</p>}
      <h2 className="text-4xl font-semibold italic text-foreground sm:text-5xl">{children}</h2>
      <div className="mx-auto mt-4 flex items-center justify-center gap-3 text-primary/60">
        <span className="h-px w-12 bg-primary/30" />✦<span className="h-px w-12 bg-primary/30" />
      </div>
    </div>
  );
}
