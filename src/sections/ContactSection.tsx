import { useState } from "react"
import { type Lang, T } from "@/data/translations"
import SectionHead from "@/components/SectionHead"
import F5Logo from "@/components/F5Logo"

const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE"

type Props = { lang: Lang }

export default function ContactSection({ lang }: Props) {
  const c = T[lang].contact
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("sending")
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, timestamp: new Date().toISOString(), lang }),
      })
      setFormStatus("success")
      setForm({ name: "", email: "", subject: "", message: "" })
    } catch {
      setFormStatus("error")
    }
    setTimeout(() => setFormStatus("idle"), 5000)
  }

  const inputClass = "w-full px-4 py-3 rounded-xl border border-navy-700/20 dark:border-navy-700/50 bg-white/80 dark:bg-navy-900/60 text-navy-900 dark:text-navy-100 placeholder:text-navy-400 dark:placeholder:text-navy-500 text-sm focus:outline-none focus:border-brand/60 focus:ring-1 focus:ring-brand/30 transition-all"
  const labelClass = "block text-xs font-semibold text-navy-600 dark:text-navy-400 uppercase tracking-wider mb-2"

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHead title={c.title} sub={c.sub} />

        <div className="grid md:grid-cols-5 gap-10">
          {/* Info column */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <img src="https://raw.githubusercontent.com/asklootz/IS-310/fe80bd338c77effe7718ae475a51fca3599c7c9b/src/images/F5-Small-Logo-With-Text.svg" alt="F5 Logo" className="logo-hue w-30 h-30" />
              <h3 className="font-display font-700 text-2xl text-navy-900 dark:text-white mb-2">F5 Development</h3>
              <p className="text-brand text-sm font-medium mb-4">Refreshing Development</p>
              <p className="text-navy-600 dark:text-navy-300 text-sm leading-relaxed">
                {lang === "en"
                  ? "We're always open to new opportunities, collaborations, and conversations. Drop us a message and we'll get back to you."
                  : "Vi er alltid åpne for nye muligheter, samarbeid og samtaler. Send oss en melding, så tar vi kontakt."}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold text-navy-500 dark:text-navy-400 uppercase tracking-wider">{c.info}</p>
              {[
                {
                  icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                  label: <a href="mailto:f5.development@uiano.onmicrosoft.com" className="hover:text-brand transition-colors">f5.development@uiano.onmicrosoft.com</a>,
                },
                {
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  label: "Norway",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-navy-600 dark:text-navy-300">
                  <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="2" d={item.icon} />
                    </svg>
                  </div>
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <div className="bg-white/60 dark:bg-navy-800/60 rounded-2xl border border-navy-700/20 dark:border-navy-700/40 p-8">
              {formStatus === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-brand/10 border border-brand/30 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display font-700 text-xl text-navy-900 dark:text-white mb-2">{c.success}</h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>{c.name}</label>
                      <input
                        type="text" required value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder={c.namePh}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>{c.email}</label>
                      <input
                        type="email" required value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder={c.emailPh}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>{c.subject}</label>
                    <input
                      type="text" required value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder={c.subjectPh}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>{c.message}</label>
                    <textarea
                      required rows={5} value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder={c.messagePh}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {formStatus === "error" && (
                    <p className="text-red-400 text-sm flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                        <path strokeWidth="2" strokeLinecap="round" d="M12 8v4M12 16h.01" />
                      </svg>
                      {c.error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full py-4 bg-brand text-navy-900 font-display font-700 text-base rounded-xl hover:bg-brand-dim transition-all hover:shadow-[0_0_20px_rgba(0,229,160,0.3)] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {formStatus === "sending" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        {c.sending}
                      </>
                    ) : (
                      <>
                        {c.send}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
