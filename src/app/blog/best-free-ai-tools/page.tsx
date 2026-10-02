import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/common/Container";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export const metadata: Metadata = {
  title: "Best Free AI Tools for Students",
  description:
    "Explore practical free and freemium AI tools for college students, including study, presentation, research, writing, note-taking, and productivity tools.",
  keywords: [
    "best free AI tools for students",
    "free AI tools for college students",
    "free AI websites for students",
    "AI tools for university students",
    "free AI study tools",
  ],
  alternates: {
    canonical: "https://ai-student-hub.vercel.app/blog/best-free-ai-tools",
  },
};

const studyTools = [
  {
    name: "Google NotebookLM",
    slug: "google-notebooklm",
    description:
      "Useful for studying from your own source material, including notes, documents, and other supported sources.",
    bestFor: "Source-based studying and revision",
  },
  {
    name: "Quizlet",
    slug: "quizlet",
    description:
      "Helpful for turning study material into revision activities and practicing recall.",
    bestFor: "Flashcards and active recall",
  },
  {
    name: "ChatGPT",
    slug: "chatgpt",
    description:
      "Useful as a general-purpose study assistant for explanations, examples, brainstorming, and practice questions.",
    bestFor: "Concept explanations and tutoring",
  },
  {
    name: "Notion AI",
    slug: "notion-ai",
    description:
      "Useful when your notes, planning, and study material already live inside a Notion workspace.",
    bestFor: "Organizing notes and study workflows",
  },
];

const presentationTools = [
  {
    name: "Gamma",
    slug: "gamma",
    description:
      "Designed to help turn an idea or written outline into a visually structured presentation.",
    bestFor: "Fast presentation drafts",
  },
  {
    name: "Canva Magic Studio",
    slug: "canva-magic-studio",
    description:
      "Useful for presentation design, visual assets, posters, and collaborative college projects.",
    bestFor: "Visual presentation design",
  },
  {
    name: "SlidesAI",
    slug: "slidesai",
    description:
      "Useful for students who want AI-assisted slide creation while working with Google Slides.",
    bestFor: "Google Slides workflows",
  },
];

const researchTools = [
  {
    name: "Perplexity AI",
    slug: "perplexity-ai",
    description:
      "Useful for exploring a topic on the web and following cited sources during early-stage research.",
    bestFor: "Web research and source discovery",
  },
  {
    name: "Consensus",
    slug: "consensus",
    description:
      "Focused on helping users search and explore research literature around academic questions.",
    bestFor: "Research paper discovery",
  },
  {
    name: "Elicit",
    slug: "elicit",
    description:
      "Useful for literature-review workflows and extracting information from academic sources.",
    bestFor: "Literature reviews",
  },
  {
    name: "Grammarly",
    slug: "grammarly",
    description:
      "Useful for checking grammar, clarity, tone, and readability in academic drafts.",
    bestFor: "Proofreading and editing",
  },
];

const workflow = [
  {
    number: "01",
    title: "Define the task",
    text: "Start with the actual problem: revise a chapter, understand a concept, create slides, find papers, or improve a draft.",
  },
  {
    number: "02",
    title: "Choose the right tool",
    text: "Pick a tool based on the task instead of assuming one AI assistant is equally useful for everything.",
  },
  {
    number: "03",
    title: "Give useful context",
    text: "Provide the relevant notes, topic, instructions, audience, or research question when the tool supports that workflow.",
  },
  {
    number: "04",
    title: "Verify the result",
    text: "Check important facts, calculations, citations, quotations, and claims before using AI output in academic work.",
  },
];

