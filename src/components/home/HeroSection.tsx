import Link from "next/link";
import Container from "../common/Container";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-violet-50"
        aria-hidden="true"
      />

      <div
        className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-100/40 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="mx-auto max-w-4xl py-24 text-center md:py-32">
          <div className="mx-auto inline-flex rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm">
            AI tools for college students
          </div>

          <h1 className="mt-7 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl md:text-6xl md:leading-[1.08]">
            Find the Right AI Tool for Your College Work
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Discover practical AI tools for studying, presentations, research,
            and everyday college work — with student-focused evaluations and
            clear pricing information.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/tools"
              className="rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Explore AI Tools
            </Link>

            <Link
              href="/blog"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Browse Student Guides
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
            <span>Student-focused</span>
            <span aria-hidden="true">•</span>
            <span>Practical workflows</span>
            <span aria-hidden="true">•</span>
            <span>Pricing transparency</span>
          </div>
        </div>
      </Container>
    </section>
  );
}