import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/common/Container";
import ToolCard from "@/components/tools/ToolCard";
import { getToolsByCategory } from "@/data/tools";

export const metadata: Metadata = {
  title: "AI Study Tools for Students",
  description:
    "Discover AI study tools for college students, including tools for notes, exam preparation, lectures, revision, and understanding difficult topics.",
};

export default function NotesStudyPage() {
  const tools = getToolsByCategory("Notes & Study");

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
              Notes & Study
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              AI Study Tools for Students
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Discover AI tools that can help college students understand
              difficult topics, organize notes, prepare for exams, review
              lectures, and build more effective study workflows.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                {tools.length} student-focused tools
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                Study & revision
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                Notes & lectures
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
                Why use AI for studying?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                Use AI to make studying more interactive
              </h2>

              <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
                <p>
                  College students often spend a large amount of time
                  organizing notes, reviewing lectures, searching for
                  explanations, and preparing for exams. AI tools can help
                  reduce some of this repetitive work.
                </p>

                <p>
                  The most useful approach is not simply asking AI for
                  answers. Instead, students can use AI to explain difficult
                  concepts, generate practice questions, organize existing
                  material, and identify topics that need more attention.
                </p>

                <p>
                  The tools below are selected around practical student
                  workflows rather than generic AI capabilities.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
              <p className="text-sm font-semibold text-slate-950">
                Student workflow
              </p>

              <ol className="mt-5 space-y-5">
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                    1
                  </span>

                  <div>
                    <p className="font-semibold text-slate-950">
                      Start with your material
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Use your actual notes, syllabus, readings, or lecture
                      material.
                    </p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                    2
                  </span>

                  <div>
                    <p className="font-semibold text-slate-950">
                      Ask for a specific task
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Ask for explanations, summaries, quizzes, or practice.
                    </p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                    3
                  </span>

                  <div>
                    <p className="font-semibold text-slate-950">
                      Review the result
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Verify important information against your course
                      material.
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
              AI tools for studying and revision
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Explore tools for different parts of the college study
              workflow, from lecture notes and flashcards to explanations and
              exam preparation.
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
              What can AI study tools help with?
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Understanding difficult topics
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Ask for simpler explanations, examples, analogies, and
                step-by-step breakdowns of concepts you find difficult.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Exam preparation
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Generate practice questions, quizzes, revision material, and
                mock tests based on the topics you need to study.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Lecture notes
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Organize, summarize, and review lecture material so you can
                focus on the concepts that require more attention.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Flashcards and memorization
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Convert definitions, terminology, formulas, and key facts into
                material suitable for active recall.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Study planning
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Break a large syllabus into smaller study tasks and create a
                more structured revision workflow.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Active learning
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Instead of only reading summaries, use AI to quiz yourself,
                explain concepts, and identify gaps in your understanding.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* RESPONSIBLE USE */}
      <section className="bg-slate-50 py-16 md:py-20">
        <Container>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Responsible use
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                Use AI as a study assistant, not a replacement for learning
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                AI can make studying faster, but students still need to
                understand the material themselves. Important information
                should be checked against reliable sources and course
                material, and students should follow their university&apos;s
                academic-integrity policies.
              </p>

              <div className="mt-7 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl bg-slate-50 p-5">
                  <p className="font-semibold text-slate-950">
                    Verify information
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    AI systems can make mistakes. Check important facts.
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-5">
                  <p className="font-semibold text-slate-950">
                    Understand the answer
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Use explanations to learn rather than blindly copying.
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-5">
                  <p className="font-semibold text-slate-950">
                    Follow university rules
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Check the AI-use requirements for each course or
                    assignment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              AI study tools for students: FAQs
            </h2>
          </div>

          <div className="mt-8 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200">
            <details className="group p-6">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-950">
                What are the best AI study tools for college students?
              </summary>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                The right tool depends on the task. Some tools are better
                suited to source-based studying, while others focus on
                flashcards, explanations, transcription, or organizing notes.
              </p>
            </details>

            <details className="group p-6">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-950">
                Can AI help me prepare for college exams?
              </summary>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Yes. Students can use AI for explanations, practice
                questions, quizzes, revision notes, and identifying topics
                that need additional study.
              </p>
            </details>

            <details className="group p-6">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-950">
                Should students use AI to complete assignments?
              </summary>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                AI can support brainstorming, learning, research, and
                revision, but students should follow the academic-integrity
                requirements of their institution and course.
              </p>
            </details>

            <details className="group p-6">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-950">
                Are there free AI study tools?
              </summary>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Yes. Several tools in this category offer free access, though
                their limits and available features vary.
              </p>
            </details>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <Container>
          <div className="rounded-3xl bg-slate-950 px-6 py-12 text-center sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-300">
              AI Student Hub
            </p>

            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white">
              Need AI tools for another college task?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300">
              Explore AI tools for presentations, academic research, writing,
              and other student workflows.
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