const faqs = [
  {
    question: "What are the best free AI tools for students?",
    answer:
      "There is no single tool that is best for every student task. Useful options include Google NotebookLM and Quizlet for study workflows, Gamma and Canva for presentations, and Perplexity, Consensus, and Elicit for different research tasks. The right choice depends on what you are trying to accomplish.",
  },
  {
    question: "Are free AI tools actually free?",
    answer:
      "Some tools offer genuinely free access, while others use freemium models with usage limits or paid features. Because plans can change, students should check the current official pricing or plan information before depending on a specific feature.",
  },
  {
    question: "Can I use free AI tools for college assignments?",
    answer:
      "AI tools can support brainstorming, explanations, research, outlining, proofreading, and other parts of an assignment workflow. Whether and how you may use them depends on your course and university rules, so always check the applicable academic-integrity policy.",
  },
  {
    question: "Which free AI tool is best for studying?",
    answer:
      "It depends on the study task. NotebookLM can be useful for working from your own source material, Quizlet can support active recall, and ChatGPT can help explain concepts or generate practice questions. Students should choose based on the specific workflow they need.",
  },
  {
    question: "Should I use AI to write my entire assignment?",
    answer:
      "Using AI to generate an entire submission can conflict with academic-integrity requirements and can also prevent you from developing the understanding the assignment is designed to assess. A more useful approach is to use AI selectively for tasks such as brainstorming, explanation, research support, outlining, and proofreading when permitted.",
  },
];

