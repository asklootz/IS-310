export default function F5Logo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className} aria-label="F5 Development logo">
      <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
      <path d="M20 4 A16 16 0 1 1 6.3 27" stroke="#00E5A0" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M3 24 L6.8 28.2 L10.2 23.5" stroke="#00E5A0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <text x="20" y="25" textAnchor="middle" fontFamily="Outfit, sans-serif" fontWeight="800" fontSize="13" fill="#00E5A0">F5</text>
    </svg>
  )
}
