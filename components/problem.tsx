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
    <section id="problem" className="section relative overflow-hidden bg-blue-50">
      {/* Minimal blue circular hue background */}
   
      <div className="mx-auto max-w-6xl px-4 flex flex-col items-center">
        <Reveal>
          <div className="max-w-3xl text-center mx-auto">
            <h2 className="text-lg md:text-4xl font-heading font-bold tracking-tight text-[#204060] display-block">
              Cancer Report Management Today is Broken
            </h2>
            <p className="mt-4 text-sm md:text-lg text-[color:var(--dark)]/80 leading-relaxed text-justify">
              Patients and doctors are slowed down by scattered files, misplaced reports, and manual tracking.
              This creates delays, stress, and confusion in an already difficult journey.
            </p>
          </div>
        </Reveal>

      <div className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full">
  {items.map(({ title, desc, icon: Icon, iconColor }, i) => (
    <Reveal key={title} delay={i * 120}>
      <div className="flex flex-col md:items-center  bg-white rounded-xl shadow-lg border border-neutral-100 p-4 md:p-8 h-auto md:h-[300px] w-full max-w-sm mx-auto transition-transform hover:scale-105 duration-300 hover:shadow-blue-200 hover:shadow-2xl">
        {/* Mobile: icon and heading in one row, description below */}
        <div className="flex items-center w-full mb-2 md:flex-col md:items-center md:mb-4">
          <div className={`rounded-full p-2 md:p-3 shadow-sm ${iconColor} mr-3 md:mr-0 md:mb-2`}>
            <Icon className="h-4 w-4 md:h-8 md:w-8" aria-hidden />
          </div>
          <h3 className="text-sm md:text-lg md:leading-relaxed md:min-h-[4rem] font-heading font-bold text-[#204060] text-left md:text-center md:pt-2">{title}</h3>
        </div>
        <p className="text-xs md:text-sm text-[color:var(--dark)]/75 leading-relaxed  md:text-center text-justify">{desc}</p>
      </div>
    </Reveal>
  ))}
</div>
      </div>
    </section>
  )
}