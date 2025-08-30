import Topbar from "@/components/topbar"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AdmissionPage() {
  return (
    <main>
      <Topbar />
      <Navbar />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-2xl font-semibold">Admission</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Welcome to ahps Admissions. Below is a quick overview of our process, important dates, and required documents.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border p-5">
            <h2 className="text-sm font-semibold">1) Inquiry & Campus Tour</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Start by submitting an inquiry and scheduling a campus visit to experience our facilities.
            </p>
          </div>
          <div className="rounded-lg border p-5">
            <h2 className="text-sm font-semibold">2) Application Form</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Complete the application form with accurate student details and upload preliminary documents.
            </p>
          </div>
          <div className="rounded-lg border p-5">
            <h2 className="text-sm font-semibold">3) Interaction/Assessment</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Attend an interaction/assessment with our academic team as applicable for the grade level.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border p-5">
            <h3 className="text-sm font-semibold">Important Dates</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Applications open: 1st September</li>
              <li>Assessments: Rolling (communication via email)</li>
              <li>Offer & Enrollment: Within 7 days after assessment</li>
            </ul>
          </div>
          <div className="rounded-lg border p-5">
            <h3 className="text-sm font-semibold">Required Documents</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Birth Certificate (copy)</li>
              <li>Previous Academic Records (last 2 years, if applicable)</li>
              <li>Transfer Certificate (for Grade 2 and above)</li>
              <li>Passport-size Photographs (student and parents)</li>
              <li>Address and ID Proof</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#apply"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
          >
            Apply Now
          </a>
          <a
            href="/contact"
            className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-semibold hover:bg-accent transition"
          >
            Ask a Question
          </a>
        </div>
      </section>
      <Footer />
    </main>
  )
}
