"use client"

import Image from "next/image"
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand text-white pt-10 pb-8 mt-2 md:mt-10">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-2xl p-2 sm:p-3 shadow-lg">
              <Image
                src="/oncovault-logo.svg"
                alt="OncoVault logo"
                width={32}
                height={32}
                className="object-contain sm:w-[48px] sm:h-[48px] w-[32px] h-[32px]"
                unoptimized
              />
            </div>
            <span className="text-xl sm:text-3xl font-heading font-bold text-white tracking-tight">OncoVault</span>
          </div>
          <p className="text-white/80 text-xs sm:text-sm mt-2">
            OncoVault is dedicated to empowering cancer patients and clinicians with secure, organized, and accessible medical records. Our mission is clarity and confidence in every step of care.
          </p>
          
        </div>
        {/* Navigation Links */}
        <nav className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-base font-medium mt-2">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#problem" className="hover:underline">Problem</a>
          <a href="#solution" className="hover:underline">Solution</a>
          <a href="#download" className="hover:underline">Download</a>
        </nav>
        {/* Address */}
        <div className="flex flex-col gap-1 sm:gap-2 text-xs sm:text-base mt-2">
          <span className="font-semibold text-white mb-1">Contact</span>
          <span className="text-white/80">Innov8, D 1</span>
          <span className="text-white/80">Ras Vilas Lower Ground Floor Saket District </span>
          <span className="text-white/80">Centre Delhi - 110017</span>
        </div>
        {/* Socials */}
        <div className="flex flex-col gap-3 sm:gap-4 mt-2">
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