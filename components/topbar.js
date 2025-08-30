export default function Topbar() {
  return (
    <div className="w-full border-b bg-secondary">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs md:text-sm">
        <div className="flex flex-wrap items-center gap-4">
          <a href="tel:+919829133700" className="hover:underline" aria-label="Phone">
            +91 9829133700
          </a>
          <span aria-label="Address" className="text-foreground/80">
            Kishan Nagar, Behind Telephone Exchange, Hindaun City, Rajasthan 322230
          </span>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <a href="#" aria-label="Facebook" className="hover:opacity-75">
            {"FB"}
          </a>
          <a href="#" aria-label="Twitter" className="hover:opacity-75">
            {"X"}
          </a>
          <a href="#" aria-label="Instagram" className="hover:opacity-75">
            {"IG"}
          </a>
        </div>
      </div>
    </div>
  )
}
