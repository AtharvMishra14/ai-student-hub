import Link from "next/link";
import Script from "next/script";

import Container from "@/components/common/Container";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ToolCard from "@/components/tools/ToolCard";
import { aiTools, categories } from "@/data/tools";

const featuredSlugs = [
  "google-notebooklm",
  "chatgpt",
  "gamma",
  "canva-magic-studio",
  "perplexity-ai",
  "consensus",
];

const featuredTools = featuredSlugs
  .map((slug) => aiTools.find((tool) => tool.slug === slug))
  .filter((tool): tool is (typeof aiTools)[number] => Boolean(tool));

const taskLinks = [
  {
    title: "Study & revise",
    description: "Summarize notes, understand concepts, and prepare for exams.",
    href: "/categories/notes-study",
    icon: "01",
  },
  {
    title: "Make presentations",
    description: "Build polished slides and seminar decks faster.",
    href: "/categories/presentations",
    icon: "02",
  },
  {
    title: "Research & write",
    description: "Find sources, explore papers, and improve academic writing.",
    href: "/categories/research",
    icon: "03",
  },
];

const faqs = [
  {
    question: "What is AI Student Hub?",
    answer:
      "AI Student Hub is a practical guide to AI tools for college students. It organizes tools around real academic tasks such as studying, presentations, research, writing, and revision.",
  },
  {
    question: "Are these AI tools free?",
    answer:
      "The directory includes free, freemium, and paid tools. Each tool page explains its pricing model and what students should consider before choosing it.",
  },
  {
    question: "Which AI tools are useful for studying?",
    answer:
      "Tools such as Google NotebookLM, Quizlet, Notion AI, Otter.ai, and ChatGPT can support different parts of studying, including note analysis, revision, transcription, and concept explanations.",
  },
  {
    question: "Can students use AI for college assignments?",
    answer:
      "AI can support tasks such as brainstorming, outlining, explaining difficult concepts, proofreading, and research. Students should still verify information and follow their university's academic integrity rules.",
  },
];

