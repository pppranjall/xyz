"use client"

import { useEffect, useMemo, useRef, useState } from "react"

const slides = [
  {
    src: "/img/WhatsApp Image 2025-08-29 at 9.17.59 PM (1).jpeg",
    alt: "Music & Dance/Arts & Craft at ahps",
    caption: "Music & Dance/Arts & Craft",
  },
  {
    src: "/img/WhatsApp Image 2025-08-29 at 9.17.58 PM (1).jpeg",
    alt: "Infrastructure at ahps",
    caption: "Infrastructure",
  },
  {
    src: "/img/WhatsApp Image 2025-08-29 at 9.17.59 PM.jpeg",
    alt: "Sports at ahps",
    caption: "Sports",
  },
]

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const timer = useRef(null)

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer.current)
  }, [])

  const goTo = (i) => setIndex((i + slides.length) % slides.length)
  const prev = () => goTo(index - 1)
  const next = () => goTo(index + 1)

  const pause = () => {
    if (timer.current) clearInterval(timer.current)
  }
  const resume = () => {
    timer.current = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000)
  }

  const current = useMemo(() => slides[index], [index])

  return (
    <section
      className="relative w-full"
      aria-roledescription="carousel"
              aria-label="ahps hero images"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="h-[60vh] min-h-[420px] w-full overflow-hidden">
        <div
          className="relative h-full w-full"
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${slides.length}`}
        >
          <img src={current.src || "/placeholder.svg"} alt={current.alt} className="h-full w-full object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-8 mx-auto max-w-6xl px-4">
            <div className="inline-flex rounded-md bg-background/80 px-3 py-2 backdrop-blur">
              <p className="text-sm font-medium">{current.caption}</p>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-3 mx-auto flex max-w-6xl items-center justify-between px-4">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="rounded-md border bg-background/80 px-3 py-2 text-sm hover:bg-accent transition"
          >
            Prev
          </button>
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 w-2 rounded-full ${i === index ? "bg-foreground" : "bg-foreground/30"}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next slide"
            className="rounded-md border bg-background/80 px-3 py-2 text-sm hover:bg-accent transition"
          >
            Next
          </button>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-xl">
            <h1 className="text-pretty text-4xl font-bold leading-tight md:text-6xl text-orange-600 mb-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg">
              Welcome to AHPS
            </h1>
            <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg">
              Nurturing minds and character through academic excellence and holistic development.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="/admission"
                className="inline-flex items-center rounded-lg bg-orange-600 px-6 py-3 text-base font-bold text-white hover:bg-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Admissions
              </a>
              <a
                href="/academics"
                className="inline-flex items-center rounded-lg border-2 border-orange-600 px-6 py-3 text-base font-bold text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Explore Academics
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
