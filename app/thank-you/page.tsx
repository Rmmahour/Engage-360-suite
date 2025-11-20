import Link from "next/link"
import type { Metadata } from "next"

import {
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You | Engage360 Suite",
  description: "Thank you for your interest in Engage360 Suite.",
}

export default function ThankYouPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
      <header className="flex items-center justify-between py-6">
          <div className="flex items-center gap-2">
            {/* Replace with actual logo */}
            {/* <Link href="/" className="flex items-center gap-3" aria-label="Basiq360 Home">
              <img
                src="logo.png"
                alt="Basiq360 Logo"
                className="h-8 w-auto"
              />
            </Link> */}
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-slate-900">
                <Link href="/" aria-label="Basiq360 Home">
                  <img
                    src="/suite/logo.png"
                    alt="Basiq360 Logo"
                    className="h-8 w-auto"
                  />
                </Link></span>
              <span className="text-xs text-slate-500 text-center">Engage360 Suite</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="/suite/#big-idea" className="hover:text-[#004bab] transition-colors">
              Single QR Story
            </a>
            <a href="/suite/#features" className="hover:text-[#004bab] transition-colors">
              Core Journeys
            </a>
            <a href="/suite/#how-it-works" className="hover:text-[#004bab] transition-colors">
              How it Works
            </a>
            <a href="/suite/#industries" className="hover:text-[#004bab] transition-colors">
              Industries
            </a>
            <a href="/suite/#faqs" className="hover:text-[#004bab] transition-colors">
              FAQs
            </a>
          </nav>
          {/* <div className="flex items-center gap-3">
            <button onClick={() => scrollToSection("contact")} className="hidden sm:inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition">
              Start for free
            </button>
            <button onClick={() => scrollToSection("contact")} className="inline-flex items-center rounded-full bg-[#004bab] px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#003580] transition">
              Book a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div> */}
        </header>
    <main className="flex-1 flex items-center justify-center py-20 px-5">
      <div className="max-w-2xl text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#18b57c] to-[#22c55e] mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Thank You!</h1>
        <p className="text-lg text-slate-600 mb-8">
          We've received your request and our team will get back to you shortly. We're excited to help you transform
          your packaging with Basiq360's connected packaging solutions.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-br from-[#0052cc] to-[#003c96] text-white text-sm font-semibold shadow-[0_14px_30px_rgba(0,82,204,0.35)] hover:translate-y-[-1px] hover:shadow-[0_18px_40px_rgba(0,82,204,0.45)] transition-all"
          >
            Back to Home
          </Link>
          <Link
            href="https://www.basiq360.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-400/60 bg-white/60 text-slate-600 text-sm font-semibold hover:bg-white hover:border-[#0052cc] hover:text-[#0052cc] transition-all"
          >
            Visit Basiq360.com
          </Link>
        </div>
      </div>
    </main>
    </div>
    </div>
    </>

  )
}
