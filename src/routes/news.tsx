import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — $WHITEWHALE" },
      { name: "description", content: "The latest updates from the deep on $WHITEWHALE." },
      { property: "og:title", content: "News — $WHITEWHALE" },
      { property: "og:description", content: "The latest updates from the deep on $WHITEWHALE." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: News,
});

const posts = [
  { tag: "Latest", t: "The whale has surfaced on pump.fun", d: "$WHITEWHALE is live. More updates from the deep coming soon." },
];

function News() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="border-b border-border/50 px-5 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link to="/" className="font-display text-base font-black tracking-widest sm:text-lg">$WHITEWHALE</Link>
          <Link to="/" className="text-sm text-muted-foreground transition hover:text-primary">← Back home</Link>
        </div>
      </header>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-5xl px-5 py-16 sm:py-24"
      >
        <h1 className="font-display text-3xl font-black tracking-wider sm:text-5xl">News</h1>
        <div className="mt-8 grid gap-4">
          {posts.map((p) => (
            <article key={p.t} className="rounded-sm border border-border bg-card p-6">
              <p className="text-xs uppercase tracking-widest text-primary">{p.tag}</p>
              <h2 className="mt-2 font-semibold">{p.t}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
            </article>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
