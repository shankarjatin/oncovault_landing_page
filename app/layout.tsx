import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { DM_Sans, Montserrat } from "next/font/google"
import Nav from "@/components/nav"
import Footer from "@/components/footer"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "OncoVault – Cancer Care Documentation, Simplified",
  description:
    "OncoVault automates cancer report organization into a unified, chronological timeline for patients and doctors.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${montserrat.variable} antialiased`}>
    <body className="font-sans bg-white text-[color:var(--dark)]">
        <Nav />
        <main className="min-h-[calc(100vh-180px)] pt-12 pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}