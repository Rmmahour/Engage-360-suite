"use client";

import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  LineChart,
  Users,
  QrCode,
  MessageCircle,
  BadgeCheck,
  MapPin,
  Layers3,
  Factory,
  PlayCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react"
import { ContactForm } from "../component/form";
import TestimonialsSlider from "@/component/Testimonial";

// Engage360 Landing Page (Next.js + Tailwind)
// - Hero with video on the right
// - Icon-based sections as requested
// - Final CTA with lead form

export default function Engage360LandingPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const stories = [
    {
      quote:
        "Want to write about all things, services are very fast and genuine. All the team members are very humble and kind. Anytime, anywhere, if we got any kind of issue on our dashboard (system), all the team doing support like 'one click solution'. Overall, feel very good...",
      name: "Nikhil Chavda",
      title: "IT Coordinator",
      company: "Bafit",
    },
    {
      quote:
        "We've been using Basiq360 for our dealer management and CRM needs, and the experience has been excellent. The platform is cloud-based, and packed with features that help streamline order management, sales tracking, and customer network oversight. Integration with accounting software like SAP Business One makes daily operations much smoother. Their support team is responsive and knowledgeable, and the system has helped us improve productivity and decision-making across the board. Highly recommend for any business looking to scale and simplify dealer operations.",
      name: "Ravi Surelia",
      title: "IT Head",
      company: "Kelvin Pipes",
    },
    {
      quote:
        "Its been 2 years working with them and we have a great experience!team is super great and they are offering a great support.",
      name: "Mudit Nanda",
      title: "Zonal Sales Head",
      company: "Bonus Locks",
    },
    {
      quote:
        "I had a great experience with Abacus Desk, The service provided by their team is also commendable, professional and helpful, i would definitely recommend Abacus Desk for Excellent Service.",
      name: "Vikas Sharma",
      title: "IT Manager",
      company: "Sirca",
    },
    {
      quote:
        "Abacus Desk offers a wide range of services across Customer Experience (CX), Sales Customer Relationship Management (CRM), Enterprise Software, Martech, and Advertising. Their solutions are tailored to enhance client relationships and streamline business processes, ensuring a seamless customer journey. In the area of Enterprise Software, they deliver robust and scalable applications that support operational efficiency and business growth.",
      name: "Ravish Ranjan",
      title: "General Manager",
      company: "Information Technology",
    },
    {
      quote:
        "We are extremely satisfied with the technical support provided by specially 'Mayank Harsh' and his team. Their expertise in DMS is exceptional they are highly knowledgeable, responsive, and consistently willing to assist with any issues we encounter.In addition to their technical capabilities, their professionalism and courteous behaviour have made every interaction seamless and positive. We truly value their dedication and consistent support.",
      name: "Harrison IT",
      title: "IT manager",
      company: "Harrison IT",
    },
  ];

  // const pageSize = 3;
  // const totalPages = Math.ceil(stories.length / pageSize);
  // const [activePage, setActivePage] = useState(0);

  // const handlePrevStory = () => {
  //   setActivePage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  // };

  // const handleNextStory = () => {
  //   setActivePage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  // };

  // const visibleStories = stories.slice(
  //   activePage * pageSize,
  //   activePage * pageSize + pageSize
  // );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16"> */}
        {/* Header */}
        <header className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-6">
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
                    src="logo.png"
                    alt="Basiq360 Logo"
                    className="h-8 w-auto"
                  />
                </Link></span>
              <span className="text-xs text-slate-500 text-center">Engage360 Suite</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#big-idea" className="hover:text-[#004bab] transition-colors">
              Single QR Story
            </a>
            <a href="#features" className="hover:text-[#004bab] transition-colors">
              Core Journeys
            </a>
            <a href="#how-it-works" className="hover:text-[#004bab] transition-colors">
              How it Works
            </a>
            <a href="#industries" className="hover:text-[#004bab] transition-colors">
              Industries
            </a>
            <a href="#faqs" className="hover:text-[#004bab] transition-colors">
              FAQs
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => scrollToSection("contact")} className="hidden sm:inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition">
              Start for free
            </button>
            <button onClick={() => scrollToSection("contact")} className="inline-flex items-center rounded-full bg-[#004bab] px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#003580] transition">
              Book a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </header>
              
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="grid gap-10 py-10 md:grid-cols-2 md:items-center">
            {/* Left: Copy */}
            <div className="w-full">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#004bab] mb-4">
                <QrCode className="h-3 w-3" />
                <span>One Smart QR. Four Powerful Journeys.</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-2">
                Only 1 QR Code. Every Customer Journey.
              </h1>
              <p className="text-xs sm:text-sm font-medium text-slate-500 mb-4">
                Loyalty • Feedback • Product Authentication • Track &amp; Trace
              </p>
              <p className="text-base sm:text-lg text-slate-600 mb-5 max-w-xl">
                Engage360 turns a single variable QR on your pack into a smart trigger for engagement, protection, and
                visibility—without changing your existing packaging or printing setup.
              </p>

              <ul className="space-y-1.5 mb-6 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#00b894]" />
                  <span>1 smart QR instead of 4–5 separate codes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#00b894]" />
                  <span>One dashboard for all scans and journeys.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#00b894]" />
                  <span>Plugs into your existing CRM, ERP and printers.</span>
                </li>
              </ul>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <button onClick={() => scrollToSection("contact")} className="inline-flex items-center rounded-full bg-[#004bab] px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-[#003580] transition">
                  Book a Free Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button onClick={() => scrollToSection("contact")} className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-100 transition">
                  Download Product Brochure
                </button>
              </div>
              <p className="text-xs sm:text-sm text-slate-500">
                Share your use-case and we’ll show you how one QR can power every key journey your business needs.
              </p>
            </div>

            {/* Right: Video + QR mini story */}
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-100 via-white to-indigo-100 blur-2xl opacity-70"
                aria-hidden="true"
              />
              <div className="relative space-y-4 rounded-3xl bg-white p-6 shadow-xl border border-slate-100">
                <div className="rounded-2xl overflow-hidden ">
                  <div className="aspect-video relative flex items-center justify-center">
                    <video
                      className="img-fluid w-full h-auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="Basiq 360 Suite.mp4" type="video/mp4" />
                    </video>
                    {/* <button
                      type="button"
                      className="z-10 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-900 shadow-lg hover:bg-white"
                    >
                      <PlayCircle className="h-5 w-5 text-[#004bab]" />
                      <span>Watch Engage360 in 90 Seconds</span>
                    </button> */}
                    {/* <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/70 via-slate-900/40 to-slate-900/80" /> */}
                    {/* <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] sm:text-xs text-slate-100/90">
                      <span>Single QR. Four Journeys. One Dashboard.</span>
                      <span className="hidden sm:inline">Engage360 Product Walkthrough</span>
                    </div> */}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 flex gap-3 items-start">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm">
                    <QrCode className="h-6 w-10 text-[#004bab]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900 mb-0.5">Only 1 QR Code Your Business Needs</p>
                    <p className="text-[11px] text-slate-500">
                      First scan triggers onboarding or rewards, repeat scans collect feedback, and suspicious scans check
                      authenticity—while every scan feeds your track & trace dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connected Core Features Strip */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 border-t border-slate-100">
          <div className="rounded-3xl bg-white border border-slate-100 p-5 sm:p-6 shadow-sm">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between mb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#004bab]">
                  The Four Journeys Behind One QR
                </p>
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                  Loyalty, Feedback, Authentication &amp; Track &amp; Trace—All Connected.
                </h2>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 max-w-xs">
                Every scan can move between these journeys over time, powered by the same Engage360 QR and rules
                engine.
              </p>
            </div>
            <div className="relative">
              {/* <div
                className="hidden md:block absolute top-1/2 left-10 right-10 h-px bg-slate-200"
                aria-hidden="true"
              /> */}
              <div className="grid gap-4 md:grid-cols-4 relative z-10">
                <div className="flex flex-col items-start gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-[#004bab]">
                    <BadgeCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900 mb-0.5">Loyalty &amp; Rewards</p>
                    <p className="text-[11px] text-slate-600">
                      Issue points, cashback, or tier upgrades every time a QR is scanned.
                    </p>
                  </div>
                  <p className="text-[10px] text-slate-400">Drives: repeat purchase</p>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900 mb-0.5">Customer Feedback</p>
                    <p className="text-[11px] text-slate-600">
                      Turn QR into instant NPS / CSAT capture at the point of use.
                    </p>
                  </div>
                  <p className="text-[10px] text-slate-400">Drives: experience &amp; quality</p>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-700">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900 mb-0.5">Product Authentication</p>
                    <p className="text-[11px] text-slate-600">
                      Let buyers verify originality in one tap and flag suspicious scans.
                    </p>
                  </div>
                  <p className="text-[10px] text-slate-400">Drives: trust &amp; brand safety</p>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-50 text-purple-700">
                    <LineChart className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900 mb-0.5">Track &amp; Trace</p>
                    <p className="text-[11px] text-slate-600">
                      See which region, channel, or partner each scan is coming from.
                    </p>
                  </div>
                  <p className="text-[10px] text-slate-400">Drives: channel visibility</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Big Idea: Only One QR on the Pack */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 border-t border-slate-100" id="big-idea">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-3">
                Only One QR on the Pack. Infinite Journeys Behind It.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mb-4 max-w-xl">
                Most brands print separate QR codes for feedback, loyalty, campaigns, and product verification. That
                creates cluttered packaging and fragmented data. Engage360 replaces all of that with a single smart,
                variable QR mapped to multiple journeys.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 mb-2">What one smart QR can do for you:</p>
              <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm mt-2">
                <IconCard
                  icon={<Sparkles className="h-4 w-4" />}
                  title="First scan: onboard & reward"
                  text="Capture registration, link the product, and issue a welcome reward from the same QR."
                  tone="blue"
                />
                <IconCard
                  icon={<MessageCircle className="h-4 w-4" />}
                  title="Post-purchase: collect feedback"
                  text="Trigger NPS, CSAT, or product feedback journeys at the moment of use."
                  tone="green"
                />
                <IconCard
                  icon={<ShieldCheck className="h-4 w-4" />}
                  title="Anytime: verify authenticity"
                  text="Give customers a one-tap genuine vs suspect check, powered by secure QR logic."
                  tone="indigo"
                />
                <IconCard
                  icon={<MapPin className="h-4 w-4" />}
                  title="Everywhere: track & trace"
                  text="Capture channel scans from distributors, retailers, and field teams for pack-level visibility."
                  tone="purple"
                />
              </div>
            </div>

            {/* How Engage360 Works (icon-based) */}
            <div className="rounded-3xl bg-white border border-slate-100 p-5 shadow-sm" id="how-it-works">
              <h3 className="text-sm font-semibold text-slate-900 mb-4">How Engage360 Works</h3>
              <div className="space-y-4 text-xs sm:text-sm">
                <StepItem
                  icon={<QrCode className="h-4 w-4" />}
                  title="1. Generate smart variable QR codes"
                  text="Create secure, unique QR codes at unit, SKU, or batch level from the Engage360 backend."
                  tone="blue"
                />
                <StepItem
                  icon={<Factory className="h-4 w-4" />}
                  title="2. Print with your existing setup"
                  text="Share QR feeds with current packaging partners—no change in printers or lines."
                  tone="sky"
                />
                <StepItem
                  icon={<LineChart className="h-4 w-4" />}
                  title="3. Route every scan to the right journey"
                  text="Engage360 decides in real time whether a scan triggers loyalty, feedback, authentication, or track & trace and logs every event."
                  tone="indigo"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Four Core Journeys */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12" id="features">
          <div className="flex items-baseline justify-between mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-2">
                Four Core Journeys. All First-Class Citizens.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
                Loyalty, Feedback, Product Authentication, and Track & Trace are not add-ons—they run on the same QR,
                the same platform, and the same dashboard.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              icon={<BadgeCheck className="h-5 w-5" />}
              colorClass="bg-blue-50 text-[#004bab]"
              title="Loyalty & Rewards"
              body="Turn every scan into a reason to come back—across end customers, retailers, and influencers."
              bullets={[
                "Scan, bill, or milestone-based loyalty journeys.",
                "Tiered programs with bonus schemes by SKU or region.",
                "Digital redemptions via UPI, wallets, or gift catalog.",
              ]}
              outcome="Higher repeat purchase and stronger brand stickiness."
            />

            <FeatureCard
              icon={<MessageCircle className="h-5 w-5" />}
              colorClass="bg-emerald-50 text-emerald-700"
              title="Customer Feedback Management"
              body="Capture real feedback at the moment of truth—right after purchase, installation, or service."
              bullets={[
                "NPS, CSAT, and product feedback journeys from the QR.",
                "Route low scores to service, sales, or QA teams.",
                "Slice insights by SKU, batch, city, or channel.",
              ]}
              outcome="Faster issue resolution and better product decisions."
            />

            <FeatureCard
              icon={<ShieldCheck className="h-5 w-5" />}
              colorClass="bg-indigo-50 text-indigo-700"
              title="Product Authentication"
              body="Help customers check if a product is genuine in one scan and detect counterfeit hotspots in real time."
              bullets={[
                "Unique, secure QR per unit validated against backend.",
                "Detect duplicate or abnormal scan patterns.",
                "Educate users on safe buying and brand protection.",
              ]}
              outcome="Stronger brand trust and reduced counterfeiting risk."
            />

            <FeatureCard
              icon={<LineChart className="h-5 w-5" />}
              colorClass="bg-purple-50 text-purple-700"
              title="Track & Trace"
              body="See how every pack moves—from factory to distributor to retailer to end customer."
              bullets={[
                "Capture scans across stockists, retailers, and field teams.",
                "Map journeys by region, channel, and partner.",
                "Link scans with sales orders for secondary sales visibility.",
              ]}
              outcome="Channel transparency and smarter trade investments."
            />
          </div>
        </section>

        {/* Why Single QR Changes the Game (icon-based RTB) */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 border-t border-slate-100" id="rtd">
          <div className="mb-6 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-2">
              Why a Single QR Changes the Game.
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Engage360 doesn’t just add more QR journeys; it simplifies how your teams run them and how customers
              experience them.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            <RTBCard
              icon={<Sparkles className="h-4 w-4" />}
              title="Clean Packaging"
              text="One QR keeps packs neat and instructions clear—‘Scan here’ is all you need on the pack."
            />
            <RTBCard
              icon={<LineChart className="h-4 w-4" />}
              title="Unified Data"
              text="All engagement flows into one dashboard—from loyalty points to feedback scores to scan locations."
            />
            <RTBCard
              icon={<Layers3 className="h-4 w-4" />}
              title="Lower Complexity"
              text="No juggling multiple QR vendors or tools—Engage360 orchestrates every journey behind the scenes."
            />
            <RTBCard
              icon={<ShieldCheck className="h-4 w-4" />}
              title="Future-Ready"
              text="Update journeys or campaigns without changing your packaging artwork or re-printing static codes."
            />
          </div>
        </section>

        {/* Who It Is For (icon-based) */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 border-t border-slate-100" id="industries">
          <div className="flex items-baseline justify-between mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-2">
                Built for Modern, High-Volume Brands.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
                Whether you are selling through retailers, installers, or distributors, Engage360 helps you engage,
                protect, and learn from every scan.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <IndustryCard
              icon={<Factory className="h-5 w-5" />}
              title="FMCG & F&B"
              description="Run QR-led consumer promotions, feedback campaigns, and authenticity checks straight from your packaging."
            />
            <IndustryCard
              icon={<Layers3 className="h-5 w-5" />}
              title="Building Materials & Home Improvement"
              description="Connect dealers, contractors, and end-users through one QR—link warranties, feedback, and repeat purchase rewards."
            />
            <IndustryCard
              icon={<Users className="h-5 w-5" />}
              title="Auto Spares & Industrial Brands"
              description="Fight counterfeits, capture secondary sales, and reward mechanics, retailers, and influencers from the same QR."
            />
          </div>
          <p className="mt-4 text-xs sm:text-sm text-slate-500">
            Also trusted by CX, marketing, and digital transformation teams who want one platform for multiple QR
            journeys.
          </p>
        </section>


        {/* Why Teams Choose + Customer Stories Carousel */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8py-10 border-t border-slate-100">
          <div className="grid gap-8 md:grid-cols-[1.2fr,0.8fr] md:items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-2">
                Why Teams Choose Engage360 by Basiq360.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mb-4 max-w-xl">
                Engage360 is built on years of experience running QR-based loyalty, rewards, feedback, and authentication
                for leading brands.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <ProofItem
                  title="Single Dashboard for 4 Journeys"
                  description="Loyalty, feedback, authentication, and track & trace analytics in one place—no more switching tools."
                />
                <ProofItem
                  title="Fast Go-Live"
                  description="Start a focused pilot in weeks using your existing packaging artwork and print partners."
                />
                <ProofItem
                  title="Enterprise-Grade Security"
                  description="Secure QR generation, token validation, and suspicious-scan detection baked into the platform."
                />
                <ProofItem
                  title="On-Ground Program Expertise"
                  description="From design to rollout, Basiq360’s team helps you configure schemes, flows, and journeys that work in your market."
                />
              </div>
            </div>

            {/* Customer Stories Carousel */}
            <div className="rounded-3xl bg-white border border-slate-100 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-[#004bab] font-semibold mb-1">Customer Stories</p>
                  <p className="text-[11px] sm:text-xs text-slate-500">
                    How brands are using one QR to power multiple journeys.
                  </p>
                </div>
                {/* <div className="hidden sm:flex flex-col items-end gap-2 text-[11px] text-slate-400">
                  <span>
                    {activePage + 1} / {totalPages}
                  </span>
                  <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1">
                    <button
                      type="button"
                      onClick={handlePrevStory}
                      className="inline-flex items-center justify-center rounded-full px-1.5 py-1 hover:bg-white"
                      aria-label="Previous stories"
                    >
                      <ChevronLeft className="h-3 w-3" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextStory}
                      className="inline-flex items-center justify-center rounded-full px-1.5 py-1 hover:bg-white"
                      aria-label="Next stories"
                    >
                      <ChevronRight className="h-3 w-3" />
                    </button>
                  </div>
                </div> */}
              </div>

              <div className="space-y-3 mb-3">
                <TestimonialsSlider />
                {/* {visibleStories.map((story, index) => ( */}
                  {/* {stories.map((story, index) => (
                  <div
                    key={`${story.name}-${index}`}
                    className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3"
                  >
                    <p className="text-sm sm:text-base text-slate-800 mb-2">“{story.quote}”</p>
                    <p className="text-xs font-semibold text-slate-900">{story.name}</p>
                    <p className="text-[11px] text-slate-500">
                      {story.title}, {story.company}
                    </p>
                  </div>
                ))} */}
              </div>

              {/* <div className="flex sm:hidden items-center justify-between mb-3 text-[11px] text-slate-400">
                <span>
                  {activePage + 1} / {totalPages}
                </span>
                <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1">
                  <button
                    type="button"
                    onClick={handlePrevStory}
                    className="inline-flex items-center justify-center rounded-full px-1.5 py-1 hover:bg-white"
                    aria-label="Previous stories"
                  >
                    <ChevronLeft className="h-3 w-3" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStory}
                    className="inline-flex items-center justify-center rounded-full px-1.5 py-1 hover:bg-white"
                    aria-label="Next stories"
                  >
                    <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
              </div> */}

              {/* <div className="rounded-2xl bg-blue-50 px-4 py-3 text-xs text-slate-700">
                <p className="font-semibold text-[#004bab] mb-1">Digitize. Automate. Grow.</p>
                <p>
                  Engage360 is part of the Basiq360 suite—trusted for dealer management, loyalty, SFA, and QR-based
                  product authentication.
                </p>
              </div> */}
            </div>
          </div>
        </section>


        {/* FAQs */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 border-t border-slate-100" id="faqs">
          <div className="mb-6 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-2">FAQs</h2>
            <p className="text-sm sm:text-base text-slate-600">
              A few quick answers about how Engage360 works with your products, systems, and teams.
            </p>
          </div>
          <div className="space-y-4">
            <FaqItem
              question="Can one QR code really handle all four journeys?"
              answer="Yes. Engage360 uses backend rules to decide what happens when a QR is scanned—based on product, user type, scan count, and campaign logic. The same QR can trigger loyalty, feedback, authentication, or track & trace flows."
            />
            <FaqItem
              question="Do we need to change our existing packaging or printers?"
              answer="In most cases, no. We generate variable QR codes that your current packaging or print vendors can place in the artwork. Our team shares best practices for sizing, placement, and testing."
            />
            <FaqItem
              question="Can Engage360 connect with our CRM, ERP, or loyalty system?"
              answer="Yes. Engage360 is API-first and integrates with popular CRM, ERP, and marketing automation systems so your data flows where you need it."
            />
            <FaqItem
              question="How secure are the QR codes against duplication?"
              answer="Each QR is unique and validated against Engage360 servers. We can detect unusual patterns, repeated scans, and fake attempts and surface them in your dashboards."
            />
            <FaqItem
              question="How quickly can we go live?"
              answer="Most brands start with a pilot in a few weeks, depending on packaging timelines and integration scope. Our team will align with your launch calendar."
            />
          </div>
        </section>



        {/* Final CTA with Form */}
        <section id="contact" className="mx-auto max-w-4xl mt-10 rounded-3xl bg-gradient-to-r from-[#004bab] via-[#005fd1] to-[#004bab] p-10 text-white shadow-xl">
          <div className="grid gap-6 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Turn Every Scan into a Moment of Truth.</h2>
              <p className="text-sm sm:text-base text-blue-100 max-w-xl mb-4">
                With Engage360, a single QR on your pack becomes the engine for loyalty, feedback, product authentication,
                and track & trace.
              </p>
              <ul className="mb-5 space-y-1.5 text-xs sm:text-sm text-blue-50">
                <li>• No redesign of packaging. No multiple QR vendors.</li>
                <li>• One dashboard for all engagement, from rewards to secondary sales.</li>
                <li>• Backed by the Basiq360 business automation platform.</li>
              </ul>
            </div>

            {/* Final form (same as hero logic) */}
            <div className="rounded-2xl bg-white/50 p-4 sm:p-5 border border-blue-200/40">
              <p className="font-semibold mb-1 text-lg sm:text-base text-black">Book Your Engage360 Demo</p>
              <p className="text-[11px] sm:text-md mb-3 text-black">
                Fill in a few details and our team will schedule a 30-minute walkthrough tailored to your products and
                markets.
              </p>

              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    // </div>
  );
}

// Reusable components

function IconCard({
  icon,
  title,
  text,
  tone,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  tone: "blue" | "green" | "indigo" | "purple";
}) {
  const toneClasses: Record<typeof tone, string> = {
    blue: "bg-blue-50 text-[#004bab]",
    green: "bg-emerald-50 text-emerald-700",
    indigo: "bg-indigo-50 text-indigo-700",
    purple: "bg-purple-50 text-purple-700",
  } as const;

  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm">
      <div className={`mt-0.5 flex h-8 w-8 items-center justify-center rounded-full ${toneClasses[tone]}`}>
        {icon}
      </div>
      <div>
        <p className="font-semibold text-slate-900 mb-0.5 text-xs sm:text-sm">{title}</p>
        <p className="text-[11px] sm:text-xs text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function StepItem({
  icon,
  title,
  text,
  tone,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  tone: "blue" | "sky" | "indigo";
}) {
  const toneClasses: Record<typeof tone, string> = {
    blue: "bg-blue-50 text-[#004bab]",
    sky: "bg-sky-50 text-sky-700",
    indigo: "bg-indigo-50 text-indigo-700",
  } as const;

  return (
    <div className="flex gap-3">
      <div className={`mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl ${toneClasses[tone]}`}>
        {icon}
      </div>
      <div>
        <p className="font-medium text-slate-900 mb-0.5 text-xs sm:text-sm">{title}</p>
        <p className="text-[11px] sm:text-xs text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  colorClass,
  title,
  body,
  bullets,
  outcome,
}: {
  icon: React.ReactNode;
  colorClass: string;
  title: string;
  body: string;
  bullets: string[];
  outcome: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${colorClass}`}>{icon}</div>
        <h3 className="text-base sm:text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="text-sm text-slate-600 mb-3">{body}</p>
      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 mb-3">
        {bullets.map((b) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>
      <p className="mt-auto text-xs font-semibold text-[#004bab]">Outcome: {outcome}</p>
    </div>
  );
}

function RTBCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl bg-white border border-slate-100 p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-[#004bab]">
          {icon}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900 mb-1">{title}</h3>
          <p className="text-xs sm:text-sm text-slate-600">{text}</p>
        </div>
      </div>
    </div>
  );
}

function IndustryCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#004bab]">{icon}</div>
        <h3 className="text-sm sm:text-base font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="text-xs sm:text-sm text-slate-600">{description}</p>
    </div>
  );
}

function ProofItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
      <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-[#004bab]">
        <CheckCircle2 className="h-4 w-4" />
      </div>
      <div>
        <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-0.5">{title}</p>
        <p className="text-[11px] sm:text-xs text-slate-600">{description}</p>
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <p className="text-sm sm:text-base font-semibold text-slate-900 mb-1">{question}</p>
      <p className="text-xs sm:text-sm text-slate-600">{answer}</p>
    </div>
  );
}