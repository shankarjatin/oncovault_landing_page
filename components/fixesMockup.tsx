"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const phoneMockupsFull = [
  "/mackup3.png",
  "/mackup2.png",
  "/mackuo2.png",
  "/mackup4.png",
  "/mackup5.png"
]

// Only 3 screens for mobile
const phoneMockupsMobile = [
  "/mackup2.png",
  "/mackuo2.png",
  "/mackup4.png"
]

// Desktop positions for 5 screens
const phonePositionsDesktop = [
  { top: "38%", left: "18%", rotate: "-12deg", z: 10 },
  { top: "46%", left: "32%", rotate: "-6deg", z: 20 },
  { top: "50%", left: "50%", rotate: "0deg", z: 30 },
  { top: "46%", left: "68%", rotate: "6deg", z: 20 },
  { top: "38%", left: "82%", rotate: "12deg", z: 10 }
]

// Mobile positions for 3 screens
const phonePositionsMobile = [
  { top: "50%", left: "32%", rotate: "-8deg", z: 10 },
  { top: "54%", left: "50%", rotate: "0deg", z: 20 },
  { top: "50%", left: "68%", rotate: "8deg", z: 10 }
]

export default function FixesMockup() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Use only 3 screens and smaller size for mobile
  const phoneMockups = isMobile ? phoneMockupsMobile : phoneMockupsFull
  const phonePositions = isMobile ? phonePositionsMobile : phonePositionsDesktop
  const phoneWidth = isMobile ? 80 : 120
  const phoneHeight = isMobile ? 180 : 220
  const aspectMobile = "aspect-[4/7]"
  const aspectDesktop = "aspect-[5/6]"

  return (
    <aside
      className={`relative w-full max-w-4xl mx-auto ${
        isMobile ? aspectMobile : aspectDesktop
      } bg-white rounded-2xl overflow-hidden flex items-center justify-center`}
      style={isMobile ? { maxHeight: 220 } : {}}
    >
      {/* Circular hue background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="md:absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[380px] rounded-full bg- opacity-30 blur-2xl"></div>
        <div className="md:absolute left-1/3 top-1/4 w-[260px] h-[260px] rounded-full bg-blue-700 opacity-20 blur-xl"></div>
        <div className="md:absolute right-1/4 bottom-1/4 w-[220px] h-[220px] rounded-full bg-blue-800 opacity-20 blur-xl"></div>
      </div>

      {/* Phone mockups with hover z-index fix and responsive size */}
      <div className="absolute inset-0 z-10">
        {phoneMockups.map((src, idx) => {
          const pos = phonePositions[idx]
          const isHoveredPhone = hovered === idx
          return (
            <div
              key={src}
              className={`absolute transition-transform duration-300 ease-out ${isHoveredPhone ? "scale-110" : ""}`}
              style={{
                top: pos.top,
                left: pos.left,
                transform: `translate(-50%, -50%) rotate(${pos.rotate})`,
                width: `${phoneWidth}px`,
                height: `${phoneHeight}px`,
                zIndex: isHoveredPhone ? 100 : pos.z,
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
                className="object-contain md:rounded-2xl bg-white"
                unoptimized
                priority={idx === 1}
              />
            </div>
          )
        })}
      </div>
    </aside>
  )
}