export default function BestFreeAIToolsPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="border-b border-slate-200 bg-slate-50">
          <Container>
            <div className="mx-auto max-w-4xl py-16 md:py-20">
              <Link
                href="/blog"
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                ← Back to Student Guides
              </Link>

              <div className="mt-8">
                <span className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700">
                  Student guide
                </span>

                <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl md:leading-[1.1]">
                  Best Free AI Tools for Students
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                  A practical guide to free and freemium AI tools that can
                  help college students study, create presentations, research
                  topics, and improve academic writing.
                </p>

                <div className="mt-8 flex flex-wrap gap-3 text-xs font-medium text-slate-500">
                  <span className="rounded-lg border border-slate-200 bg-white px-3 py-2">
                    College students
                  </span>
                  <span className="rounded-lg border border-slate-200 bg-white px-3 py-2">
                    Study & productivity
                  </span>
                  <span className="rounded-lg border border-slate-200 bg-white px-3 py-2">
                    Free & freemium
                  </span>
                  <span className="rounded-lg border border-slate-200 bg-white px-3 py-2">
                    Updated guide
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Intro */}
        <section className="bg-white py-14 md:py-18">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
              <article className="max-w-3xl">
                <p className="text-lg leading-8 text-slate-700">
                  Students do not necessarily need another huge list of AI
                  websites. The more useful question is:{" "}
                  <strong>which tool fits the task I need to complete?</strong>
                </p>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  A study session, a research paper, a seminar presentation,
                  and a proofreading task all require different workflows.
                  Some AI tools are better at working from your own documents,
                  while others are designed for web research, presentation
                  design, or editing.
                </p>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  This guide focuses on tools that students can access through
                  free plans, free features, or freemium models. Features and
                  limits can change, so treat the pricing category as a starting
                  point and check the official tool website before making a
                  decision.
                </p>
              </article>

              <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                  In this guide
                </p>

                <nav className="mt-4 space-y-3 text-sm">
                  <a
                    href="#study"
                    className="block text-slate-600 hover:text-indigo-600"
                  >
                    AI tools for studying
                  </a>
                  <a
                    href="#presentations"
                    className="block text-slate-600 hover:text-indigo-600"
                  >
                    AI tools for presentations
                  </a>
                  <a
                    href="#research"
                    className="block text-slate-600 hover:text-indigo-600"
                  >
                    AI tools for research
                  </a>
                  <a
                    href="#workflow"
                    className="block text-slate-600 hover:text-indigo-600"
                  >
                    How students can use AI
                  </a>
                  <a
                    href="#responsible-use"
                    className="block text-slate-600 hover:text-indigo-600"
                  >
                    Responsible use
                  </a>
                  <a
                    href="#faq"
                    className="block text-slate-600 hover:text-indigo-600"
                  >
                    FAQ
                  </a>
                </nav>
              </aside>
            </div>
          </Container>
        </section>

        {/* Study */}
        <section id="study" className="border-y border-slate-200 bg-slate-50 py-16 md:py-20">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                01 · Notes & Study
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Free AI tools for studying
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Study tools are most useful when they help you understand and
                practice material rather than simply produce answers. Look for
                tools that can work with your notes, generate practice
                material, explain difficult ideas, or support active recall.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {studyTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-slate-950">
                      {tool.name}
                    </h3>

                    <span
                      className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-indigo-500"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {tool.description}
                  </p>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Best for
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-700">
                    {tool.bestFor}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/categories/notes-study"
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Explore all AI study tools →
              </Link>
            </div>
          </Container>
        </section>

        {/* Presentations */}
        <section id="presentations" className="bg-white py-16 md:py-20">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                02 · Presentations
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Free AI tools for college presentations
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Presentation tools can speed up the transition from an outline
                to a usable slide deck. They are especially useful when you
                already understand your topic and need help with structure,
                visual hierarchy, or slide design.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {presentationTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-slate-950">
                      {tool.name}
                    </h3>

                    <span
                      className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-indigo-500"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {tool.description}
                  </p>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Best for
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-700">
                    {tool.bestFor}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/categories/presentations"
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Explore all presentation tools →
              </Link>
            </div>
          </Container>
        </section>

        {/* Research */}
        <section id="research" className="border-y border-slate-200 bg-slate-50 py-16 md:py-20">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                03 · Research & Writing
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Free AI tools for research papers and writing
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Research requires more than generating text. Students often
                need to discover relevant papers, understand sources, compare
                evidence, organize ideas, and improve the clarity of a draft.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {researchTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-slate-950">
                      {tool.name}
                    </h3>

                    <span
                      className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-indigo-500"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {tool.description}
                  </p>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Best for
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-700">
                    {tool.bestFor}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/categories/research"
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Explore all research & writing tools →
              </Link>
            </div>
          </Container>
        </section>

        {/* Workflow */}
        <section id="workflow" className="bg-white py-16 md:py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                A practical workflow
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                How students can get more value from free AI tools
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                The tool matters, but the workflow matters more. A simple
                process can make AI outputs more useful and easier to verify.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-4xl space-y-4">
              {workflow.map((step) => (
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
          </Container>
        </section>

        {/* Free vs Freemium */}
        <section className="border-y border-slate-200 bg-slate-50 py-16 md:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  Before you choose
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                  Free does not always mean unlimited
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  Many AI products use a freemium model. That means you can
                  access the product without paying, but some advanced models,
                  higher usage limits, larger files, or premium features may
                  require a paid plan.
                </p>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  If you are choosing a tool for an important college project,
                  check its current official plan information before building
                  your entire workflow around a feature.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7">
                <div className="space-y-5">
                  {[
                    {
                      label: "Free",
                      text: "Core access is available without a paid subscription.",
                      style: "bg-green-50 text-green-700",
                    },
                    {
                      label: "Freemium",
                      text: "A free tier exists, with additional features or capacity behind paid plans.",
                      style: "bg-indigo-50 text-indigo-700",
                    },
                    {
                      label: "Paid",
                      text: "The main workflow requires a paid subscription or purchase.",
                      style: "bg-amber-50 text-amber-700",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <span
                        className={`h-fit rounded-full px-3 py-1 text-xs font-semibold ${item.style}`}
                      >
                        {item.label}
                      </span>

                      <p className="text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Responsible use */}
        <section id="responsible-use" className="bg-white py-16 md:py-20">
          <Container>
            <div className="mx-auto max-w-4xl rounded-3xl border border-indigo-100 bg-indigo-50/60 p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Responsible AI use
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                Use AI to improve your learning, not replace it
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
                <p>
                  AI output can contain incorrect facts, fabricated citations,
                  outdated information, or misleading explanations. Important
                  academic claims should be checked against reliable sources.
                </p>

                <p>
                  Your university or instructor may also have specific rules
                  about AI-assisted work. Those rules take priority over any
                  general workflow described in this guide.
                </p>

                <p>
                  A useful approach is to use AI for tasks such as
                  brainstorming, explaining concepts, generating practice
                  questions, organizing ideas, finding starting points for
                  research, and proofreading when permitted.
                </p>
              </div>

              <Link
                href="/blog/ai-college-assignments"
                className="mt-6 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Read the full college assignment workflow →
              </Link>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-slate-200 bg-slate-50 py-16 md:py-20">
          <Container>
            <div className="mx-auto max-w-3xl">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  FAQ
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                  Frequently asked questions
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

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-slate-950 py-16 md:py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-300">
                Keep exploring
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Find the right AI tool for your next task
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-300">
                Explore the full AI Student Hub directory and compare tools
                across studying, presentations, research, and writing.
              </p>

              <Link
                href="/tools"
                className="mt-8 inline-flex items-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-indigo-50"
              >
                Explore all AI tools
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