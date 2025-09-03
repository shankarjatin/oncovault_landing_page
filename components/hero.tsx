"use client"

import HeroMockup from "./heroMockup"
import Reveal from "./reveal"

export default function Hero() {
  return (
    <section id="home" className="section">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
        <Reveal>
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[color:var(--accent)]/10 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              <span className="text-xs font-medium text-accent">Healthcare AI • Patient‑first</span>
            </div>
            <h1 className="text-pretty text-3xl md:text-5xl font-heading font-bold tracking-tight text-brand">
              We make cancer treatment journey simple, organized, and intelligent.
            </h1>
            <p className="text-base md:text-lg text-[color:var(--dark)]/80 leading-relaxed">
              OncoVault automates cancer report organization, transforming scattered medical files into a unified,
              chronological timeline so patients and doctors can track the journey with clarity and confidence.
            </p>
            <div className="flex items-center gap-3">
              <a href="#download" className="btn btn-brand">
                Download the App
              </a>
            </div>
          </div>
        </Reveal>
 <Reveal delay={100}>
         <HeroMockup />
        </Reveal>
      </div>
    </section>
  )
}
