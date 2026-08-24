export default function SkillPill({ label }: { label: string }) {
  return (
    <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-brand/10 text-brand border border-brand/20">
      {label}
    </span>
  )
}
