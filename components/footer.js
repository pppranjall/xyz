export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <h3 className="text-sm font-semibold">Academic Heights Public Secondary School</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            An English-medium, co-educational school providing a serene and stress-free environment for learning.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <a className="hover:underline" href="tel:+919829133700">
                +91 9829133700
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Address</h4>
          <p className="mt-2 text-sm">Kishan Nagar, Behind Telephone Exchange, Hindaun City, Rajasthan 322230</p>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Academic Heights Public Secondary School</span>
          <span>Built with Next.js</span>
        </div>
      </div>
    </footer>
  )
}
