import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/common/Container";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export const metadata: Metadata = {
  title: "About AI Student Hub",
  description:
    "Learn about AI Student Hub, our approach to evaluating AI tools, and how we help college students use AI for studying, research, presentations, and academic productivity.",
  keywords: [
    "about AI Student Hub",
    "AI tools for college students",
    "AI student resources",
    "AI study tools",
    "responsible AI for students",
  ],
};

const evaluationPoints = [
  {
    title: "Student use cases",
    description:
      "We look at how useful a tool is for practical college tasks such as studying, research, presentations, writing, and revision.",
  },
  {
    title: "Ease of use",
    description:
      "A useful student tool should be understandable and practical without requiring a complicated setup or advanced technical knowledge.",
  },
  {
    title: "Free and accessible options",
    description:
      "We highlight free and freemium options where relevant and make it clear when useful features may require a paid plan.",
  },
  {
    title: "Academic workflow fit",
    description:
      "We focus on where a tool fits into an actual student workflow instead of treating every AI product as useful for every task.",
  },
  {
    title: "Strengths and limitations",
    description:
      "Every tool has trade-offs. Our guides aim to explain what a tool can help with as well as where students should be careful.",
  },
  {
    title: "Responsible use",
    description:
      "We encourage students to understand AI-generated output, verify important information, and follow the academic rules that apply to their course or university.",
  },
];

const categories = [
  {
    title: "Notes & Study",
    description:
      "Tools for understanding concepts, summarizing material, taking notes, revising, and preparing for exams.",
    href: "/categories/notes-study",
  },
  {
    title: "Presentations",
    description:
      "Tools for creating slides, visual content, seminar presentations, and other academic presentations.",
    href: "/categories/presentations",
  },
  {
    title: "Research & Writing",
    description:
      "Tools for discovering sources, exploring research, improving writing, proofreading, and organizing academic work.",
    href: "/categories/research",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="border-b border-slate-200 bg-slate-50">
          <Container>
            <div className="mx-auto max-w-3xl py-16 text-center md:py-20">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                About AI Student Hub
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Practical AI guidance for college students
              </h1>

              <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                AI Student Hub helps college students discover and understand
                AI tools for studying, presentations, research, writing, and
                everyday academic workflows.
              </p>
            </div>
          </Container>
        </section>

        {/* Why */}
        <section className="bg-white py-16 md:py-20">
          <Container>
            <div className="mx-auto max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Why this site exists
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Finding an AI tool is easy. Finding the right one for a
                specific student task is harder.
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  There are thousands of AI products available, but students
                  usually do not need a tool simply because it has an AI label.
                  They need something that can help with a particular task:
                  understanding lecture material, preparing a presentation,
                  exploring research, improving a draft, or revising before an
                  exam.
                </p>

                <p>
                  AI Student Hub is designed around those student problems. The
                  goal is to organize AI tools around practical college
                  workflows so students can understand what a tool is useful
                  for before deciding whether to try it.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* What we cover */}
        <section className="border-y border-slate-200 bg-slate-50 py-16 md:py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                What we cover
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                AI organized around college tasks
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Instead of treating AI as one huge category, AI Student Hub
                organizes tools around the academic workflows where students
                are most likely to use them.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
              {categories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-slate-200/50"
                >
                  <h3 className="text-lg font-semibold text-slate-950">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {category.description}
                  </p>

                  <span className="mt-6 inline-flex text-sm font-semibold text-indigo-600">
                    Explore category
                    <span
                      className="ml-2 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* Methodology */}
        <section className="bg-white py-16 md:py-20">
          <Container>
            <div className="mx-auto max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Our approach
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                How we evaluate AI tools
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                AI Student Hub focuses on practical usefulness rather than
                simply listing as many AI products as possible. Our tool pages
                are structured around questions students actually need
                answered.
              </p>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {evaluationPoints.map((point) => (
                  <article
                    key={point.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6"
                  >
                    <h3 className="text-lg font-semibold text-slate-950">
                      {point.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {point.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Responsible AI */}
        <section className="bg-indigo-50/60 py-16 md:py-20">
          <Container>
            <div className="mx-auto max-w-4xl rounded-3xl border border-indigo-100 bg-white p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Responsible AI
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                AI should support learning, not replace it
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
                <p>
                  AI can be useful for brainstorming, explaining difficult
                  concepts, organizing ideas, researching topics, reviewing
                  drafts, and practicing for exams.
                </p>

                <p>
                  Students should still understand the work they submit,
                  verify important information, and follow the academic
                  integrity and AI-use policies that apply to their course or
                  university.
                </p>

                <p>
                  AI Student Hub provides educational guidance about tools and
                  workflows. It does not replace your instructor&apos;s
                  requirements or your institution&apos;s academic policies.
                </p>
              </div>

              <Link
                href="/blog/ai-college-assignments"
                className="mt-7 inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Read our assignment workflow guide
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </Container>
        </section>

        {/* Guides */}
        <section className="bg-white py-16 md:py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Student guides
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Go beyond the tool directory
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Our guides explain how students can approach common academic
                tasks with AI and how to build practical workflows around the
                tools available.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  Explore student guides
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>

                <Link
                  href="/tools"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:border-indigo-300 hover:bg-indigo-50"
                >
                  Browse AI tools
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Disclaimer */}
        <section className="border-t border-slate-200 bg-slate-50 py-12">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Information notice
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                AI products, features, availability, and pricing can change
                over time. Students should check the official product website
                for current details before making decisions and should follow
                the policies applicable to their institution and course.
              </p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}