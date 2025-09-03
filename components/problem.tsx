"use client"

import Reveal from "./reveal"
import { FileText, Tag, Timer } from "lucide-react"

const items = [
  {
    title: "Unstructured Cancer Records",
    desc: "Scans, lab reports, and doctor’s notes arrive in mixed formats—buried details and duplicate pages make it hard to find what really matters.",
    icon: FileText,
  },
  {
    title: "Manual Tagging & Sorting",
    desc: "Patients and caregivers spend countless hours organizing reports by date, doctor, or test type—time that should go into care, not paperwork.",
    icon: Tag,
  },
  {
    title: "Missed Reports & Treatment Delay",
    desc: "Critical test results and follow-up notes often get buried or lost in scattered files, causing gaps in history, repeated tests, and delays in treatment decisions.",
    icon: Timer,
  },
]

export default function Problem() {
  return (
    <section id="problem" className="section bg-muted">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-4xl font-heading font-semibold tracking-tight text-[color:var(--dark)]">
              Cancer Report Management Today is Broken
            </h2>
            <p className="mt-4 text-[color:var(--dark)]/80 leading-relaxed">
              Patients and doctors are slowed down by scattered files, misplaced reports, and manual tracking. This
              creates delays, stress, and confusion in an already difficult journey.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map(({ title, desc, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="card card-hover p-6 border-t-2 [border-top-color:color-mix(in_oklab,var(--brand),white_70%)]">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-[color:var(--brand)]/10 p-2">
                    <Icon className="h-6 w-6 text-brand" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-[color:var(--dark)]">{title}</h3>
                    <p className="mt-2 text-sm text-[color:var(--dark)]/75 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
