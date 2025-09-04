"use client"

import Image from "next/image"
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#25304a] text-white pt-14 pb-10 mt-20">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and About */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-2xl p-3 shadow-lg">
              <Image
                src="/oncovault-logo.svg"
                alt="OncoVault logo"
                width={48}
                height={48}
                className="object-contain"
                unoptimized
              />
            </div>
            <span className="text-3xl font-heading font-bold text-white tracking-tight">OncoVault</span>
          </div>
          <p className="text-white/80 text-sm mt-2">
            OncoVault is dedicated to empowering cancer patients and clinicians with secure, organized, and accessible medical records. Our mission is clarity and confidence in every step of care.
          </p>
          <a href="/about" className="mt-2 text-blue-300 hover:underline text-sm font-semibold">About Us</a>
        </div>
        {/* Navigation Links */}
        <nav className="flex flex-col gap-3 text-base font-medium mt-2">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#problem" className="hover:underline">Problem</a>
          <a href="#solution" className="hover:underline">Solution</a>
          <a href="#download" className="hover:underline">Download</a>
        </nav>
        {/* Address */}
        <div className="flex flex-col gap-2 text-base mt-2">
          <span className="font-semibold text-white mb-1">Contact</span>
          <span className="text-white/80">OncoVault Health Pvt. Ltd.</span>
          <span className="text-white/80">123, Health Street, Bengaluru, India</span>
          <span className="text-white/80">Email: support@oncovault.com</span>
        </div>
        {/* Socials */}
        <div className="flex flex-col gap-4 mt-2">
          <span className="font-semibold text-white mb-1">Follow Us</span>
          <div className="flex gap-5">
            <a href="https://twitter.com/" target="_blank" rel="noopener" aria-label="Twitter">
              <Twitter className="h-7 w-7 text-white hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn">
              <Linkedin className="h-7 w-7 text-white hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">
              <Facebook className="h-7 w-7 text-white hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">
              <Instagram className="h-7 w-7 text-white hover:text-pink-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-base text-white/70 font-medium">
        &copy; {new Date().getFullYear()} OncoVault. All rights reserved.
      </div>
    </footer>
  )
}