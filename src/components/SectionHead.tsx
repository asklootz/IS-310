export default function SectionHead({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="text-center mb-16">
      <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">{sub}</p>
      <h2 className="font-display text-4xl md:text-5xl font-800 text-navy-900 dark:text-navy-50">{title}</h2>
      <div className="mt-4 mx-auto w-16 h-0.5 bg-brand rounded-full" />
    </div>
  )
}
