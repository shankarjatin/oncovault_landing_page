"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setShow(true), delay)
            observer.disconnect()
          }
        })
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`reveal ${show ? "show" : ""} ${className}`}>
      {children}
    </div>
  )
}
