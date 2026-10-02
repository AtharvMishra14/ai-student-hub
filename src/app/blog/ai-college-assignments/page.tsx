import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/common/Container";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export const metadata: Metadata = {
  title: "How to Use AI for College Assignments",
  description:
    "Learn how to use AI responsibly for college assignments, from brainstorming and research to outlining, proofreading, fact-checking, and final review.",
  keywords: [
    "how to use AI for college assignments",
    "AI for college assignments",
    "AI assignment helper",
    "using AI ethically in college",
    "AI tools for university assignments",
    "responsible AI use for students",
  ],
  alternates: {
    canonical: "https://ai-student-hub.vercel.app/blog/ai-college-assignments",
  },
};

const workflowSteps = [
  {
    number: "01",
    title: "Understand the assignment",
    description:
      "Start with the actual instructions, grading criteria, required sources, word count, format, and deadline. AI should not replace your understanding of what the instructor is asking.",
    example:
      "Ask AI to explain the assignment instructions in simpler language and turn them into a checklist.",
  },
  {
    number: "02",
    title: "Brainstorm ideas",
    description:
      "Use AI to generate possible directions, questions, examples, or angles for your topic. Treat the output as a starting point rather than the final answer.",
    example:
      "Ask for five possible approaches to a topic and then choose the one that fits your course material.",
  },
  {
    number: "03",
    title: "Research the topic",
    description:
      "Use appropriate research tools to discover papers, sources, terminology, and background information. Verify important claims against the original sources.",
    example:
      "Use research-focused tools to identify relevant papers, then open and evaluate the actual publications.",
  },
  {
    number: "04",
    title: "Build an outline",
    description:
      "Once you understand your topic, AI can help turn your ideas into a logical structure with sections, arguments, evidence, and transitions.",
    example:
      "Give AI your own main points and ask it to suggest a logical order for the sections.",
  },
  {
    number: "05",
    title: "Write your own draft",
    description:
      "The main academic work should remain yours. Use the outline, your course material, and your sources to develop the argument and write the submission.",
    example:
      "Use AI to ask questions about gaps in your reasoning rather than simply asking it to write the entire submission.",
  },
  {
    number: "06",
    title: "Improve the draft",
    description:
      "When permitted, AI can help identify unclear sentences, grammar issues, repetitive wording, weak transitions, or places where an explanation needs more support.",
    example:
      "Ask for feedback on clarity and grammar while keeping the original meaning and argument unchanged.",
  },
  {
    number: "07",
    title: "Verify everything important",
    description:
      "Check factual claims, calculations, citations, quotations, names, dates, and references. AI systems can produce confident but incorrect information.",
    example:
      "Trace important claims back to the original textbook, paper, documentation, dataset, or other reliable source.",
  },
  {
    number: "08",
    title: "Complete a final academic check",
    description:
      "Before submitting, compare your work with the assignment instructions and your university or course rules about AI-assisted work.",
    example:
      "Make sure the final submission reflects your own understanding and that any required AI disclosure has been completed.",
  },
];

const recommendedTools = [
  {
    name: "ChatGPT",
    slug: "chatgpt",
    bestFor: "Brainstorming, explanations, practice questions, and feedback",
  },
  {
    name: "Google NotebookLM",
    slug: "google-notebooklm",
    bestFor: "Working with your own notes and source material",
  },
  {
    name: "Perplexity AI",
    slug: "perplexity-ai",
    bestFor: "Early-stage web research and source discovery",
  },
  {
    name: "Consensus",
    slug: "consensus",
    bestFor: "Exploring academic research and papers",
  },
  {
    name: "Elicit",
    slug: "elicit",
    bestFor: "Literature-review workflows",
  },
  {
    name: "Grammarly",
    slug: "grammarly",
    bestFor: "Grammar, clarity, and writing feedback",
  },
  {
    name: "QuillBot",
    slug: "quillbot",
    bestFor: "Reworking wording and improving readability",
  },
];

const promptExamples = [
  {
    title: "Understand the task",
    prompt:
      "Explain these assignment instructions in simple language. Turn them into a checklist of what I need to complete, and identify anything I should clarify with my instructor.",
  },
  {
    title: "Brainstorm",
    prompt:
      "I am studying [topic]. Give me five possible angles I could explore for an assignment. For each one, explain what question I could investigate and what kind of evidence I would need.",
  },
  {
    title: "Improve an outline",
    prompt:
      "Here is my assignment topic and my current outline. Identify gaps, repeated ideas, and sections that may need stronger evidence. Do not write the assignment for me.",
  },
  {
    title: "Review a draft",
    prompt:
      "Review this draft for clarity, grammar, structure, and unsupported claims. Keep my ideas and meaning intact. List the changes I should consider instead of rewriting the entire assignment.",
  },
];

