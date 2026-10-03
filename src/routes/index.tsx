import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Burst, FadeIn, FloatingHearts, SectionTitle } from "@/components/love/Decor";
import { GiftBox } from "@/components/love/Gift";
import {
  finale,
  gallery,
  gifts,
  hero,
  intro,
  letter,
  loves,
  names,
  video,
  type Photo,
} from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `For ${names.her} ♡` },
      { name: "description", content: "Something I made just for you." },
      { property: "og:title", content: `For ${names.her} ♡` },
      { property: "og:description", content: "Something I made just for you." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [stage, setStage] = useState<"closed" | "opening" | "open">("closed");

  const openIt = () => {
    setStage("opening");
    setTimeout(() => {
      setStage("open");
      window.scrollTo({ top: 0 });
    }, 1000);
  };

  useEffect(() => {
    document.body.style.overflow = stage === "open" ? "" : "hidden";
  }, [stage]);

  return (
    <div className="relative min-h-screen">
      <FloatingHearts count={stage === "open" ? 10 : 18} />

      {stage !== "open" && (
        <section
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center px-6 text-center ${stage === "opening" ? "animate-curtain" : ""}`}
          style={{ background: "var(--gradient-dream)" }}
        >
          <p className="animate-reveal font-hand text-2xl text-primary">for {names.her}</p>
          <h1 className="animate-reveal mt-3 max-w-2xl text-4xl font-semibold italic leading-tight text-foreground sm:text-6xl">
            {hero.title}
          </h1>
          <p
            className="animate-reveal mt-6 text-lg text-muted-foreground"
            style={{ animationDelay: ".4s" }}
          >
            {hero.subtitle}
          </p>
          <div className="relative mt-10 animate-reveal" style={{ animationDelay: ".8s" }}>
            {stage === "opening" && <Burst count={26} spread={220} />}
            <button onClick={openIt} className="btn-love px-10 py-4 text-lg">
              {hero.button}
            </button>
          </div>
        </section>
      )}

      {stage === "open" && (
        <main className="relative z-10 animate-reveal">
          <Intro />
          <Gallery />
          <VideoSection />
          <Gifts />
          <Loves />
          <Letter />
          <Finale />
        </main>
      )}
    </div>
  );
}

function Section({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
      <FadeIn>{children}</FadeIn>
    </section>
  );
}

function Intro() {
  return (
    <section className="mx-auto max-w-2xl px-5 pb-16 pt-24 sm:pt-32">
      <FadeIn>
        <p className="text-center font-hand text-3xl text-primary">hi {names.her} ♡</p>
        <SectionTitle>{intro.title}</SectionTitle>
        <div className="glass space-y-5 rounded-3xl border border-border p-7 text-lg leading-relaxed shadow-soft sm:p-10">
          {intro.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

const ROT = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2", "rotate-1"];

function Gallery() {
  const [active, setActive] = useState<Photo | null>(null);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);
  return (
    <Section>
      <SectionTitle kicker="some of my favourites">{gallery.title}</SectionTitle>
      <div className="grid grid-cols-2 gap-5 sm:gap-8 md:grid-cols-3">
        {gallery.photos.map((p, i) => (
          <button
            key={i}
            onClick={() => setActive(p)}
            className={`${ROT[i % ROT.length]} transition-transform duration-300 hover:z-10 hover:rotate-0 hover:scale-105`}
          >
            {p.style === "polaroid" ? (
              <figure className="bg-card p-2.5 pb-3 shadow-photo sm:p-3">
                <img src={p.src} alt={p.caption || "A little moment"} loading="lazy" width={768} height={960} className="aspect-[4/5] w-full object-cover" />
                <figcaption className="mt-2 min-h-7 font-hand text-lg leading-tight text-foreground sm:text-xl">
                  {p.caption}
                </figcaption>
              </figure>
            ) : (
              <figure>
                <img src={p.src} alt={p.caption || "A little moment"} loading="lazy" width={768} height={960} className="aspect-[4/5] w-full rounded-3xl border-4 border-card object-cover shadow-photo" />
                {p.caption && (
                  <figcaption className="mt-2 font-hand text-lg text-foreground sm:text-xl">{p.caption}</figcaption>
                )}
              </figure>
            )}
          </button>
        ))}
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex animate-in fade-in flex-col items-center justify-center bg-foreground/60 p-5 backdrop-blur-sm duration-300"
        >
          <img
            src={active.src}
            alt={active.caption || ""}
            className="max-h-[78vh] max-w-full animate-in zoom-in-95 rounded-2xl border-4 border-card object-contain shadow-photo duration-300"
          />
          {active.caption && (
            <p className="mt-4 font-hand text-3xl text-primary-foreground">{active.caption}</p>
          )}
          <button className="mt-4 rounded-full bg-card px-5 py-2 text-sm font-semibold text-foreground">
            close ♡
          </button>
        </div>
      )}
    </Section>
  );
}

function VideoSection() {
  return (
    <Section>
      <SectionTitle>{video.title}</SectionTitle>
      <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border-4 border-blush bg-card shadow-soft">
        {video.src ? (
          <video controls playsInline preload="metadata" poster={video.poster} className="aspect-video w-full bg-foreground/5">
            <source src={video.src} />
          </video>
        ) : (
          <div className="relative aspect-video w-full">
            <img src={video.poster} alt="" className="h-full w-full object-cover opacity-60" loading="lazy" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-card text-2xl text-primary shadow-soft">▶</span>
              <p className="mt-3 font-semibold text-foreground">Our Roblox video goes here</p>
            </div>
          </div>
        )}
      </div>
      <p className="mt-6 text-center font-hand text-2xl text-foreground sm:text-3xl">{video.caption}</p>
    </Section>
  );
}

function Gifts() {
  return (
    <Section>
      <SectionTitle kicker="open them all">{gifts.title}</SectionTitle>
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 min-[420px]:grid-cols-2 md:grid-cols-3">
        {gifts.messages.map((m, i) => (
          <GiftBox key={i} message={m} index={i} />
        ))}
      </div>
    </Section>
  );
}

function Loves() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section>
      <SectionTitle kicker="the short version">{loves.title}</SectionTitle>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {loves.items.map((it, i) => {
          const isOpen = open === i;
          return (
            <button
              key={i}
              onClick={() => setOpen(isOpen ? null : i)}
              className={`group rounded-2xl border border-border p-5 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 ${isOpen ? "bg-blush" : "glass"}`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-display text-2xl font-semibold italic">{it.label}</span>
                <span className={`text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>✦</span>
              </div>
              <div className={`grid transition-all duration-500 ${isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <p className="overflow-hidden text-base text-muted-foreground">{it.note}</p>
              </div>
            </button>
          );
        })}
      </div>
    </Section>
  );
}

function Letter() {
  return (
    <Section>
      <SectionTitle>{letter.title}</SectionTitle>
      <article
        className="relative mx-auto max-w-2xl -rotate-1 rounded-sm bg-paper px-7 py-10 shadow-photo sm:px-14 sm:py-14"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0 39px, color-mix(in oklab, var(--rose) 18%, transparent) 39px 40px)",
        }}
      >
        <span className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-2 bg-blush/80" />
        <div className="space-y-4 font-hand text-2xl leading-[40px] text-foreground sm:text-[1.65rem]">
          <p>{letter.greeting}</p>
          {letter.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="pt-4">{letter.signoff}</p>
          <p className="text-3xl text-rose">{letter.signature} ♡</p>
        </div>
      </article>
    </Section>
  );
}

function Finale() {
  return (
    <section className="px-5 pb-10 pt-20 text-center sm:pt-28">
      <FadeIn>
        <h2 className="text-5xl font-semibold italic sm:text-7xl">{finale.title}</h2>
        <p className="mx-auto mt-6 max-w-xl text-xl leading-relaxed text-muted-foreground">
          {finale.message}
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="btn-love mt-10 px-9 py-4 text-lg"
        >
          {finale.button}
        </button>
        <footer className="mt-24 font-hand text-xl text-muted-foreground">{finale.footer}</footer>
      </FadeIn>
    </section>
  );
}
