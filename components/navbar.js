"use client"

import { useState } from "react"
import Link from "next/link"

const nav = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/academics", label: "ACADEMICS" },
  { href: "/admission", label: "ADMISSION" },
  { href: "/facilities", label: "FACILITIES" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/beyond-academics", label: "BEYOND ACADEMICS" },
  { href: "/erp-login", label: "ERP LOGIN" },
  { href: "/mandatory-disclosure", label: "MANDATORY PUBLIC DISCLOSURE" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-3">
          {/* Replace with real logo when available */}
          <img
            src="/generic-school-logo.png"
            alt="Academic Heights Public Secondary School Logo"
            className="h-10 w-10"
          />
          <span className="text-xs font-semibold md:text-sm">Academic Heights Public Secondary School</span>
        </Link>

        <button
          className="rounded border px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-4 text-xs font-medium xl:gap-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-block px-2 py-1 text-foreground/80 hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile */}
      {open && (
        <nav id="mobile-nav" className="border-t bg-white md:hidden" onClick={() => setOpen(false)}>
          <ul className="mx-auto grid max-w-6xl gap-1 px-4 py-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block rounded px-2 py-2 hover:bg-secondary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
