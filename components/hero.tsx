"use client"

import Image from "next/image"
import Reveal from "./reveal"

export default function Hero() {
  return (
    <section id="home" className="section">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-[1.2fr_1fr] items-center gap-0 px-4">
        <Reveal>
          <div className="flex flex-col gap-3 md:gap-6 pt-10 pb-6 px-2 md:px-12">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[color:var(--accent)]/10 px-3 py-1">
              <span className="h-2.5 w-2.5 rounded-full bg-accent" aria-hidden />
              <span className="text-xs font-medium text-accent">Healthcare AI </span>
              <span className="h-2.5 w-2.5 rounded-full bg-accent" aria-hidden />
              <span className="text-xs font-medium text-accent"> Patient‑first Approach</span>
            </div>
            <h1 className="text-pretty text-lg md:text-4xl font-heading font-bold tracking-tight text-[#204060] max-w-[900px]">
              <span className="block">
                Empowering oncology with unified, secure data and
              </span>
              <span className="block">
                insights that matter.
              </span>
            </h1>
            <p className="text-sm md:text-lg text-[color:var(--dark)]/80 md:leading-relaxed">
              OncoVault helps clinicians to derive real-world evidence, and speed clinical decisions without compromising on privacy or compliance.
            </p>
            {/* Feature Pointers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-brand">
                  {/* Lock Icon */}
                  <svg width="24" height="24" fill="none" stroke="#3b82f6" strokeWidth="2"><rect x="6" y="10" width="12" height="8" rx="2"/><path d="M9 10V7a3 3 0 0 1 6 0v3"/></svg>
                </span>
                <div>
                  <div className="text-sm md:text-lg font-semibold text-[color:var(--dark)]">HIPAA-compliant</div>
                  <div className="text-xs md:text-sm text-gray-500">Enterprise-grade security &amp; audit logs</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-brand">
                  {/* Document Icon */}
                  <svg width="24" height="24" fill="none" stroke="#3b82f6" strokeWidth="2"><rect x="6" y="4" width="12" height="16" rx="2"/><path d="M9 8h6M9 12h6M9 16h6"/></svg>
                </span>
                <div>
                  <div className="text-sm md:text-lg font-semibold text-[color:var(--dark)]">Structured reports</div>
                  <div className="text-xs md:text-sm text-gray-500">AI Powered timeline &amp; insights</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-brand">
                  {/* User Icon */}
                  <svg width="24" height="24" fill="none" stroke="#3b82f6" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/></svg>
                </span>
                <div>
                  <div className=" text-sm md:text-lg font-semibold text-[color:var(--dark)]">Clinician-friendly</div>
                  <div className="text-xs md:text-sm text-gray-500">Designed for fast chart review and collaboration</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-brand">
                  {/* Globe Icon */}
                  <svg width="24" height="24" fill="none" stroke="#3b82f6" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2v20"/><ellipse cx="12" cy="12" rx="6" ry="10"/></svg>
                </span>
                <div>
                  <div className="text-sm md:text-lg font-semibold text-[color:var(--dark)]">Research-ready</div>
                  <div className="text-xs md:text-sm text-gray-500">De-identified datasets for RWE and cohorts</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href="#download" className="hidden md:inline-flex btn btn-brand rounded-full">
                Download the App
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          {/* Mobile: Image in box with overlay */}
          <div className="block md:hidden w-full max-w-xs mx-auto rounded-2xl overflow-hidden shadow-lg relative mt-1 mb-1">
            <Image
              src="/woman-with-cancer.jpg"
              alt="OncoVault Hero"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          {/* Desktop: Existing image */}
          <div className="hidden md:block relative h-[400px] md:h-[420px] w-full items-center justify-center">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/woman-with-cancer.jpg"
                alt="OncoVault Hero"
                fill
                className="object-cover w-full h-full"
                style={{
                  clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)"
                }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}