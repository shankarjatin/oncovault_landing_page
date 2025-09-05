"use client"

import Reveal from "./reveal"
import { FileText, Tag, Timer } from "lucide-react"

const items = [
  {
    title: "Unstructured Cancer Records",
    desc: "Scans, lab reports, and doctor’s notes arrive in mixed formats buried details and duplicate pages make it hard to find what really matters.",
    icon: FileText,
    iconColor: "text-brand bg-blue-100",
  },
  {
    title: "Manual Tagging & Sorting",
    desc: "Patients and caregivers spend countless hours organizing reports by date, doctor, or test type time that should go into care, not paperwork.",
    icon: Tag,
    iconColor: "text-brand bg-blue-100",
  },
  {
    title: "Missed Reports & Treatment Delay",
    desc: "Critical test results and follow-up notes often get buried or lost in scattered files, causing gaps in history, repeated tests, and delays in treatment decisions.",
    icon: Timer,
    iconColor: "text-brand bg-blue-100",
  },
]

export default function Problem() {
  return (
    <section id="problem" className="section relative overflow-hidden bg-white">
      {/* Minimal blue circular hue background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-blue-400 opacity-80 blur-2xl"></div>
      </div>
      <div className="mx-auto max-w-6xl px-4 flex flex-col items-center">
        <Reveal>
          <div className="max-w-3xl text-center mx-auto">
            <h2 className="text-2xl md:text-4xl font-heading font-bold tracking-tight text-[#204060] display-block">
              Cancer Report Management Today is Broken
            </h2>
            <p className="mt-4 text-[color:var(--dark)]/80 leading-relaxed">
              Patients and doctors are slowed down by scattered files, misplaced reports, and manual tracking.<br />
              This creates delays, stress, and confusion in an already difficult journey.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full">
          {items.map(({ title, desc, icon: Icon, iconColor }, i) => (
            <Reveal key={title} delay={i * 120}>
              <div className="flex flex-col items-center justify-between bg-white rounded-xl shadow-lg border border-neutral-100 p-6 md:p-8 h-[260px] md:h-[320px] w-full max-w-sm mx-auto transition-transform hover:scale-105  duration-300 hover:shadow-blue-200 hover:shadow-2xl">
                <div className={`rounded-full p-4 mb-2 shadow-sm ${iconColor}`}>
                  <Icon className="h-8 w-8" aria-hidden />
                </div>
                <h3 className="text-base md:text-lg font-heading font-bold text-[#204060] text-center mb-2">{title}</h3>
                <p className="text-xs md:text-sm text-[color:var(--dark)]/75 leading-relaxed text-center">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}