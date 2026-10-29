import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import thumb1 from "@/assets/season3-results.jpeg.asset.json";
import thumb2 from "@/assets/season3-locked.jpeg.asset.json";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — $WHITEWHALE" },
      { name: "description", content: "Sonar feed: the latest transmissions from the deep on $WHITEWHALE." },
      { property: "og:title", content: "News — $WHITEWHALE" },
      { property: "og:description", content: "Sonar feed: the latest transmissions from the deep on $WHITEWHALE." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: News,
});

const SABLIER_X = "https://x.com/Sablier";
const CLAIM_URL =
  "https://solana.sablier.com/airdrops/campaign/8TWz6J9dL8ahosLJ1TQiRC9EPfKCyiFgzYh6PrB6LdES-SOL";
const STREAMFLOW_URL =
  "https://app.streamflow.finance/contract/solana/mainnet/6wGWj3bkaycgkCzoNCCAn7XxAoCeMDDySfsoZGQ4uXnf";

type Post = {
  tag: string;
  date: string;
  title: string;
  img: string;
  alt: string;
  body: React.ReactNode[];
  cta?: { href: string; label: string };
};

const posts: Post[] = [
  {
    tag: "Announcement",
    date: "MAR 26, 2026",
    title: "Season 3 Results — Announcement Part One",
    img: thumb1.url,
    alt: "Season 3 results artwork",
    body: [
      <p key="a">The conclusion of our third and final season will be announced in two parts.</p>,
      <p key="b">
        From the beginning we have always said that $WHITEWHALE is a movement, belonging to the
        people who bear the torch — not simply the person who struck the match. What more fitting
        way, then, to wrap Season 3 by distributing 10M $WHITEWHALE tokens to our most loyal and
        devoted holders.
      </p>,
      <p key="c">
        Each holder&rsquo;s share is pro-rated based on our points system and can only be claimed
        on <a href={SABLIER_X} target="_blank" rel="noreferrer" className="text-primary underline underline-offset-4 transition hover:text-glow">@Sablier</a>.
      </p>,
      <p key="d">Disregard any other claims of airdrops, as these are likely scams.</p>,
      <p key="e">
        Unclaimed tokens from this 10M prize pool will revert back to the ownership of the
        treasury after 15 days and — as always — be used for the sole benefit of the project and
        its holders.
      </p>,
    ],
    cta: { href: CLAIM_URL, label: "Claim your Season 3 rewards" },
  },
  {
    tag: "Treasury",
    date: "MAR 26, 2026",
    title: "Season 3 — Part Two",
    img: thumb2.url,
    alt: "Treasury lock artwork",
    body: [
      <p key="a">This movement has never been about a single individual.</p>,
      <p key="b">
        It is about each and every single member of the community that continues to take a stand
        against max extraction and paid influence.
      </p>,
      <p key="c">
        Today the Treasury has permanently locked 500M coins. Combined with prior locks, this
        represents well over half of the total supply.
      </p>,
      <p key="d" className="font-display font-black text-primary text-glow">
        A $13M move. For you. It&rsquo;s always been for you.
      </p>,
    ],
    cta: { href: STREAMFLOW_URL, label: "View the locked contract" },
  },
];

const PREVIEW_COUNT = 2;

function SonarRings() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12 text-primary text-glow" fill="none" stroke="currentColor" aria-hidden>
      <circle cx="24" cy="24" r="4" fill="currentColor" stroke="none" />
      <circle cx="24" cy="24" r="10" strokeOpacity="0.7" />
      <circle cx="24" cy="24" r="16" strokeOpacity="0.45" />
      <circle cx="24" cy="24" r="22" strokeOpacity="0.2" />
    </svg>
  );
}

function PostRow({ post, index }: { post: Post; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = post.body.length > PREVIEW_COUNT;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative rounded-sm border border-border bg-card p-5 transition hover:border-primary sm:p-6"
    >
      <div className="grid gap-5 sm:grid-cols-[auto_1fr]">
        <img
          src={post.img}
          alt={post.alt}
          loading="lazy"
          width={112}
          height={112}
          className="h-20 w-20 rounded-sm border border-border object-cover sm:h-24 sm:w-24"
        />
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-sm border border-primary/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-primary">
              {post.tag}
            </span>
            <span className="font-mono text-xs tracking-widest text-muted-foreground">
              SONAR PING · {post.date}
            </span>
          </div>
          <h2 className="mt-3 font-display text-xl font-black tracking-wide sm:text-2xl">{post.title}</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
            {post.body.slice(0, PREVIEW_COUNT)}
            {expanded && post.body.slice(PREVIEW_COUNT)}
          </div>
          {hasMore && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-3 font-mono text-xs uppercase tracking-widest text-primary transition hover:text-glow"
            >
              {expanded ? "▲ Show less" : "▼ Read more"}
            </button>
          )}
          {post.cta && (
            <a
              href={post.cta.href}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground glow transition hover:scale-105"
            >
              {post.cta.label}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function News() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="fixed inset-x-0 top-0 z-30 border-b border-border/50 bg-background/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link to="/" className="font-display text-base font-black tracking-widest sm:text-lg">$WHITEWHALE</Link>
          <Link to="/" className="text-sm text-muted-foreground transition hover:text-primary">← Back home</Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 pb-6 pt-28 sm:pt-36">
        <div className="flex items-center gap-5">
          <SonarRings />
          <div>
            <h1 className="font-display text-3xl font-black tracking-wider sm:text-5xl">Sonar Feed</h1>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.3em] text-primary text-glow sm:text-sm">
              Transmissions from the deep
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl px-5 pb-24">
        <div aria-hidden className="absolute bottom-8 left-[calc(2.25rem+40px)] top-0 hidden w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent lg:block" />
        <div className="grid gap-4 lg:gap-5">
          {posts.map((p, i) => (
            <PostRow key={p.title} post={p} index={i} />
          ))}
        </div>
        <p className="mt-10 text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
          · · · The whale signal never sleeps · · ·
        </p>
      </section>
    </main>
  );
}
