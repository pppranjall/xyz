"use client"

import { useEffect, useMemo, useRef, useState } from "react"

const slides = [
  {
    src: "/awhs-campus-aerial.png",
    alt: "Aerial view of AWHS campus",
    caption: "Expansive Campus",
  },
  {
    src: "/awhs-classrooms-learning.png",
    alt: "Students learning in bright classrooms at AWHS",
    caption: "Inspiring Classrooms",
  },
  {
    src: "/awhs-sports-and-arts.png",
    alt: "AWHS students in sports and arts activities",
    caption: "Beyond the Classroom",
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
      aria-label="AWHS hero images"
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
            <h1 className="text-pretty text-3xl font-semibold leading-tight md:text-5xl">Welcome to AWHS</h1>
            <p className="mt-3 text-foreground/80 md:text-lg">
              Nurturing minds and character through academic excellence and holistic development.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="/admission"
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
              >
                Start Admissions
              </a>
              <a
                href="/academics"
                className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-semibold hover:bg-accent transition"
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
