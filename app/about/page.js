import Topbar from "@/components/topbar"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main>
      <Topbar />
      <Navbar />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-2xl font-semibold">About ahps</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          This page will be populated with the exact content from the source site in the next pass. It currently serves
          as a placeholder to mirror the navigation structure.
        </p>
      </section>
      <Footer />
    </main>
  )
}
