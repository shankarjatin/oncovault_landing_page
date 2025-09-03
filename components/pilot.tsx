"use client"

import type React from "react"
import Reveal from "./reveal"
import { CheckCircle2, Smartphone, Layers, Clock, Cloud } from "lucide-react"

function ProgressDots({ filled = 5, total = 12 }: { filled?: number; total?: number }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`inline-block h-2.5 w-2.5 rounded-full ${i < filled ? "bg-brand" : "bg-[color:var(--brand)]/20"}`}
          aria-hidden
        />
      ))}
      <span className="ml-2 text-sm text-[color:var(--dark)]/70">
        {filled} of {total} slots filled
      </span>
    </div>
  )
}

function ProgressBar({ filled = 5, total = 12 }: { filled?: number; total?: number }) {
  const pct = Math.max(0, Math.min(100, Math.round((filled / total) * 100)))
  return (
    <div className="progress" style={{ "--progress": `${pct}%` } as React.CSSProperties}>
      <div className="progress-fill" />
    </div>
  )
}

export default function Pilot() {
  return (
    <section id="pilot" className="section">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-4 md:grid-cols-2">
        <Reveal>
          <div>
            <h2 className="text-2xl md:text-4xl font-heading font-semibold tracking-tight text-brand">
              Join Our Pilot Program
            </h2>
            <div className="mt-4">
              <ProgressDots filled={5} total={12} />
              <div className="mt-3 max-w-md">
                <ProgressBar filled={5} total={12} />
              </div>
            </div>
            <p className="mt-4 text-[color:var(--dark)]/80 leading-relaxed">
              We’re partnering with select organizations to perfect our AI documentation solution. Get early access with
              preferred pricing and direct input on product development.
            </p>

            <ul className="mt-6 space-y-3">
              {["Priority Implementation", "Exclusive Pricing", "Shape the Product"].map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand" aria-hidden />
                  <span className="text-[color:var(--dark)]">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="text-lg font-heading font-semibold tracking-tight text-[color:var(--dark)]">
                OncoVault Fixes This
              </h3>
              <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                {[
                  { label: "Auto-Classification", icon: Layers },
                  { label: "Smart Timelines", icon: Clock },
                  { label: "Always Accessible", icon: Cloud },
                  { label: "Clarity for Decisions", icon: Smartphone },
                ].map(({ label, icon: Icon }, i) => (
                  <li key={label} className="flex items-center gap-3">
                    <div className="rounded-md bg-[color:var(--accent)]/10 p-2">
                      <Icon className="h-4 w-4 text-accent" aria-hidden />
                    </div>
                    <span className="text-sm text-[color:var(--dark)]">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <aside className="card card-hover p-4 md:p-6">
            <img
              src="/oncovault-mobile-app-ui-mockup.jpg"
              alt="Placeholder for OncoVault mobile UI mockup"
              className="w-full rounded-lg"
            />
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
