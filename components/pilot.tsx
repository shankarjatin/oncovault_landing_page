"use client"

import Reveal from "./reveal"
import { Layers, Clock, Cloud, Smartphone, ArrowRight } from "lucide-react"
import MockupImage from "./fixesMockup"

export default function Pilot() {
  return (
    <section id="pilot" className="section">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-4 md:grid-cols-2">
        <Reveal>
       <div className="md:py-10">
  <h2 className="text-2xl md:text-4xl font-heading font-semibold tracking-tight text-brand ">
    OncoVault Fixes This
  </h2>
  <p className="mt-4 text-[color:var(--dark)]/80 leading-relaxed">
    We transform scattered medical files into a unified, chronological timeline—
    <br className="hidden md:block" />
    so patients and doctors can track every step with{" "}
    <span className="font-bold text-brand">clarity</span> and{" "}
    <span className="font-bold text-brand">confidence</span>.
  </p>
  <ul className="mt-6 space-y-4">
    <li className="flex items-start gap-3">
      <div className="rounded-md bg-blue-100 p-2 mt-1">
        <Layers className="h-5 w-5 text-blue-500" aria-hidden />
      </div>
      <div>
        <span className="font-semibold text-brand">Auto-Classification:</span>{" "}
        Instantly recognizes scans, labs, and prescriptions.
      </div>
    </li>
    <li className="flex items-start gap-3">
      <div className="rounded-md bg-yellow-100 p-2 mt-1">
        <Clock className="h-5 w-5 text-yellow-500" aria-hidden />
      </div>
      <div>
        <span className="font-semibold text-brand">Smart Timelines:</span>{" "}
        Automatically arranges reports by date.
      </div>
    </li>
    <li className="flex items-start gap-3">
      <div className="rounded-md bg-purple-100 p-2 mt-1">
        <Cloud className="h-5 w-5 text-purple-500" aria-hidden />
      </div>
      <div>
        <span className="font-semibold text-brand">Always Accessible:</span>{" "}
        Every report stored securely in one place.
      </div>
    </li>
    <li className="flex items-start gap-3">
      <div className="rounded-md bg-green-100 p-2 mt-1">
        <Smartphone className="h-5 w-5 text-green-500" aria-hidden />
      </div>
      <div>
        <span className="font-semibold text-brand">Clarity for Decisions:</span>{" "}
        Faster insights for better care.
      </div>
    </li>
  </ul>

  {/* Download App CTA Box */}
  <div className="mt-5 w-full">
    <a
      href="#"
      className="group flex items-center justify-between bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-xl px-6 py-5 shadow-sm hover:shadow-md transition-all"
    >
      <div>
        <p className="text-lg font-semibold text-yellow-800">Download the App</p>
        <p className="text-sm text-yellow-700/80">
          Get OncoVault on your mobile → 
        </p>
      </div>
      <ArrowRight className="h-6 w-6 text-yellow-600 group-hover:translate-x-1 transition-transform" />
    </a>
  </div>
</div>

        </Reveal>

        <Reveal delay={100}>
          <MockupImage />
        </Reveal>
      </div>
    </section>
  )
}