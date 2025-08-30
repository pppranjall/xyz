export const metadata = { title: "Contact — ahps" }

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Contact Us</h1>
      <p className="mt-3 text-foreground/80 leading-relaxed">
        Reach out with questions about admissions, academics, or campus life.
      </p>
      <form className="mt-6 grid gap-4 max-w-lg">
        <input className="w-full rounded-md border px-3 py-2 text-sm" placeholder="Your name" aria-label="Your name" />
        <input
          className="w-full rounded-md border px-3 py-2 text-sm"
          placeholder="Email address"
          aria-label="Email address"
        />
        <textarea
          className="w-full rounded-md border px-3 py-2 text-sm"
          placeholder="Message"
          rows={4}
          aria-label="Message"
        />
        <button className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition">
          Send Message
        </button>
      </form>
    </div>
  )
}
