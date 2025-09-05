"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "/about", label: "About us" }
]

export default function Footer() {
  const pathname = usePathname()

  // Helper to get correct href for anchor links
  const getNavHref = (href: string) => {
    if (href.startsWith("#")) {
      if (pathname === "/about") {
        return `/${href}`
      }
      return href
    }
    return href
  }

  return (
    <footer className="bg-brand text-white pt-10 pb-8 mt-2 md:mt-10">
     
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div className="flex flex-col gap-4 md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-2xl p-2 sm:p-3 shadow-lg">
              <Image
                src="/oncovault-logo.jpg"
                alt="OncoVault logo"
                width={128}
                height={64}
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
          <p className="text-white/80 text-xs sm:text-sm mt-2">
            OncoVault is dedicated to empowering cancer patients and clinicians with secure, organized, and accessible medical records. Our mission is clarity and confidence in every step of care.
          </p>
        </div>
        {/* Navigation Links & Address side by side on mobile, columns on desktop */}
        <div className="flex flex-row gap-8 md:flex-row md:gap-0 md:col-span-2 mt-2 w-full">
          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-base font-medium flex-1">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={getNavHref(link.href)}
                className="hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>
          {/* Address */}
          <div className="flex flex-col gap-1 sm:gap-2 text-xs sm:text-base flex-1 md:items-end md:text-right">
            <span className="font-semibold text-white mb-1">Contact</span>
            <span className="text-white/80">Innov8, D 1 Ras Vilas,</span>
            <span className="text-white/80">Lower Ground Floor, Saket</span>
            <span className="text-white/80">South Delhi - 110017</span>
          </div>
        </div>
        {/* Socials */}
        <div className="flex flex-col gap-3 sm:gap-4 mt-2 md:col-span-1">
          <span className="font-semibold text-white mb-1">Follow Us</span>
          <div className="flex gap-3 sm:gap-5">
            <a href="https://twitter.com/" target="_blank" rel="noopener" aria-label="Twitter">
              <Twitter className="h-5 w-5 sm:h-7 sm:w-7 text-white hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 sm:h-7 sm:w-7 text-white hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">
              <Facebook className="h-5 w-5 sm:h-7 sm:w-7 text-white hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">
              <Instagram className="h-5 w-5 sm:h-7 sm:w-7 text-white hover:text-pink-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-10 text-center text-xs sm:text-base text-white/70 font-medium">
        &copy; {new Date().getFullYear()} OncoVault. All rights reserved.
      </div>
    </footer>
  )
}