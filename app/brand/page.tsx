"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import ImageMask from "@/components/ui/ImageMask";
import {
  LivepeerSymbol,
  LivepeerTextmark,
  LivepeerWordmark,
} from "@/components/icons/LivepeerLogo";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const primaryColors = [
  { name: "Accent Green", hex: "#18794E", token: "green", bg: "bg-green" },
  { name: "Primary Black", hex: "#181818", token: "dark", bg: "bg-dark" },
  {
    name: "Primary White",
    hex: "#FFFFFF",
    token: "white",
    bg: "bg-white",
    dark: true,
  },
];

const greenVariants = [
  { name: "Green", hex: "#18794E", token: "green", bg: "bg-green" },
  {
    name: "Green Light",
    hex: "#1E9960",
    token: "green-light",
    bg: "bg-green-light",
  },
  {
    name: "Green Dark",
    hex: "#115C3B",
    token: "green-dark",
    bg: "bg-green-dark",
  },
  {
    name: "Green Bright",
    hex: "#40BF86",
    token: "green-bright",
    bg: "bg-green-bright",
  },
  {
    name: "Green Subtle",
    hex: "rgba(24,121,78,0.15)",
    token: "green-subtle",
    bg: "bg-green-subtle",
  },
];

const blueVariants = [
  { name: "Blue", hex: "#146A8F", token: "blue", bg: "bg-blue" },
  {
    name: "Blue Light",
    hex: "#1380AE",
    token: "blue-light",
    bg: "bg-blue-light",
  },
  {
    name: "Blue Dark",
    hex: "#145571",
    token: "blue-dark",
    bg: "bg-blue-dark",
  },
  {
    name: "Blue Bright",
    hex: "#25ABD0",
    token: "blue-bright",
    bg: "bg-blue-bright",
  },
  {
    name: "Blue Subtle",
    hex: "rgba(20,106,143,0.15)",
    token: "blue-subtle",
    bg: "bg-blue-subtle",
  },
];

const darkSurfaces = [
  { name: "Dark", hex: "#181818", token: "dark", bg: "bg-dark" },
  {
    name: "Dark Lighter",
    hex: "#1E1E1E",
    token: "dark-lighter",
    bg: "bg-dark-lighter",
  },
  {
    name: "Dark Card",
    hex: "#242424",
    token: "dark-card",
    bg: "bg-dark-card",
  },
  {
    name: "Dark Border",
    hex: "#2A2A2A",
    token: "dark-border",
    bg: "bg-dark-border",
  },
];

const greyscale = [
  { name: "Black 100", hex: "#181818" },
  { name: "Black 90", hex: "#2F2F2F" },
  { name: "Black 80", hex: "#464646" },
  { name: "Black 70", hex: "#5D5D5D" },
  { name: "Black 60", hex: "#747474" },
  { name: "Black 50", hex: "#8B8B8B" },
  { name: "Black 40", hex: "#A3A3A3" },
  { name: "Black 30", hex: "#BABABA" },
  { name: "Black 20", hex: "#D1D1D1" },
  { name: "Black 10", hex: "#E8E8E8" },
  { name: "White", hex: "#FFFFFF" },
];

const opacityLevels = [
  { label: "100%", class: "text-white", usage: "Headings, primary" },
  { label: "70%", class: "text-white/70", usage: "Strong secondary" },
  { label: "60%", class: "text-white/60", usage: "Body, descriptions" },
  { label: "50%", class: "text-white/50", usage: "Supporting text" },
  { label: "40%", class: "text-white/40", usage: "Labels, metadata" },
  { label: "25%", class: "text-white/25", usage: "Hints, disabled" },
];

/* ── Geometric shape constants (matching Hero layout) ── */
const DEMO_COLS = 9;
const DEMO_ROWS = 5;
const DCW = 100 / DEMO_COLS;
const DCH = 100 / DEMO_ROWS;
const DEMO_RAYS = [0, 22, 45, 68, 90, 135, 170, -15, -40, -70];

