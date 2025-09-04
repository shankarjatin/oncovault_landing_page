"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Use string paths for public images for instant load
const mockupSources = [
  "/mackuo2.png",
  "/mackup2.png",
  "/mackup3.png",
  "/mackup4.png",
  "/mackup5.png",
  "/mackup6.png"
];

const VISIBLE_COUNT = 3;
const AUTO_SCROLL_INTERVAL = 2500; // ms

export default function HeroMockup() {
  const [startIdx, setStartIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll logic with smooth transition
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setStartIdx((prev) => (prev + 1) % mockupSources.length);
        setIsAnimating(false);
      }, 400); // match transition duration
    }, AUTO_SCROLL_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [startIdx]);

  // Get visible images in circular fashion
  const visibleImages = Array.from({ length: VISIBLE_COUNT }, (_, i) =>
    mockupSources[(startIdx + i) % mockupSources.length]
  );

  return (
    <div className="relative flex items-center justify-center shadow-lg rounded-xl p-6 min-h-[350px] md:min-h-[440px] overflow-hidden bg-brand">
      {/* Carousel screens */}
      <div
        className="flex gap-6"
        style={{
          transform: isAnimating ? "translateX(-33%)" : "translateX(0)",
          transition: "transform 0.4s cubic-bezier(.4,1,.3,1)",
        }}
      >
        {visibleImages.map((src, idx) => (
          <div
            key={`${src}-${idx}-${startIdx}`}
            className={`flex items-center justify-center w-52 h-[440px] md:w-60 md:h-[480px] rounded-3xl shadow-xl border border-neutral-200 bg-white
              ${idx === 1 ? "scale-105 z-10 shadow-2xl border-brand" : "opacity-80"}
            `}
            style={{
              transition: "transform 0.4s cubic-bezier(.4,1,.3,1), opacity 0.4s",
            }}
          >
            <Image
              src={src}
              alt={`OncoVault app mockup ${startIdx + idx + 1}`}
              width={220}
              height={440}
              className="object-contain rounded-2xl"
              priority // Always prioritize for instant load
              unoptimized // Prevent Next.js from optimizing (faster for local/public images)
            />
          </div>
        ))}
      </div>
      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {mockupSources.map((_, i) => (
          <span
            key={i}
            className={`block w-2 h-2 rounded-full ${i === startIdx ? "bg-brand" : "bg-neutral-300"}`}
          />
        ))}
      </div>
    </div>
  );
}