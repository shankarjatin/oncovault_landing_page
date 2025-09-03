import Nav from "@/components/nav"
import Hero from "@/components/hero"
import Problem from "@/components/problem"
import Pilot from "@/components/pilot"
import ClosingCTA from "@/components/closing-cta"

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <Pilot />
      <ClosingCTA />
      <footer className="border-t border-[color:var(--dark)]/5">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-[color:var(--dark)]/60">
          © {new Date().getFullYear()} OncoVault. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