const mistakes = [
  {
    title: "Copying AI output directly",
    text: "Generated text may be inaccurate, generic, or inconsistent with the student's actual understanding of the topic.",
  },
  {
    title: "Trusting invented citations",
    text: "AI systems can produce references that look realistic but do not exist or do not support the stated claim.",
  },
  {
    title: "Using one tool for everything",
    text: "A general chatbot, research engine, note-taking system, and writing assistant solve different problems.",
  },
  {
    title: "Ignoring course rules",
    text: "An AI workflow that is acceptable in one course may not be permitted in another.",
  },
  {
    title: "Submitting without verification",
    text: "Important facts, statistics, quotations, calculations, and sources should be checked before submission.",
  },
];

const faqs = [
  {
    question: "Can I use AI for college assignments?",
    answer:
      "Whether you can use AI, and which uses are permitted, depends on your course and university rules. AI can sometimes be used for brainstorming, explanations, research support, outlining, or proofreading, but students should follow the specific academic-integrity requirements that apply to their assignment.",
  },
  {
    question: "Can AI write my entire college assignment?",
    answer:
      "Using AI to generate an entire submission may conflict with academic-integrity rules and can undermine the learning objective of the assignment. A more defensible workflow is to keep the core reasoning and writing your own and use AI selectively for permitted support tasks.",
  },
  {
    question: "How can I use AI without plagiarizing?",
    answer:
      "Do not present AI-generated material or another person's work as your own when your course rules prohibit that. Keep track of your sources, verify claims, follow required citation rules, and check whether your instructor requires disclosure of AI assistance.",
  },
  {
    question: "Can AI create citations for my assignment?",
    answer:
      "AI can help format or organize citation information, but students should verify every important citation against the original source and the citation style required by their course. Do not assume a generated reference is real or accurate.",
  },
  {
    question: "Which AI tools are useful for assignments?",
    answer:
      "Different tools fit different stages. ChatGPT can help with brainstorming and explanations, NotebookLM can work with supplied source material, Perplexity can support web research, Consensus and Elicit can support academic research workflows, and Grammarly can help with proofreading and clarity.",
  },
];

