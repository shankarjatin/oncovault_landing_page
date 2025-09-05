"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const links = [
  { href: "#home", label: "Home" },
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "/about", label: "About Us" },
  
]

// ...existing code...
export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
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
        <Link href="/" className="flex items-center gap-2" aria-label="OncoVault Home">
          <Image
            src="/oncovault-logo.jpg"
            alt="OncoVault Logo"
            width={128}
            height={64}
            className="rounded-md"
            priority
          />
        </Link>
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-14">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-underline text-md font-semibold text-[color:var(--dark)]/80 hover:text-brand transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      <a href="#download" className="hidden md:block btn btn-brand rounded-full">
  Download the App
</a>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden ml-2 p-2 rounded-full border border-gray-200 bg-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <svg width="28" height="28" fill="none" stroke="#204060" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </button>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t z-40">
         <ul className="flex flex-col items-start ml-4 py-6">
  {links.map((l, idx) => (
    <li
      key={l.href}
      className={idx === links.length - 1 ? "mb-4" : idx === links.length - 2 ? "mb-2" : "mb-2"}
    >
      <a
        href={l.href}
        className="text-lg font-semibold text-[color:var(--dark)]/90 hover:text-brand transition-colors"
        onClick={() => setMenuOpen(false)}
      >
        {l.label}
      </a>
    </li>
  ))}
  <li>
    <a href="#download" className="btn btn-brand rounded-full px-4 py-2 text-sm">
      Download the App
    </a>
  </li>
</ul>
        </div>
      )}
    </header>
  )
}
// ...existing code...
