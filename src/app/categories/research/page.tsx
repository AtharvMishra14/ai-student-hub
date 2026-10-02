import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/common/Container";
import ToolCard from "@/components/tools/ToolCard";
import { getToolsByCategory } from "@/data/tools";

export const metadata: Metadata = {
  title: "AI Tools for Research Papers",
  description:
    "Discover AI tools for college research papers, literature reviews, academic writing, source discovery, editing, and research workflows.",
};

export default function ResearchPage() {
  const tools = getToolsByCategory("Research & Writing");

  return (
    <main>
      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <Container>
          <div className="max-w-4xl py-16 md:py-20">
            <Link
              href="/tools"
              className="text-sm font-medium text-indigo-600 transition hover:text-indigo-700"
            >
              ← Browse all AI tools
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Research & Writing
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              AI Tools for Research Papers
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Explore AI tools that can help college students discover
              academic research, understand papers, organize literature,
              improve writing, and build more effective research workflows.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                {tools.length} research tools
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                Academic research
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                Writing & editing
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white py-14 md:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Why use AI for research?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                Make the research process more organized
              </h2>

              <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
                <p>
                  Research assignments can require students to search through
                  large amounts of information, identify relevant papers,
                  understand unfamiliar concepts, organize evidence, and
                  communicate their findings clearly.
                </p>

                <p>
                  AI research tools can help with parts of this process,
                  particularly during topic exploration, literature discovery,
                  summarization, organization, and writing revision.
                </p>

                <p>
                  AI should not replace the process of evaluating evidence.
                  Students should read important sources themselves and check
                  whether the evidence actually supports the claims being
                  made.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
              <p className="text-sm font-semibold text-slate-950">
                Research workflow
              </p>

              <ol className="mt-5 space-y-5">
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                    1
                  </span>

                  <div>
                    <p className="font-semibold text-slate-950">
                      Define your question
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Turn a broad topic into a focused research question.
                    </p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                    2
                  </span>

                  <div>
                    <p className="font-semibold text-slate-950">
                      Find and evaluate sources
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Discover relevant literature and inspect the original
                      sources.
                    </p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                    3
                  </span>

                  <div>
                    <p className="font-semibold text-slate-950">
                      Build your own argument
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Use the evidence you evaluated to develop your own
                      analysis and conclusions.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* TOOLS */}
      <section className="border-y border-slate-200 bg-slate-50 py-16 md:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Featured tools
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              AI tools for research and academic writing
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Explore tools for finding research, understanding academic
              literature, improving drafts, and organizing the research
              process.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </Container>
      </section>

      {/* USE CASES */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Common student tasks
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              What can AI research tools help with?
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Finding academic papers
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Search for research related to a specific question and build
                an initial collection of potentially relevant papers.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Literature reviews
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Organize papers around themes, findings, methodologies, and
                research questions to make literature review work more
                structured.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Understanding research
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Use AI to help explain unfamiliar terminology, concepts, or
                sections of research papers before reading them in depth.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Research exploration
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Discover related concepts, terminology, questions, and
                potential directions for further investigation.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Academic writing
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Improve grammar, clarity, organization, and readability while
                keeping your own research and argument at the center.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Draft revision
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Identify unclear sentences, repetitive wording, and structural
                problems before submitting a research assignment.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* RESEARCH PROCESS */}
      <section className="bg-slate-50 py-16 md:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Research process
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Use AI at the right stage of your research
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              AI can support different stages of a research project, but the
              level of human verification should remain high when dealing with
              evidence and academic claims.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <span className="text-sm font-bold text-indigo-600">01</span>

              <h3 className="mt-4 text-lg font-semibold text-slate-950">
                Explore
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Learn terminology and identify important concepts around your
                topic.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <span className="text-sm font-bold text-indigo-600">02</span>

              <h3 className="mt-4 text-lg font-semibold text-slate-950">
                Discover
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Find papers, reports, and other sources that may be relevant to
                your research question.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <span className="text-sm font-bold text-indigo-600">03</span>

              <h3 className="mt-4 text-lg font-semibold text-slate-950">
                Evaluate
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Read important sources and evaluate their evidence,
                methodology, limitations, and relevance.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <span className="text-sm font-bold text-indigo-600">04</span>

              <h3 className="mt-4 text-lg font-semibold text-slate-950">
                Write
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Develop your own argument and use AI mainly for revision,
                clarity, and workflow support where permitted.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SOURCE VERIFICATION */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Research quality
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                AI can help find evidence — but you still need to evaluate it
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                A research tool can help you discover information, but
                discovering a source is not the same as establishing that a
                claim is correct. Before using evidence in a paper, inspect
                the original source and consider its credibility, methodology,
                date, context, and limitations.
              </p>

              <div className="mt-7 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
                  <p className="font-semibold text-slate-950">
                    Check the source
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Open the original paper or source instead of relying only
                    on an AI summary.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
                  <p className="font-semibold text-slate-950">
                    Check the evidence
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Make sure the evidence actually supports the claim you want
                    to make.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
                  <p className="font-semibold text-slate-950">
                    Cite appropriately
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Follow the citation style and source requirements given by
                    your course.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 md:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              AI tools for research papers: FAQs
            </h2>
          </div>

          <div className="mt-8 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            <details className="group p-6">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-950">
                What are the best AI tools for research papers?
              </summary>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                The right tool depends on the stage of research. Some tools
                focus on discovering academic papers, while others help with
                research exploration, summarization, editing, or writing.
              </p>
            </details>

            <details className="group p-6">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-950">
                Can AI help with literature reviews?
              </summary>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Yes. AI can help discover papers, organize literature, compare
                themes, and identify areas that deserve closer investigation.
                Students should still read and evaluate important sources.
              </p>
            </details>

            <details className="group p-6">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-950">
                Can AI write a research paper for me?
              </summary>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                AI can assist with brainstorming, explanations, outlining,
                editing, and other research workflows, but students should
                follow their institution&apos;s academic-integrity requirements
                and remain responsible for the submitted work.
              </p>
            </details>

            <details className="group p-6">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-950">
                How should I verify AI-generated research information?
              </summary>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Open the original source, check the evidence and methodology,
                compare important claims with reliable sources, and follow
                your course&apos;s citation requirements.
              </p>
            </details>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-white py-16">
        <Container>
          <div className="rounded-3xl bg-slate-950 px-6 py-12 text-center sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-300">
              AI Student Hub
            </p>

            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white">
              Explore AI tools for every part of college
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300">
              Find tools for studying, presentations, research, writing, and
              other student workflows.
            </p>

            <Link
              href="/tools"
              className="mt-7 inline-flex rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Explore all AI tools
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}