export default function AICollegeAssignmentsPage() {
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
                  Academic workflow guide
                </span>

                <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl md:leading-[1.1]">
                  How to Use AI for College Assignments
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                  A practical workflow for using AI during brainstorming,
                  research, outlining, writing, proofreading, and verification
                  while keeping your own academic work at the center.
                </p>

                <div className="mt-8 flex flex-wrap gap-3 text-xs font-medium text-slate-500">
                  <span className="rounded-lg border border-slate-200 bg-white px-3 py-2">
                    College assignments
                  </span>
                  <span className="rounded-lg border border-slate-200 bg-white px-3 py-2">
                    Responsible AI
                  </span>
                  <span className="rounded-lg border border-slate-200 bg-white px-3 py-2">
                    Research & writing
                  </span>
                  <span className="rounded-lg border border-slate-200 bg-white px-3 py-2">
                    Student workflow
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Introduction */}
        <section className="bg-white py-14 md:py-18">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
              <article className="max-w-3xl">
                <p className="text-lg leading-8 text-slate-700">
                  The most useful way to think about AI for college assignments
                  is not{" "}
                  <strong>&quot;How can AI write this for me?&quot;</strong>
                  but{" "}
                  <strong>
                    &quot;Which part of this workflow can AI help me with?&quot;
                  </strong>
                </p>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  An assignment usually involves several different activities:
                  understanding the question, developing ideas, finding
                  evidence, organizing an argument, writing, editing, and
                  checking the final result. Different AI tools can support
                  some of those activities, but they should not remove the
                  student&apos;s responsibility for understanding the material and
                  producing work that follows the course requirements.
                </p>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  This guide presents a practical workflow that keeps AI in a
                  supporting role. Your instructor&apos;s and university&apos;s
                  academic-integrity rules always take priority.
                </p>
              </article>

              <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                  In this guide
                </p>

                <nav className="mt-4 space-y-3 text-sm">
                  <a
                    href="#workflow"
                    className="block text-slate-600 hover:text-indigo-600"
                  >
                    The assignment workflow
                  </a>
                  <a
                    href="#tools"
                    className="block text-slate-600 hover:text-indigo-600"
                  >
                    Useful AI tools
                  </a>
                  <a
                    href="#prompts"
                    className="block text-slate-600 hover:text-indigo-600"
                  >
                    Example prompts
                  </a>
                  <a
                    href="#mistakes"
                    className="block text-slate-600 hover:text-indigo-600"
                  >
                    Common mistakes
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

        {/* Workflow */}
        <section
          id="workflow"
          className="border-y border-slate-200 bg-slate-50 py-16 md:py-20"
        >
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                The workflow
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Use AI at the right stage of an assignment
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Instead of treating AI as an automatic assignment writer, use
                it selectively at stages where it can genuinely save time or
                improve your process.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-4xl space-y-5">
              {workflowSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-slate-200 bg-white p-6 md:p-7"
                >
                  <div className="flex gap-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-xs font-bold text-indigo-600">
                      {step.number}
                    </span>

                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-slate-950">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {step.description}
                      </p>

                      <div className="mt-4 rounded-xl bg-slate-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                          Example use
                        </p>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {step.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Tools */}
        <section id="tools" className="bg-white py-16 md:py-20">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Tools by assignment stage
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                AI tools that can support different parts of the workflow
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                There is no single tool that is equally useful for every
                assignment. Match the tool to the job.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {recommendedTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-slate-950">
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
                    {tool.bestFor}
                  </p>

                  <span className="mt-5 inline-flex text-xs font-semibold uppercase tracking-wider text-indigo-600">
                    View tool guide
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-5">
              <Link
                href="/categories/notes-study"
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Study & notes tools →
              </Link>

              <Link
                href="/categories/research"
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Research & writing tools →
              </Link>

              <Link
                href="/tools"
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Browse all tools →
              </Link>
            </div>
          </Container>
        </section>

        {/* Prompts */}
        <section
          id="prompts"
          className="border-y border-slate-200 bg-slate-50 py-16 md:py-20"
        >
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Example prompts
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Prompt AI for support, not shortcuts
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Good prompts give the model a specific role and task while
                keeping the student responsible for the final academic work.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-4xl space-y-5">
              {promptExamples.map((example) => (
                <article
                  key={example.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <h3 className="font-semibold text-slate-950">
                    {example.title}
                  </h3>

                  <div className="mt-4 rounded-xl bg-slate-950 p-5">
                    <p className="font-mono text-sm leading-7 text-slate-200">
                      {example.prompt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Mistakes */}
        <section id="mistakes" className="bg-white py-16 md:py-20">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Avoid these mistakes
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                What can go wrong when students rely on AI too heavily?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                AI can save time, but careless use can create new problems.
                These are some of the most important things to watch for.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {mistakes.map((mistake) => (
                <div
                  key={mistake.title}
                  className="rounded-2xl border border-slate-200 p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    !
                  </div>

                  <h3 className="mt-5 font-semibold text-slate-950">
                    {mistake.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {mistake.text}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Responsible use */}
        <section
          id="responsible-use"
          className="border-y border-indigo-100 bg-indigo-50/60 py-16 md:py-20"
        >
          <Container>
            <div className="mx-auto max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Responsible AI use
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Your university rules come first
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  AI policies vary between universities, departments,
                  instructors, and individual assignments. Some courses may
                  allow AI for brainstorming or proofreading, while others may
                  restrict or prohibit certain forms of assistance.
                </p>

                <p>
                  Before using an AI tool, check your assignment instructions
                  and the academic-integrity policy that applies to your
                  course. If disclosure is required, provide it in the format
                  your instructor specifies.
                </p>

                <p>
                  Most importantly, do not submit information, references, or
                  arguments simply because an AI system produced them. Check
                  important claims against reliable sources and make sure you
                  understand the work you submit.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-indigo-100 bg-white p-6">
                <p className="text-sm font-semibold text-slate-950">
                  A useful rule of thumb
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  If you could not explain or defend a significant part of
                  your submission without the AI tool, you probably need to
                  spend more time understanding and developing that part
                  yourself.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="border-t border-slate-200 bg-slate-50 py-16 md:py-20"
        >
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
                Continue exploring
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Find an AI tool for the next stage of your assignment
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-300">
                Explore practical guides for studying, research, presentations,
                writing, and other college workflows.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/tools"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-indigo-50"
                >
                  Explore AI tools
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>

                <Link
                  href="/blog/best-free-ai-tools"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900"
                >
                  Read the free tools guide
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}