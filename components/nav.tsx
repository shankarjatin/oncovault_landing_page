"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const links = [
  { href: "#home", label: "Home" },
  { href: "#problem", label: "Problem" },
  { href: "#pilot", label: "Pilot" },
  { href: "#download", label: "Download App" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-white/90 backdrop-blur border-b border-[color:var(--dark)]/5" : "bg-white"}`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
  <Link href="#home" className="flex items-center gap-2" aria-label="OncoVault Home">
          <Image
            src="/oncovault-logo.svg"
            alt="OncoVault Logo"
            width={32}
            height={32}
            className="rounded-md"
            priority
          />
          <span className="font-heading font-semibold tracking-tight text-lg text-brand">OncoVault</span>
        </Link>
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-underline text-sm text-[color:var(--dark)]/80 hover:text-brand transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#download" className="hidden md:inline-flex btn btn-brand">
          Download the App
        </a>
      </nav>
    </header>
  )
}
