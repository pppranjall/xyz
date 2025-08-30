import Topbar from "@/components/topbar"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SectionTitle from "@/components/section-title"
import HeroCarousel from "@/components/hero-carousel"

function QuoteWithImage() {
  return (
    <section className="bg-secondary/60 py-10 md:py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Broaden the Vision and Deepen the Roots</h3>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            A good system of education must instill self-esteem and creativity. The methodology of education needs to
            change...
          </p>
          <blockquote className="mt-6 border-l-2 pl-4 text-sm italic text-muted-foreground">
            “Basic human values need to be encouraged in the classroom” — Gurudev Sri Sri Ravi Shankar
          </blockquote>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/gurudev-sri-sri-ravi-shankar.png"
            alt="Gurudev Sri Sri Ravi Shankar"
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}

function LifeGrid() {
  const items = [
    {
      label: "Music & Dance/Arts & Craft",
      image: "/img/WhatsApp Image 2025-08-29 at 9.17.56 PM.jpeg"
    },
    {
      label: "Infrastructure",
      image: "/img/WhatsApp Image 2025-08-29 at 9.17.59 PM (1).jpeg"
    },
    {
      label: "Sports",
      image: "/img/WhatsApp Image 2025-08-29 at 9.17.59 PM.jpeg"
    },
    {
      label: "Kids",
      image: "/img/WhatsApp Image 2025-08-29 at 9.17.58 PM (1).jpeg"
    },
    {
      label: "Laboratories",
      image: "/img/WhatsApp Image 2025-08-29 at 9.17.58 PM.jpeg"
    },
    {
      label: "DMT & Career Counseling",
      image: "/img/WhatsApp Image 2025-08-29 at 9.17.56 PM (1).jpeg"
    },
    {
      label: "Transpoart",
      image: "/img/WhatsApp Image 2025-08-29 at 9.17.57 PM.jpeg"
    },
    {
      label: "Safety & Security",
      image: "/img/WhatsApp Image 2025-08-29 at 9.17.56 PM.jpeg"
    },
    {
      label: "Food Menu",
      image: "/img/WhatsApp Image 2025-08-29 at 9.17.59 PM (1).jpeg"
    },
    {
      label: "Transport",
      image: "/img/WhatsApp Image 2025-08-29 at 9.17.59 PM.jpeg"
    },
    {
      label: "Curriculum",
      image: "/img/WhatsApp Image 2025-08-29 at 9.17.58 PM (1).jpeg"
    },
    {
      label: "AI Teacher",
      image: "/img/WhatsApp Image 2025-08-29 at 9.17.58 PM.jpeg"
    },
  ]
  return (
    <section className="py-12">
      <SectionTitle>Life at AWHS</SectionTitle>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 sm:grid-cols-3 md:grid-cols-4">
        {items.map((item, i) => (
          <figure key={item.label} className="overflow-hidden rounded-lg border">
            <img
              src={item.image}
              alt={item.label}
              className="h-36 w-full object-cover"
            />
            <figcaption className="px-3 py-2 text-center text-xs">{item.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

function Stats() {
  const data = [
    { value: 95, label: "Green Campus" },
    { value: 96, label: "Happiness Curriculum" },
    { value: 99, label: "Moral Values" },
  ]
  return (
    <section className="bg-secondary/60 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-4 px-4">
        {data.map((d) => (
          <div key={d.label} className="rounded-lg bg-white p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-orange-600">{d.value}</div>
            <div className="mt-1 text-xs text-muted-foreground">{d.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function VisionMission() {
  const bullet = (t) => <li className="list-disc pl-2">{t}</li>
  return (
    <section className="py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold text-orange-600">Vision</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {[
              "Create a joyful, safe, and tranquil environment",
              "Focus on overall physical, spiritual, emotional, mental development",
              "Offer Indian traditional values blended with world culture",
              "Build strong link with parents and community",
            ].map(bullet)}
          </ul>
        </div>
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold text-orange-600">Mission</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {[
              "Encourage members to grow and collaborate",
              "Broaden children’s vision and deepen roots",
              "Stimulate innovative thinking and critical reasoning",
              "Develop confident, compassionate leaders",
            ].map(bullet)}
          </ul>
        </div>
      </div>
    </section>
  )
}

function NewsAndAwards() {
  const posts = [
    {
      title: "7 Differences Between Day Schools and Residential Schools You Should Know",
      date: "June 2, 2025",
    },
    { title: "Top 5 Boarding School in West Bengal", date: "June 7, 2025" },
    {
      title: "The Advantages of Boarding School for International Students",
      date: "May 18, 2025",
    },
  ]
  return (
    <section className="py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <SectionTitle>Latest News</SectionTitle>
          <div className="grid gap-4">
            {posts.map((p) => (
              <article key={p.title} className="rounded-lg border p-4">
                <h4 className="text-sm font-semibold">{p.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{p.date}</p>
              </article>
            ))}
          </div>
        </div>
        <aside>
          <SectionTitle>Awards and Achievements</SectionTitle>
          <div className="rounded-lg border p-4">
            <img src="/awards.png" alt="Awards" className="h-48 w-full rounded object-cover" />
            <a href="#" className="mt-3 block text-sm font-medium text-orange-600">
              See more awards & achievements →
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <main>
      <Topbar />
      <Navbar />
      <HeroCarousel />
      <QuoteWithImage />
      <LifeGrid />
      <Stats />
      <VisionMission />
      <NewsAndAwards />
      <Footer />
    </main>
  )
}
