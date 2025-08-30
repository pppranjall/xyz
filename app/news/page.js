export const metadata = { title: "News — AWHS" }

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">News & Events</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {[1, 2, 3, 4].map((n) => (
          <article key={n} className="rounded-lg border p-4">
            <h2 className="text-lg font-semibold">Update headline {n}</h2>
            <p className="mt-2 text-sm text-foreground/80">
              A short description of the latest campus update, event or achievement.
            </p>
            <a href="#" className="mt-2 inline-block text-sm font-semibold underline">
              Read more
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}
