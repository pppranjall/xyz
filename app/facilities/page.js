import Topbar from "@/components/topbar"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function FacilitiesPage() {
  return (
    <main>
      <Topbar />
      <Navbar />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-2xl font-semibold">Facilities</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Facilities content will be added from the source site.
        </p>
      </section>
      <Footer />
    </main>
  )
}
