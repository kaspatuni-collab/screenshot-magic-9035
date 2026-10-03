import { useState } from "react";
import { Burst } from "./Decor";

const WRAPS = [
  "bg-blush",
  "bg-lilac",
  "bg-cream",
  "bg-secondary",
  "bg-accent",
  "bg-blush",
];

export function GiftBox({ message, index }: { message: string; index: number }) {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const wrap = WRAPS[index % WRAPS.length];

  const handle = () => {
    if (open) return;
    setOpen(true);
    setTimeout(() => setShown(true), 650);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handle}
        aria-label={open ? "Opened gift" : `Open gift ${index + 1}`}
        className={`group relative h-36 w-36 sm:h-40 sm:w-40 ${open ? "" : "animate-bob hover:animate-wiggle"}`}
        style={{ animationDelay: `${index * 0.4}s` }}
      >
        {open && <Burst />}
        {/* box body */}
        <div
          className={`absolute bottom-0 left-1/2 h-24 w-28 -translate-x-1/2 rounded-lg ${wrap} shadow-soft sm:w-32`}
        >
          <div className="absolute inset-y-0 left-1/2 w-4 -translate-x-1/2 bg-ribbon/80" />
          {open && (
            <div className="absolute inset-x-2 top-1 h-3 rounded-full bg-foreground/10" />
          )}
        </div>
        {/* lid */}
        <div
          className={`absolute bottom-[5.5rem] left-1/2 h-8 w-32 -translate-x-1/2 sm:w-36 ${open ? "animate-lid" : ""}`}
          style={{ transformOrigin: "left bottom" }}
        >
          <div className={`relative h-full w-full -translate-x-0 rounded-md ${wrap} shadow-soft`}>
            <div className="absolute inset-y-0 left-1/2 w-4 -translate-x-1/2 bg-ribbon/80" />
            {/* bow */}
            <div className="absolute -top-5 left-1/2 flex -translate-x-1/2">
              <span className="h-6 w-7 -rotate-12 rounded-full border-4 border-ribbon" />
              <span className="h-6 w-7 rotate-12 rounded-full border-4 border-ribbon" />
            </div>
          </div>
        </div>
      </button>
      <div className="mt-4 min-h-24 w-full max-w-[16rem] text-center">
        {shown ? (
          <p className="animate-reveal glass rounded-2xl border border-border px-4 py-3 font-display text-lg italic leading-snug text-foreground shadow-soft">
            {message}
          </p>
        ) : (
          <p className="font-hand text-xl text-muted-foreground">
            {open ? "..." : "tap me ♡"}
          </p>
        )}
      </div>
    </div>
  );
}
