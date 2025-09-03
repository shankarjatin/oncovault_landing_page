"use client"

import Reveal from "./reveal"

export default function ClosingCTA() {
  return (
    <section id="download" className="section bg-brand">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="text-pretty text-2xl md:text-4xl font-heading font-semibold tracking-tight text-onbrand">
              Transform cancer care with clarity and confidence.
            </h2>
            <a href="#" className="btn btn-invert" aria-label="Download the OncoVault App">
              Download the App
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