export default function HomePage() {
  return (
    <>
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "AI Student Hub",
            url: "https://ai-student-hub.vercel.app",
            description:
              "Practical AI tools and guides for college students across studying, presentations, research, writing, and academic productivity.",
          }),
        }}
      />

      
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-white">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-80"
            aria-hidden="true"
          >
            <div className="absolute left-1/2 top-[-280px] h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-100/70 blur-3xl" />
            <div className="absolute left-[10%] top-[160px] h-40 w-40 rounded-full bg-violet-100/70 blur-3xl" />
            <div className="absolute right-[8%] top-[120px] h-48 w-48 rounded-full bg-blue-100/70 blur-3xl" />
          </div>

          <Container className="relative">
            <div className="mx-auto max-w-4xl px-2 pb-20 pt-20 text-center md:pb-24 md:pt-28">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold text-indigo-700 shadow-sm backdrop-blur">
                <span
                  className="h-2 w-2 rounded-full bg-indigo-500"
                  aria-hidden="true"
                />
                Built for college workflows
              </div>

              <h1 className="mt-7 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl md:text-6xl md:leading-[1.08]">
                Find the right AI tools for{" "}
                <span className="text-indigo-600">college life.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Discover practical AI tools for studying, presentations,
                research, writing, and everyday academic work — explained from
                a student&apos;s point of view.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/tools"
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
                >
                  Explore AI tools
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>

                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Read student guides
                </Link>
              </div>

              <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-200 bg-white/80 p-4 text-left shadow-sm backdrop-blur">
                <div className="px-4 text-center">
                  <p className="text-2xl font-bold text-slate-950">15+</p>
                  <p className="mt-1 text-xs text-slate-500">AI tools</p>
                </div>

                <div className="px-4 text-center">
                  <p className="text-2xl font-bold text-slate-950">3</p>
                  <p className="mt-1 text-xs text-slate-500">Student categories</p>
                </div>

                <div className="px-4 text-center">
                  <p className="text-2xl font-bold text-slate-950">1</p>
                  <p className="mt-1 text-xs text-slate-500">Student-first hub</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Task Finder */}
        <section className="border-b border-slate-200 bg-slate-50 py-16 md:py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Start with your task
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                What are you trying to do?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Skip the endless AI tool lists. Start with the college task
                you need help with.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {taskLinks.map((task) => (
                <Link
                  key={task.title}
                  href={task.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-200/50"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-xs font-bold text-indigo-600">
                      {task.icon}
                    </span>

                    <span
                      className="text-lg text-slate-300 transition group-hover:translate-x-1 group-hover:text-indigo-500"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-slate-950">
                    {task.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {task.description}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* Featured Tools */}
        <section className="bg-white py-20 md:py-24">
          <Container>
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  Featured tools
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                  AI tools worth exploring for college
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  Explore tools across studying, presentations, research, and
                  academic writing.
                </p>
              </div>

              <Link
                href="/tools"
                className="shrink-0 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                View all 15 tools →
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredTools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </Container>
        </section>

        {/* Categories */}
        <section className="border-y border-slate-200 bg-slate-50 py-20 md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Explore by category
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Built around the way students actually work
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Each category focuses on a different part of the college
                workflow, making it easier to compare tools for a specific
                problem.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {categories.map((category, index) => (
                <Link
                  key={category.slug}
                  href={`/categories/${category.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-200/50"
                >
                  <div
                    className="absolute right-0 top-0 h-32 w-32 rounded-full bg-indigo-50 blur-2xl transition group-hover:bg-indigo-100"
                    aria-hidden="true"
                  />

                  <div className="relative">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">
                      0{index + 1}
                    </span>

                    <h3 className="mt-5 text-xl font-semibold text-slate-950">
                      {category.name}
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
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* How It Works */}
        <section className="bg-white py-20 md:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  How it works
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                  Less searching. More getting things done.
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  AI Student Hub organizes tools around actual college tasks
                  instead of simply giving you another giant list of AI
                  websites.
                </p>

                <Link
                  href="/tools"
                  className="mt-7 inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  Browse the complete directory →
                </Link>
              </div>

              <div className="space-y-4">
                {[
                  {
                    number: "01",
                    title: "Choose your academic task",
                    text: "Start with studying, presentations, research, writing, or another common college workflow.",
                  },
                  {
                    number: "02",
                    title: "Compare relevant tools",
                    text: "See what each tool is best for, how it fits student workflows, and what its limitations are.",
                  },
                  {
                    number: "03",
                    title: "Use a practical workflow",
                    text: "Follow example prompts and step-by-step ideas instead of figuring everything out from scratch.",
                  },
                ].map((step) => (
                  <div
                    key={step.number}
                    className="flex gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xs font-bold text-indigo-600 shadow-sm">
                      {step.number}
                    </span>

                    <div>
                      <h3 className="font-semibold text-slate-950">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Guides */}
        <section className="border-y border-slate-200 bg-slate-50 py-20 md:py-24">
          <Container>
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  Student guides
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                  Learn how to use AI responsibly
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  Practical guides for choosing free tools, improving
                  assignments, and using AI without losing the student work
                  that matters.
                </p>
              </div>

              <Link
                href="/blog"
                className="shrink-0 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                View all guides →
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Link
                href="/blog/best-free-ai-tools"
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                  Guide
                </span>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                  Best Free AI Tools for Students
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  A student-focused guide to useful AI tools when you want to
                  get more done without immediately paying for another
                  subscription.
                </p>

                <span className="mt-6 inline-flex text-sm font-semibold text-indigo-600">
                  Read the guide →
                </span>
              </Link>

              <Link
                href="/blog/ai-college-assignments"
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                  Guide
                </span>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                  How to Use AI for College Assignments
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Learn practical ways to use AI for brainstorming, research,
                  outlining, revision, and proofreading while keeping your own
                  academic work at the center.
                </p>

                <span className="mt-6 inline-flex text-sm font-semibold text-indigo-600">
                  Read the guide →
                </span>
              </Link>
            </div>
          </Container>
        </section>

        {/* Why AI Student Hub */}
        <section className="bg-white py-20 md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Why AI Student Hub?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                AI advice designed around student problems
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Generic AI directories tell you what a tool does. We focus on
                where it fits into a college workflow.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Task-focused",
                  text: "Find tools based on what you need to accomplish rather than browsing an endless list.",
                },
                {
                  title: "Student-first",
                  text: "Compare tools through the lens of assignments, exams, presentations, research, and student budgets.",
                },
                {
                  title: "Practical",
                  text: "Get example workflows and prompts that help you move from discovering a tool to actually using it.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    ✓
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="border-t border-slate-200 bg-slate-50 py-20 md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  FAQ
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                  Questions students usually have
                </h2>
              </div>

              <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-6">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group py-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-slate-950">
                      {faq.question}

                      <span
                        className="text-xl text-slate-400 transition-transform group-open:rotate-45"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="bg-slate-950 py-20 md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-300">
                Ready to explore?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Find an AI tool for your next college task.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
                Explore the directory and find tools for studying,
                presentations, research, writing, and more.
              </p>

              <Link
                href="/tools"
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-indigo-50"
              >
                Explore AI tools
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