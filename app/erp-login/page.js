import Topbar from "@/components/topbar"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ERPLogin() {
  return (
    <main>
      <Topbar />
      <Navbar />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-2xl font-semibold">ERP Login</h1>
        <p className="mt-3 text-sm text-muted-foreground">This will link to the school&apos;s official ERP system.</p>
        <a className="mt-4 inline-block rounded bg-foreground px-4 py-2 text-xs font-semibold text-white" href="#">
          Go to ERP
        </a>
      </section>
      <Footer />
    </main>
  )
}
