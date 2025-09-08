"use client"

import Reveal from "./reveal"
import { Layers, Clock, Cloud, Smartphone, ArrowRight } from "lucide-react"
import FixesMockup from "./fixesMockup"

export default function Pilot() {
  return (
    <section id="solution" className="section">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-2 md:gap-10 px-4 md:grid-cols-2">
        {/* Mobile: mockup above pointers */}
        <Reveal>
          <div className="md:py-10 flex flex-col">
            {/* Show mockup above pointers for mobile */}
            
            <h2 className="text-xl md:text-4xl font-heading font-bold tracking-tight text-[#204060] ">
              The OncoVault Fixes This
            </h2>
            <div className="block md:hidden mb-6">
              <FixesMockup />
            </div>
            <p className="mt-4 text-sm md:text-lg text-[color:var(--dark)]/80 leading-relaxed">
              We transform scattered medical data into a unified, chronological timeline, so patients and doctors can track every step with{" "}
              <span className="font-bold text-[#204060]">clarity</span> and{" "}
              <span className="font-bold text-[#204060]">confidence</span>.
            </p>
            {/* Desktop: mockup stays on right */}
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <div className="rounded-md bg-blue-100 p-2 mt-1">
                  <Layers className="h-5 w-5 text-brand" aria-hidden />
                </div>
                <div>
                  <span className="text-sm md:text-lg font-semibold text-[#204060]">Auto-Classification:</span>{" "}
                  Instantly recognizes scans, labs, and prescriptions.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="rounded-md bg-blue-100 p-2 mt-1">
                  <Clock className="h-5 w-5 text-brand" aria-hidden />
                </div>
                <div>
                  <span className="text-sm md:text-lg font-semibold text-[#204060]">Smart Timelines:</span>{" "}
                  Automatically arranges reports by date.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="rounded-md bg-blue-100 p-2 mt-1">
                  <Cloud className="h-5 w-5 text-brand" aria-hidden />
                </div>
                <div>
                  <span className="text-sm md:text-lg font-semibold text-[#204060]">Always Accessible:</span>{" "}
                  Every report stored securely in one place.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="rounded-md bg-blue-100 p-2 mt-1">
                  <Smartphone className="h-5 w-5 text-brand" aria-hidden />
                </div>
                <div>
                  <span className="text-sm md:text-lg font-semibold text-[#204060]">Clarity for Decisions:</span>{" "}
                  Faster insights for better care.
                </div>
              </li>
            </ul>
            {/* Download App CTA Box */}
            <div className="mt-5 w-full">
              <a
                href="#"
                className="group flex items-center justify-between bg-blue-50 border border-blue-200 rounded-xl px-6 py-2 md:py-5 shadow-sm hover:shadow-md transition-all"
              >
                <div>
                  <p className="text-md md:text-lg font-semibold text-brand">Download the App</p>
                  <p className="text-xs md:text-sm text-blue-700/80">
                   and organise reports in one secure app.
                  </p>
                </div>
                <ArrowRight className="h-6 w-6 text-brand group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </Reveal>
        {/* Desktop: mockup on right */}
        <Reveal delay={100}>
          <div className="hidden md:block">
            <FixesMockup />
          </div>
        </Reveal>
      </div>
    </section>
  )
}