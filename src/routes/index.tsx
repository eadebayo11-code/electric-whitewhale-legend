import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import hero from "@/assets/whale-hero.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "$WHITEWHALE — Rise From The Deep" },
      { name: "description", content: "$WHITEWHALE rises from the storm. Take the plunge and join the whales." },
      { property: "og:title", content: "$WHITEWHALE — Rise From The Deep" },
      { property: "og:description", content: "The titan of the deep has surfaced. Take the plunge and join the whales." },
    ],
  }),
  component: Index,
});

const CA = "a3W4qutoEJA4232T2gwZUfgYJTetr96pU4SJMwppump";
const BUY_URL = `https://pump.fun/coin/${CA}`;
const DEX_URL = `https://dexscreener.com/solana/${CA}`;
const X_URL = "https://x.com/search?q=%24WHITEWHALE";

const nav = [
  { href: "#tokenomics", label: "Tokenomics" },
  { href: "#buy", label: "How to Buy" },
  { href: "#gallery", label: "Meme gallery" },
  { href: "#news", label: "News" },
];

const metrics = [
  { label: "Oceanic Cap", sub: "Market cap", value: "$1.0M" },
  { label: "Tidal Flow", sub: "Volume", value: "$16k" },
  { label: "Anchored Capital", sub: "Liquidity", value: "$193k" },
];

const steps = [
  { n: "I", t: "Get a wallet", d: "Download Phantom or another Solana wallet and secure your seed phrase." },
  { n: "II", t: "Load up on SOL", d: "Buy SOL and send it to your wallet." },
  { n: "III", t: "Head to pump.fun", d: "Tap “Get $WHITEWHALE” to open the coin page and connect your wallet." },
  { n: "IV", t: "Swap & hold", d: "Swap SOL for $WHITEWHALE. Welcome to the pod." },
];

const fade = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fade}
      className="mx-auto max-w-5xl scroll-mt-24 px-5 py-16 sm:py-24"
    >
      <h2 className="font-display text-3xl font-black tracking-wider sm:text-5xl">{title}</h2>
      <div className="mt-8 sm:mt-10">{children}</div>
    </motion.section>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
      <path d="M18.9 2H22l-7.6 8.7L23 22h-6.8l-5.3-6.9L4.8 22H1.7l8.1-9.3L1 2h7l4.8 6.3L18.9 2Zm-1.2 18h1.9L6.4 3.9H4.4L17.7 20Z" />
    </svg>
  );
}

function DexIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 17l5-5 4 4 8-9" />
      <path d="M15 7h5v5" />
    </svg>
  );
}

function Index() {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      <header className="fixed inset-x-0 top-0 z-30 border-b border-border/50 bg-background/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#" className="font-display text-base font-black tracking-widest sm:text-lg">$WHITEWHALE</a>
          <nav className="hidden items-center gap-7 text-sm md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-muted-foreground transition hover:text-primary">{n.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={BUY_URL} target="_blank" rel="noreferrer" className="hidden rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground glow sm:inline-block">
              Get $WHITEWHALE
            </a>
            <button onClick={() => setOpen(!open)} aria-label="Menu" className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden">
              <span className="h-0.5 w-5 bg-foreground" />
              <span className="h-0.5 w-5 bg-foreground" />
              <span className="h-0.5 w-5 bg-foreground" />
            </button>
          </div>
        </div>
        {open && (
          <nav className="flex flex-col gap-1 border-t border-border/50 px-5 py-3 md:hidden">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 text-muted-foreground">{n.label}</a>
            ))}
          </nav>
        )}
      </header>

      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <motion.img
          src={hero.url}
          alt="The White Whale warrior among floating storm rocks"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-storm-fade" />
        <motion.div
          className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-16 text-center sm:pb-24"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.18, delayChildren: 0.4 } } }}
        >
          <motion.p variants={fade} className="mb-4 text-xs uppercase tracking-[0.4em] text-primary text-glow">$WHITEWHALE</motion.p>
          <motion.h1 variants={fade} className="animate-float font-display text-4xl font-black leading-tight tracking-wider sm:text-6xl md:text-7xl">
            The Deep Has Risen.
            <br />
            <span className="text-primary text-glow">The Storm Follows.</span>
          </motion.h1>
          <motion.p variants={fade} className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground sm:text-lg">
            Forged in thunder, armored in stone. The titan that breaks charts like falling rock.
          </motion.p>
          <motion.div variants={fade} className="mt-8 flex flex-col items-center gap-4">
            <a href={BUY_URL} target="_blank" rel="noreferrer" className="w-full max-w-xs rounded-sm bg-primary px-8 py-4 text-base font-bold tracking-wide text-primary-foreground glow transition hover:scale-105 sm:w-auto sm:text-lg">
              Get $WHITEWHALE
            </a>
            <button onClick={copy} className="flex max-w-full items-center gap-3 rounded-sm border border-primary/50 bg-card/70 px-4 py-2.5 text-xs backdrop-blur">
              <span className="truncate font-mono">{CA}</span>
              <span className="shrink-0 font-semibold text-primary">{copied ? "Copied" : "Copy"}</span>
            </button>
          </motion.div>
        </motion.div>
      </section>

      <Section id="tokenomics" title="Depth Metrics">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="rounded-sm border border-border bg-card p-6 transition hover:border-primary hover:glow"
            >
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{m.label} · {m.sub}</p>
              <p className="mt-3 font-display text-4xl font-black text-primary text-glow">{m.value}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="buy" title="Take A Plunge">
        <div className="grid gap-4 md:grid-cols-2">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-5 rounded-sm border border-border bg-card p-6">
              <span className="w-10 shrink-0 font-display text-3xl font-black text-primary text-glow">{s.n}</span>
              <div>
                <h3 className="font-semibold">{s.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="gallery" title="Meme Gallery">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <img src={hero.url} alt="White Whale warrior" className="col-span-2 aspect-video w-full rounded-sm border border-border object-cover sm:row-span-2 sm:aspect-auto sm:h-full" />
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex aspect-square items-center justify-center rounded-sm border border-dashed border-border bg-card text-xs uppercase tracking-widest text-muted-foreground">
              Meme drop soon
            </div>
          ))}
        </div>
      </Section>

      <Section id="news" title="News">
        <div className="rounded-sm border border-border bg-card p-6">
          <p className="text-xs uppercase tracking-widest text-primary">Latest</p>
          <h3 className="mt-2 font-semibold">The whale has surfaced on pump.fun</h3>
          <p className="mt-1 text-sm text-muted-foreground">$WHITEWHALE is live. More updates from the deep coming soon.</p>
        </div>
      </Section>

      <footer className="border-t border-border px-5 py-14 text-center">
        <h2 className="font-display text-2xl font-black tracking-wider sm:text-4xl">Join the Whales</h2>
        <div className="mt-8 flex justify-center gap-6">
          {[
            { href: X_URL, label: "X", icon: <XIcon />, delay: "0s" },
            { href: DEX_URL, label: "DEX Screener", icon: <DexIcon />, delay: "1.2s" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              style={{ animationDelay: s.delay }}
              className="animate-float flex h-14 w-14 items-center justify-center rounded-full border border-primary/60 bg-card text-primary transition hover:glow"
            >
              {s.icon}
            </a>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-xl text-xs text-muted-foreground">
          Whitewhale is a meme coin with no intrinsic value or expectation of financial return. For entertainment purposes only.
        </p>
      </footer>
    </main>
  );
}
