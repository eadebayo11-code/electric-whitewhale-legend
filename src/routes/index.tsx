import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/whale-hero.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "$WHITEWHALE — The Storm Titan of Memecoins" },
      { name: "description", content: "$WHITEWHALE rises from the storm. Join the pod, ride the surge." },
      { property: "og:title", content: "$WHITEWHALE — The Storm Titan" },
      { property: "og:description", content: "The whale has awakened. Join the pod and ride the surge." },
    ],
  }),
  component: Index,
});

const CA = "0xWHITEWHALE000000000000000000000000000000";

const stats = [
  { label: "Total Supply", value: "1,000,000,000" },
  { label: "Tax", value: "0 / 0" },
  { label: "Liquidity", value: "Burned" },
  { label: "Contract", value: "Renounced" },
];

const steps = [
  { n: "I", t: "Get a wallet", d: "Download a crypto wallet and secure your seed phrase." },
  { n: "II", t: "Fund it", d: "Buy ETH or SOL and send it to your wallet." },
  { n: "III", t: "Swap", d: "Paste the contract address on a DEX and swap for $WHITEWHALE." },
  { n: "IV", t: "Join the pod", d: "Hold strong. The storm rewards the patient." },
];

function Index() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <main className="min-h-screen font-sans bg-background text-foreground">
      <nav className="fixed inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background/40 border-b border-border/50">
        <span className="font-display text-lg font-black tracking-widest">$WHITEWHALE</span>
        <a href="#buy" className="rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground glow">Buy now</a>
      </nav>

      <section className="relative flex min-h-screen items-end overflow-hidden">
        <img src={hero.url} alt="The White Whale warrior among floating storm rocks" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-storm-fade" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-20 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-primary text-glow">The storm has awakened</p>
          <h1 className="font-display text-5xl font-black tracking-wider sm:text-7xl md:text-8xl">$WHITEWHALE</h1>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground sm:text-lg">
            Forged in thunder, risen from the deep. The titan that breaks charts like stone.
          </p>
          <button onClick={copy} className="mx-auto mt-8 flex max-w-full items-center gap-3 rounded-sm border border-primary/60 bg-card/70 px-4 py-3 text-xs backdrop-blur sm:text-sm">
            <span className="truncate font-mono">{CA}</span>
            <span className="shrink-0 font-semibold text-primary">{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="font-display text-3xl font-black tracking-wider sm:text-5xl">The Legend</h2>
        <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
          When the sky cracked and the mountains rose, one whale walked out of the sea in armor of stone.
          No roadmap, no promises — only the pod, the storm, and the climb.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="font-display text-3xl font-black tracking-wider sm:text-5xl">Tokenomics</h2>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-sm border border-border bg-card p-6 transition hover:border-primary hover:glow">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</p>
              <p className="mt-3 font-display text-xl font-semibold text-primary">{s.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="buy" className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="font-display text-3xl font-black tracking-wider sm:text-5xl">How to Buy</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-5 rounded-sm border border-border bg-card p-6">
              <span className="font-display text-3xl font-black text-primary text-glow">{s.n}</span>
              <div>
                <h3 className="font-semibold">{s.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border px-6 py-10 text-center text-xs text-muted-foreground">
        $WHITEWHALE is a memecoin with no intrinsic value or financial return. Ride the storm responsibly.
      </footer>
    </main>
  );
}
