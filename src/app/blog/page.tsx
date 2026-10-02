import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/common/Container";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export const metadata: Metadata = {
  title: "AI Guides for College Students",
  description:
    "Practical guides to using AI tools for studying, assignments, research, presentations, and academic productivity.",
  keywords: [
    "AI guides for college students",
    "AI tools for students",
    "best free AI tools for students",
    "how to use AI for college assignments",
    "AI study guides",
  ],
};

const guides = [
  {
    number: "01",
    label: "Free tools",
    title: "Best Free AI Tools for Students",
    description:
      "A practical guide to useful AI tools for college students who want to study, research, write, and create presentations without immediately paying for another subscription.",
    href: "/blog/best-free-ai-tools",
    topics: [
      "Free and freemium tools",
      "Study & revision",
      "Research & writing",
      "Presentations",
    ],
  },
  {
    number: "02",
    label: "Academic workflow",
    title: "How to Use AI for College Assignments",
    description:
      "Learn where AI can help across the assignment workflow — from brainstorming and research to outlining, proofreading, and final verification.",
    href: "/blog/ai-college-assignments",
    topics: [
      "Brainstorming",
      "Research",
      "Outlining",
      "Responsible AI use",
    ],
  },
];

const topics = [
  {
    title: "Studying & revision",
    description:
      "Find better ways to summarize notes, understand difficult concepts, and prepare for exams.",
    href: "/categories/notes-study",
  },
  {
    title: "Presentations",
    description:
      "Explore AI tools for creating slides, visual content, and seminar presentations.",
    href: "/categories/presentations",
  },
  {
    title: "Research & writing",
    description:
      "Discover tools for finding papers, exploring sources, proofreading, and improving academic writing.",
    href: "/categories/research",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Header */}
        <section className="border-b border-slate-200 bg-slate-50">
          <Container>
            <div className="mx-auto max-w-3xl py-16 text-center md:py-20">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Student guides
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Practical AI guides for college students
              </h1>

              <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                Learn how to choose and use AI tools for real college
                workflows — studying, assignments, research, writing, and
                presentations.
              </p>
            </div>
          </Container>
        </section>

        {/* Guides */}
        <section className="bg-white py-16 md:py-20">
          <Container>
            <div className="mx-auto max-w-3xl">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  Featured guides
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                  Start with a student problem
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  These guides focus on practical decisions students face when
                  using AI during college.
                </p>
              </div>

              <div className="mt-10 space-y-6">
                {guides.map((guide) => (
                  <article
                    key={guide.href}
                    className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-200/50 md:p-9"
                  >
                    <div className="flex flex-col gap-7 md:flex-row md:items-start">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-600">
                        {guide.number}
                      </div>

                      <div className="flex-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                          {guide.label}
                        </p>

                        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                          {guide.title}
                        </h2>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                          {guide.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {guide.topics.map((topic) => (
                            <span
                              key={topic}
                              className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={guide.href}
                          className="mt-7 inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                        >
                          Read guide
                          <span
                            className="ml-2 transition-transform group-hover:translate-x-1"
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Browse by topic */}
        <section className="border-y border-slate-200 bg-slate-50 py-16 md:py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Browse by topic
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                Explore AI tools by college task
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                If you already know what you need help with, go directly to
                the relevant tool category.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {topics.map((topic) => (
                <Link
                  key={topic.href}
                  href={topic.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-slate-200/50"
                >
                  <h3 className="text-lg font-semibold text-slate-950">
                    {topic.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {topic.description}
                  </p>

                  <span className="mt-6 inline-flex text-sm font-semibold text-indigo-600">
                    Explore tools
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

        {/* Responsible AI */}
        <section className="bg-white py-16 md:py-20">
          <Container>
            <div className="mx-auto max-w-4xl rounded-3xl border border-indigo-100 bg-indigo-50/60 p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                A student-first approach
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                Use AI as a study partner, not a replacement for your work
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                AI can help students brainstorm, explain difficult concepts,
                organize ideas, research topics, and improve drafts. The
                important part is understanding what a tool produces, checking
                important information, and following the academic integrity
                rules that apply to your course or university.
              </p>

              <Link
                href="/blog/ai-college-assignments"
                className="mt-6 inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Learn about responsible assignment workflows →
              </Link>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-slate-950 py-16 md:py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Looking for a specific AI tool?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-300">
                Browse the complete directory of AI tools evaluated around
                college study, presentation, research, and writing workflows.
              </p>

              <Link
                href="/tools"
                className="mt-8 inline-flex items-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-indigo-50"
              >
                Explore the AI tool directory
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}