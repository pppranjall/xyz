export default function SectionTitle({ children, subtitle }) {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="mb-6">
        <h2 className="text-pretty text-xl font-semibold tracking-tight md:text-2xl">{children}</h2>
        {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
      </div>
    </div>
  )
}
