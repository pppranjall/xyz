import Topbar from "@/components/topbar"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AcademicsPage() {
  return (
    <main>
      <Topbar />
      <Navbar />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-2xl font-semibold">Academics</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">Content to be cloned from srisriacademy.in.</p>
      </section>
      <Footer />
    </main>
  )
}