function ColorSwatch({
  name,
  hex,
  token,
  bg,
  dark,
}: {
  name: string;
  hex: string;
  token?: string;
  bg?: string;
  dark?: boolean;
}) {
  return (
    <div>
      <div
        className={`h-20 rounded-lg border border-dark-border ${bg || ""}`}
        style={bg ? undefined : { backgroundColor: hex }}
      />
      <p className={`mt-2 text-sm font-medium ${dark ? "" : "text-white"}`}>
        {name}
      </p>
      <p className="font-mono text-xs text-white/40">{hex}</p>
      {token && (
        <p className="font-mono text-xs text-white/30">{token}</p>
      )}
    </div>
  );
}

export default function BrandPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative flex items-center overflow-hidden py-32 lg:py-40">
        <Container className="relative">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="mb-3 font-mono text-sm font-medium tracking-wider text-white/40 uppercase">
              Brand
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Brand Guidelines
            </h1>
            <p className="mt-6 text-lg text-white/60">
              Visual identity system derived from the Holographik brand
              guidelines, adapted and extended for the web.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Section 2: Logo */}
      <section className="relative py-24 lg:py-32">
        <div className="divider-gradient absolute top-0 left-0 right-0" />
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="mb-3 font-mono text-sm font-medium tracking-wider text-white/40 uppercase">
                Identity
              </p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Logo
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/60">
                Three variants: Symbol, Textmark, and Wordmark (symbol +
                textmark). White on dark, black on light.
              </p>
            </motion.div>

            {/* Dark background */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-16"
            >
              <p className="mb-4 font-mono text-xs tracking-wider text-white/40 uppercase">
                On dark background
              </p>
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="flex flex-col items-center justify-center rounded-xl border border-dark-border bg-dark-card p-10">
                  <LivepeerSymbol className="h-16 w-auto text-white" />
                  <p className="mt-4 font-mono text-xs text-white/40">
                    Symbol
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center rounded-xl border border-dark-border bg-dark-card p-10">
                  <LivepeerTextmark className="h-6 w-auto text-white" />
                  <p className="mt-4 font-mono text-xs text-white/40">
                    Textmark
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center rounded-xl border border-dark-border bg-dark-card p-10">
                  <LivepeerWordmark className="h-6 w-auto text-white" />
                  <p className="mt-4 font-mono text-xs text-white/40">
                    Wordmark
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Light background */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <p className="mb-4 font-mono text-xs tracking-wider text-white/40 uppercase">
                On light background
              </p>
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white p-10">
                  <LivepeerSymbol className="h-16 w-auto text-[#181818]" />
                  <p className="mt-4 font-mono text-xs text-[#181818]/40">
                    Symbol
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white p-10">
                  <LivepeerTextmark className="h-6 w-auto text-[#181818]" />
                  <p className="mt-4 font-mono text-xs text-[#181818]/40">
                    Textmark
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white p-10">
                  <LivepeerWordmark className="h-6 w-auto text-[#181818]" />
                  <p className="mt-4 font-mono text-xs text-[#181818]/40">
                    Wordmark
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Usage notes */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-12 grid gap-6 sm:grid-cols-3"
            >
              <div className="rounded-xl border border-dark-border bg-dark-card p-6">
                <p className="font-mono text-xs font-medium tracking-wider text-white/40 uppercase">
                  Clear Space
                </p>
                <p className="mt-2 text-sm text-white/60">
                  Minimum clear space equals the width of the symbol on all
                  sides.
                </p>
              </div>
              <div className="rounded-xl border border-dark-border bg-dark-card p-6">
                <p className="font-mono text-xs font-medium tracking-wider text-white/40 uppercase">
                  Placement
                </p>
                <p className="mt-2 text-sm text-white/60">
                  Primary: top-left or bottom-left. Secondary: top-right,
                  bottom-right, or center.
                </p>
              </div>
              <div className="rounded-xl border border-dark-border bg-dark-card p-6">
                <p className="font-mono text-xs font-medium tracking-wider text-white/40 uppercase">
                  Avatars
                </p>
                <p className="mt-2 text-sm text-white/60">
                  Green gradient bg + white symbol, black bg + white symbol, or
                  white bg + black symbol.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Section 3: Color Palette */}
      <section className="relative py-24 lg:py-32">
        <div className="divider-gradient absolute top-0 left-0 right-0" />
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="mb-3 font-mono text-sm font-medium tracking-wider text-white/40 uppercase">
                Color
              </p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Color Palette
              </h2>
            </motion.div>

            {/* Primary */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-16"
            >
              <p className="mb-4 font-mono text-xs tracking-wider text-white/40 uppercase">
                Primary Colors
              </p>
              <div className="grid grid-cols-3 gap-6">
                {primaryColors.map((c) => (
                  <ColorSwatch key={c.hex} {...c} />
                ))}
              </div>
            </motion.div>

            {/* Green variants */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <p className="mb-4 font-mono text-xs tracking-wider text-white/40 uppercase">
                Green Variants
              </p>
              <div className="grid grid-cols-5 gap-4">
                {greenVariants.map((c) => (
                  <ColorSwatch key={c.token} {...c} />
                ))}
              </div>
            </motion.div>

            {/* Blue accent */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <p className="mb-4 font-mono text-xs tracking-wider text-white/40 uppercase">
                Blue Accent
              </p>
              <div className="grid grid-cols-5 gap-4">
                {blueVariants.map((c) => (
                  <ColorSwatch key={c.token} {...c} />
                ))}
              </div>
            </motion.div>

            {/* Dark surfaces */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <p className="mb-4 font-mono text-xs tracking-wider text-white/40 uppercase">
                Surface Scale
              </p>
              <div className="grid grid-cols-4 gap-6">
                {darkSurfaces.map((c) => (
                  <ColorSwatch key={c.token} {...c} />
                ))}
              </div>
            </motion.div>

            {/* Greyscale ramp */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <p className="mb-4 font-mono text-xs tracking-wider text-white/40 uppercase">
                Greyscale Ramp
              </p>
              <div className="flex gap-0 overflow-hidden rounded-lg border border-dark-border">
                {greyscale.map((c) => (
                  <div key={c.hex} className="flex-1">
                    <div
                      className="h-16"
                      style={{ backgroundColor: c.hex }}
                    />
                    <div className="bg-dark-card px-1 py-2 text-center">
                      <p className="font-mono text-[10px] text-white/40">
                        {c.hex}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Text opacity */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <p className="mb-4 font-mono text-xs tracking-wider text-white/40 uppercase">
                Text Hierarchy (Opacity)
              </p>
              <div className="space-y-3">
                {opacityLevels.map((level) => (
                  <div
                    key={level.label}
                    className="flex items-center gap-6 rounded-lg border border-dark-border bg-dark-card px-6 py-4"
                  >
                    <span
                      className={`text-lg font-medium ${level.class}`}
                    >
                      The quick brown fox
                    </span>
                    <span className="ml-auto font-mono text-xs text-white/40">
                      {level.class}
                    </span>
                    <span className="font-mono text-xs text-white/30">
                      {level.usage}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Section 4: Typography */}
      <section className="relative py-24 lg:py-32">
        <div className="divider-gradient absolute top-0 left-0 right-0" />
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="mb-3 font-mono text-sm font-medium tracking-wider text-white/40 uppercase">
                Type
              </p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Typography
              </h2>
            </motion.div>

            {/* Favorit Pro */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-16"
            >
              <p className="mb-6 font-mono text-xs tracking-wider text-white/40 uppercase">
                Favorit Pro — Primary Typeface
              </p>
              <div className="space-y-6 rounded-xl border border-dark-border bg-dark-card p-8">
                <div>
                  <p className="mb-1 font-mono text-xs text-white/30">
                    Book (300)
                  </p>
                  <p className="text-3xl font-light">
                    Open infrastructure for real-time AI video
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-mono text-xs text-white/30">
                    Regular (400)
                  </p>
                  <p className="text-3xl">
                    Open infrastructure for real-time AI video
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-mono text-xs text-white/30">
                    Medium (500)
                  </p>
                  <p className="text-3xl font-medium">
                    Open infrastructure for real-time AI video
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-mono text-xs text-white/30">
                    Bold (700)
                  </p>
                  <p className="text-3xl font-bold">
                    Open infrastructure for real-time AI video
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Favorit Mono */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <p className="mb-6 font-mono text-xs tracking-wider text-white/40 uppercase">
                Favorit Mono — Secondary Typeface
              </p>
              <div className="space-y-6 rounded-xl border border-dark-border bg-dark-card p-8">
                <div>
                  <p className="mb-1 font-mono text-xs text-white/30">
                    Regular (400)
                  </p>
                  <p className="font-mono text-2xl">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-mono text-xs text-white/30">
                    Medium (500)
                  </p>
                  <p className="font-mono text-2xl font-medium">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-mono text-xs text-white/30">
                    Bold (700)
                  </p>
                  <p className="font-mono text-2xl font-bold">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Text hierarchy examples */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <p className="mb-6 font-mono text-xs tracking-wider text-white/40 uppercase">
                Text Hierarchy
              </p>
              <div className="space-y-8 rounded-xl border border-dark-border bg-dark-card p-8">
                <div>
                  <p className="mb-1 font-mono text-xs text-white/30">
                    Label — Mono, uppercase, tracking-wider, text-white/40
                  </p>
                  <p className="font-mono text-sm font-medium tracking-wider text-white/40 uppercase">
                    Section Label
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-mono text-xs text-white/30">
                    Display Heading — Bold, tracking-tight, leading-[0.93]
                  </p>
                  <p className="text-5xl font-bold leading-[0.93] tracking-tight lg:text-7xl">
                    Hero Heading
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-mono text-xs text-white/30">
                    Section Heading — Bold, tracking-tight
                  </p>
                  <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Section Title
                  </h2>
                </div>
                <div>
                  <p className="mb-1 font-mono text-xs text-white/30">
                    Body — text-lg, text-white/60
                  </p>
                  <p className="text-lg text-white/60">
                    The Livepeer network is open infrastructure for real-time
                    AI video. Build applications powered by decentralized
                    transcoding, streaming, and AI processing.
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-mono text-xs text-white/30">
                    Stat — Mono, text-4xl, font-bold
                  </p>
                  <p className="font-mono text-4xl font-bold text-green">
                    100,000+
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Line height rules */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-12 grid gap-6 sm:grid-cols-3"
            >
              <div className="rounded-xl border border-dark-border bg-dark-card p-6">
                <p className="font-mono text-xs font-medium tracking-wider text-white/40 uppercase">
                  Display Headings
                </p>
                <p className="mt-2 font-mono text-3xl font-bold text-green">
                  93%
                </p>
                <p className="mt-1 text-sm text-white/50">
                  Favorit Pro Bold
                </p>
              </div>
              <div className="rounded-xl border border-dark-border bg-dark-card p-6">
                <p className="font-mono text-xs font-medium tracking-wider text-white/40 uppercase">
                  Mono Labels
                </p>
                <p className="mt-2 font-mono text-3xl font-bold text-green">
                  120%
                </p>
                <p className="mt-1 text-sm text-white/50">
                  Favorit Mono Bold
                </p>
              </div>
              <div className="rounded-xl border border-dark-border bg-dark-card p-6">
                <p className="font-mono text-xs font-medium tracking-wider text-white/40 uppercase">
                  Body Text
                </p>
                <p className="mt-2 font-mono text-3xl font-bold text-green">
                  100%
                </p>
                <p className="mt-1 text-sm text-white/50">
                  Favorit Pro Medium
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Section 5: Gradients */}
      <section className="relative py-24 lg:py-32">
        <div className="divider-gradient absolute top-0 left-0 right-0" />
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="mb-3 font-mono text-sm font-medium tracking-wider text-white/40 uppercase">
                Gradients
              </p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Gradients
              </h2>
            </motion.div>

            {/* Primary gradient */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-16"
            >
              <p className="mb-4 font-mono text-xs tracking-wider text-white/40 uppercase">
                Primary Brand Gradient
              </p>
              <div
                className="h-32 rounded-xl"
                style={{
                  background:
                    "linear-gradient(to right, #171717, #18794E, #6DB09C)",
                }}
              />
              <p className="mt-3 font-mono text-xs text-white/40">
                #171717 &rarr; #18794E &rarr; #6DB09C
              </p>
            </motion.div>

            {/* Text gradient */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <p className="mb-4 font-mono text-xs tracking-wider text-white/40 uppercase">
                Text Gradient
              </p>
              <div className="rounded-xl border border-dark-border bg-dark-card p-8">
                <p className="text-gradient text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Open infrastructure for real-time AI video
                </p>
                <p className="mt-4 font-mono text-xs text-white/40">
                  .text-gradient &mdash; #40BF86 &rarr; #1E9960
                </p>
              </div>
            </motion.div>

            {/* Divider gradient */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <p className="mb-4 font-mono text-xs tracking-wider text-white/40 uppercase">
                Section Divider
              </p>
              <div className="rounded-xl border border-dark-border bg-dark-card p-8">
                <div className="space-y-8">
                  <div className="divider-gradient" />
                  <div className="divider-gradient" />
                  <div className="divider-gradient" />
                </div>
                <p className="mt-6 font-mono text-xs text-white/40">
                  .divider-gradient &mdash; 1px white glow, transparent edges
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Section 6: Graphic Elements */}
      <section className="relative py-24 lg:py-32">
        <div className="divider-gradient absolute top-0 left-0 right-0" />
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="mb-3 font-mono text-sm font-medium tracking-wider text-white/40 uppercase">
                Elements
              </p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Graphic Elements
              </h2>
            </motion.div>

            {/* ImageMask demo */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-16"
            >
              <p className="mb-4 font-mono text-xs tracking-wider text-white/40 uppercase">
                ImageMask Component
              </p>
              <ImageMask className="aspect-video rounded-xl" cols={9} rows={5}>
                <div
                  className="h-full w-full"
                  style={{
                    background:
                      "linear-gradient(160deg, #030d09 0%, #0a2818 40%, #18794e 100%)",
                  }}
                />
              </ImageMask>
              <p className="mt-3 text-sm text-white/50">
                5-layer system: dark green base, B&W media, tile grid with white
                borders, scan line sweep, vignette. Pure CSS, no canvas.
              </p>
            </motion.div>

            {/* Tile grid demo */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <p className="mb-4 font-mono text-xs tracking-wider text-white/40 uppercase">
                Tile Grid Pattern
              </p>
              <div className="tile-bg h-48 rounded-xl border border-dark-border" />
              <p className="mt-3 font-mono text-xs text-white/40">
                .tile-bg &mdash; 48px grid, rgba(24,121,78,0.04)
              </p>
            </motion.div>

            {/* Individual shapes */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <p className="mb-4 font-mono text-xs tracking-wider text-white/40 uppercase">
                Geometric Shapes
              </p>
              <p className="mb-6 text-sm text-white/50">
                Simple geometric line shapes layered over gradients for
                structural framing and visual depth. All shapes use
                rgba(255,255,255) at low opacity.
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Circle */}
                <div className="flex flex-col items-center rounded-xl border border-dark-border bg-dark-card p-8">
                  <div className="relative h-28 w-28">
                    <div
                      className="absolute inset-0 rounded-full animate-[breathe_8s_ease-in-out_infinite]"
                      style={{
                        border: "1px solid rgba(255,255,255,0.15)",
                      }}
                    />
                  </div>
                  <p className="mt-4 font-mono text-xs text-white/40">
                    Circle
                  </p>
                  <p className="mt-1 text-center text-xs text-white/30">
                    Breathe animation, 8s cycle
                  </p>
                </div>

                {/* Starburst */}
                <div className="flex flex-col items-center rounded-xl border border-dark-border bg-dark-card p-8">
                  <div className="relative h-28 w-28">
                    <div
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full animate-[node-pulse_6s_ease-in-out_infinite]"
                      style={{
                        width: "32px",
                        height: "32px",
                        background:
                          "radial-gradient(circle, rgba(64,191,134,0.25) 0%, rgba(64,191,134,0.08) 40%, transparent 70%)",
                      }}
                    />
                    {DEMO_RAYS.map((angle, i) => (
                      <div
                        key={`demo-ray-${i}`}
                        className="absolute"
                        style={{
                          left: "50%",
                          top: "50%",
                          width: "50px",
                          height: "1px",
                          background:
                            "linear-gradient(to right, rgba(255,255,255,0.12), rgba(255,255,255,0.03) 35%, transparent 70%)",
                          transformOrigin: "0% 50%",
                          transform: `rotate(${angle}deg)`,
                        }}
                      />
                    ))}
                  </div>
                  <p className="mt-4 font-mono text-xs text-white/40">
                    Starburst
                  </p>
                  <p className="mt-1 text-center text-xs text-white/30">
                    Radiating rays + pulsing center
                  </p>
                </div>

                {/* Crosshair */}
                <div className="flex flex-col items-center rounded-xl border border-dark-border bg-dark-card p-8">
                  <div className="relative h-28 w-28">
                    <div className="absolute left-1/2 top-1/2">
                      <div
                        style={{
                          position: "absolute",
                          left: "-12px",
                          top: "-0.5px",
                          width: "25px",
                          height: "1px",
                          background: "rgba(255,255,255,0.15)",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          left: "-0.5px",
                          top: "-12px",
                          width: "1px",
                          height: "25px",
                          background: "rgba(255,255,255,0.15)",
                        }}
                      />
                    </div>
                  </div>
                  <p className="mt-4 font-mono text-xs text-white/40">
                    Crosshair
                  </p>
                  <p className="mt-1 text-center text-xs text-white/30">
                    Grid intersection marker
                  </p>
                </div>

                {/* Lines */}
                <div className="flex flex-col items-center rounded-xl border border-dark-border bg-dark-card p-8">
                  <div className="relative h-28 w-28">
                    {/* H-line */}
                    <div
                      className="absolute"
                      style={{
                        left: "10%",
                        top: "40%",
                        width: "80%",
                        height: "1px",
                        background:
                          "linear-gradient(to right, rgba(255,255,255,0.08), rgba(255,255,255,0.12) 40%, transparent 100%)",
                      }}
                    />
                    {/* V-line */}
                    <div
                      className="absolute"
                      style={{
                        left: "60%",
                        top: "20%",
                        width: "1px",
                        height: "60%",
                        background:
                          "linear-gradient(to bottom, rgba(255,255,255,0.10), transparent 100%)",
                      }}
                    />
                  </div>
                  <p className="mt-4 font-mono text-xs text-white/40">
                    Lines
                  </p>
                  <p className="mt-1 text-center text-xs text-white/30">
                    Horizontal &amp; vertical seams
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Composed example */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <p className="mb-4 font-mono text-xs tracking-wider text-white/40 uppercase">
                Composed — Hero Example
              </p>
              <p className="mb-6 text-sm text-white/50">
                Shapes are layered on the tile grid, aligned to grid
                intersections. Start with the grid, add shapes for structure,
                then accent with a starburst node.
              </p>
              <div
                className="tile-bg relative overflow-hidden rounded-xl border border-dark-border"
                style={{
                  aspectRatio: "16/9",
                  background:
                    "linear-gradient(160deg, #030d09 0%, #0a2818 40%, #18794e 100%)",
                }}
              >
                {/* Large circle — cols 6–8, rows 0–2 */}
                <div
                  className="absolute rounded-full animate-[breathe_8s_ease-in-out_infinite]"
                  style={{
                    left: `${6 * DCW}%`,
                    top: "0%",
                    width: `${3 * DCW}%`,
                    height: `${3 * DCH}%`,
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                />

                {/* Small circle — cols 0–1, rows 3–4 */}
                <div
                  className="absolute rounded-full animate-[breathe_8s_ease-in-out_infinite_3s]"
                  style={{
                    left: "0%",
                    top: `${3 * DCH}%`,
                    width: `${2 * DCW}%`,
                    height: `${2 * DCH}%`,
                    border: "1px solid rgba(255,255,255,0.10)",
                  }}
                />

                {/* Starburst — (col 1, row 1) */}
                <div
                  className="absolute rounded-full animate-[node-pulse_6s_ease-in-out_infinite]"
                  style={{
                    left: `calc(${DCW}% - 20px)`,
                    top: `calc(${DCH}% - 20px)`,
                    width: "40px",
                    height: "40px",
                    background:
                      "radial-gradient(circle, rgba(64,191,134,0.25) 0%, rgba(64,191,134,0.08) 40%, transparent 70%)",
                  }}
                />
                {DEMO_RAYS.map((angle, i) => (
                  <div
                    key={`comp-ray-${i}`}
                    className="absolute"
                    style={{
                      left: `${1 * DCW}%`,
                      top: `${1 * DCH}%`,
                      width: "40%",
                      height: "1px",
                      background:
                        "linear-gradient(to right, rgba(255,255,255,0.12), rgba(255,255,255,0.03) 35%, transparent 70%)",
                      transformOrigin: "0% 50%",
                      transform: `rotate(${angle}deg)`,
                    }}
                  />
                ))}

                {/* H-line — row 3, cols 0–4 */}
                <div
                  className="absolute"
                  style={{
                    left: "0%",
                    top: `${3 * DCH}%`,
                    width: `${4 * DCW}%`,
                    height: "1px",
                    background:
                      "linear-gradient(to right, rgba(255,255,255,0.08), rgba(255,255,255,0.12) 40%, transparent 100%)",
                  }}
                />

                {/* V-line — col 7, rows 3–5 */}
                <div
                  className="absolute"
                  style={{
                    left: `${7 * DCW}%`,
                    top: `${3 * DCH}%`,
                    width: "1px",
                    height: `${2 * DCH}%`,
                    background:
                      "linear-gradient(to bottom, rgba(255,255,255,0.10), transparent 100%)",
                  }}
                />

                {/* Crosshair — (col 6, row 4) */}
                <div
                  className="absolute"
                  style={{
                    left: `${6 * DCW}%`,
                    top: `${4 * DCH}%`,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "-6px",
                      top: "-0.5px",
                      width: "13px",
                      height: "1px",
                      background: "rgba(255,255,255,0.12)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: "-0.5px",
                      top: "-6px",
                      width: "1px",
                      height: "13px",
                      background: "rgba(255,255,255,0.12)",
                    }}
                  />
                </div>

                {/* Vignette */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(3,13,9,0.6) 100%)",
                  }}
                />
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-dark-border bg-dark-card px-4 py-3">
                  <p className="font-mono text-xs font-medium text-green">
                    1. Grid
                  </p>
                  <p className="mt-1 text-xs text-white/40">
                    Tile grid provides the coordinate system. Shapes snap to
                    intersections.
                  </p>
                </div>
                <div className="rounded-lg border border-dark-border bg-dark-card px-4 py-3">
                  <p className="font-mono text-xs font-medium text-green">
                    2. Structure
                  </p>
                  <p className="mt-1 text-xs text-white/40">
                    Circles, lines, and crosshairs create depth and framing at
                    low opacity.
                  </p>
                </div>
                <div className="rounded-lg border border-dark-border bg-dark-card px-4 py-3">
                  <p className="font-mono text-xs font-medium text-green">
                    3. Accent
                  </p>
                  <p className="mt-1 text-xs text-white/40">
                    Starburst node with emerald glow and pulse trail adds the AI
                    focal point.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
