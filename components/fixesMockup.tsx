"use client"

import Image from "next/image"
import { useState } from "react"

const phoneMockups = [

  "/mackup3.png",
  "/mackup2.png",
  "/mackuo2.png",
  "/mackup4.png",
  "/mackup5.png"
]

// Responsive positions for desktop and mobile
const phonePositionsDesktop = [
  { top: "38%", left: "18%", rotate: "-12deg", z: 10 },
  { top: "46%", left: "32%", rotate: "-6deg", z: 20 },
  { top: "50%", left: "50%", rotate: "0deg", z: 30 },
  { top: "46%", left: "68%", rotate: "6deg", z: 20 },
  { top: "38%", left: "82%", rotate: "12deg", z: 10 }
]

const phonePositionsMobile = [
  { top: "30%", left: "20%", rotate: "-10deg", z: 10 },
  { top: "38%", left: "35%", rotate: "-5deg", z: 20 },
  { top: "45%", left: "50%", rotate: "0deg", z: 30 },
  { top: "38%", left: "65%", rotate: "5deg", z: 20 },
  { top: "30%", left: "80%", rotate: "10deg", z: 10 }
]

export default function FixesMockup() {
  const [hovered, setHovered] = useState<number | null>(null)
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640
  const phonePositions = isMobile ? phonePositionsMobile : phonePositionsDesktop
const phoneWidth = isMobile ? 60 : 120
const phoneHeight = isMobile ? 150 : 220

  return (
<aside className="relative w-full max-w-4xl mx-auto aspect-[5/6] bg-white rounded-2xl overflow-hidden flex items-center justify-center">
      {/* Circular hue background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[380px] rounded-full bg- opacity-30 blur-2xl"></div>
        <div className="absolute left-1/3 top-1/4 w-[260px] h-[260px] rounded-full bg-blue-700 opacity-20 blur-xl"></div>
        <div className="absolute right-1/4 bottom-1/4 w-[220px] h-[220px] rounded-full bg-blue-800 opacity-20 blur-xl"></div>
      </div>

      {/* Phone mockups with hover z-index fix and responsive size */}
      <div className="absolute inset-0 z-10">
        {phoneMockups.map((src, idx) => {
          const pos = phonePositions[idx]
          const isHovered = hovered === idx
          return (
            <div
              key={src}
              className={`absolute transition-transform duration-300 ease-out ${isHovered ? "scale-110" : ""}`}
              style={{
                top: pos.top,
                left: pos.left,
                transform: `translate(-50%, -50%) rotate(${pos.rotate})`,
                width: `${phoneWidth}px`,
                height: `${phoneHeight}px`,
                zIndex: isHovered ? 100 : pos.z,
                boxShadow: "0 8px 32px 0 rgba(40,60,120,0.16)",
                cursor: "pointer"
              }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <Image
                src={src}
                alt={`OncoVault phone mockup ${idx + 1}`}
                width={phoneWidth}
                height={phoneHeight}
                className="object-contain rounded-2xl bg-white"
                unoptimized
                priority={idx === 2}
              />
            </div>
          )
        })}
      </div>

      {/* Center logo with white background */}
      {/* <div className="absolute z-20 left-1/2 bottom-4 -translate-x-1/2">
        <div className="bg-white/90 px-4 py-2 rounded-xl shadow-md flex items-center gap-2">
          <Image
            src="/oncovault-logo.svg"
            alt="OncoVault logo"
            width={isMobile ? 20 : 32}
            height={isMobile ? 20 : 32}
            className="object-contain"
            unoptimized
          />
        
        </div>
      </div> */}
    </aside>
  )
}