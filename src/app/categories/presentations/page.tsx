import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/common/Container";
import ToolCard from "@/components/tools/ToolCard";
import { getToolsByCategory } from "@/data/tools";

export const metadata: Metadata = {
  title: "Best AI Presentation Makers for Students",
  description:
    "Explore AI presentation makers for college students. Compare tools for creating slides, project presentations, seminars, academic posters, and visual coursework.",
  alternates: {
    canonical: "https://ai-student-hub-two.vercel.app/categories/presentations",
  },
};

export default function PresentationsPage() {
  const tools = getToolsByCategory("Presentations");

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
              Presentations
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              Best AI Presentation Makers for Students
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Discover AI presentation tools that can help college students
              create project presentations, seminar slides, visual reports,
              academic posters, and other presentation-based coursework.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                {tools.length} presentation tools
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                AI slide creation
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                Student-focused
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
                Why use AI for presentations?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                Spend less time formatting and more time communicating
              </h2>

              <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
                <p>
                  College students regularly need to turn research, project
                  work, assignments, and technical concepts into presentations.
                  Creating a clear structure and formatting every slide can
                  take considerable time.
                </p>

                <p>
                  AI presentation tools can help create an initial structure,
                  transform written material into slides, suggest layouts, and
                  speed up repetitive design work.
                </p>

                <p>
                  The important part is still the student&apos;s content. AI should
                  help communicate your ideas more effectively rather than
                  replace the research and understanding behind the
                  presentation.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
              <p className="text-sm font-semibold text-slate-950">
                Presentation workflow
              </p>

              <ol className="mt-5 space-y-5">
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                    1
                  </span>

                  <div>
                    <p className="font-semibold text-slate-950">
                      Prepare your content
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Start with your research, project information, or
                      assignment requirements.
                    </p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                    2
                  </span>

                  <div>
                    <p className="font-semibold text-slate-950">
                      Generate the structure
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Let AI help turn your material into a logical slide
                      sequence.
                    </p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                    3
                  </span>

                  <div>
                    <p className="font-semibold text-slate-950">
                      Review and personalize
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Verify facts, add your own work, and adapt the design to
                      your course requirements.
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
              AI presentation tools for college students
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Explore tools for generating slides, improving presentation
              design, converting text into visual content, and creating
              polished academic presentations.
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
              What can AI presentation tools help with?
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Project presentations
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Turn your project problem, solution, implementation, results,
                and conclusion into a structured presentation.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Seminar slides
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Build a logical sequence for seminars and classroom
                presentations without starting every slide from scratch.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Technical presentations
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Organize complex technical topics into sections that are
                easier for an audience to understand.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Research presentations
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Turn research findings, methodology, data, and conclusions
                into a presentation-friendly structure.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Academic posters
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Create visual summaries of projects or research for college
                exhibitions and academic events.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Presentation redesign
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Improve the structure and visual consistency of an existing
                presentation instead of rebuilding every slide manually.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* HOW TO CHOOSE */}
      <section className="bg-slate-50 py-16 md:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Choosing a tool
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Which AI presentation tool should you use?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              There is no single tool that fits every presentation. Choose
              based on the type of work you need to complete.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-left">
                <thead className="border-b border-slate-200 bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-950">
                      If you need...
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-slate-950">
                      Look for...
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-slate-950">
                      Useful features
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-5 text-sm text-slate-700">
                      A presentation from an idea
                    </td>

                    <td className="px-6 py-5 text-sm font-medium text-slate-950">
                      AI presentation generation
                    </td>

                    <td className="px-6 py-5 text-sm text-slate-600">
                      Outline generation, layouts, visual structure
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-5 text-sm text-slate-700">
                      Better visual design
                    </td>

                    <td className="px-6 py-5 text-sm font-medium text-slate-950">
                      Design-focused tools
                    </td>

                    <td className="px-6 py-5 text-sm text-slate-600">
                      Templates, layouts, graphics, formatting
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-5 text-sm text-slate-700">
                      Slides from existing text
                    </td>

                    <td className="px-6 py-5 text-sm font-medium text-slate-950">
                      Text-to-slide tools
                    </td>

                    <td className="px-6 py-5 text-sm text-slate-600">
                      Text conversion, slide structure, editing
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-5 text-sm text-slate-700">
                      A polished academic presentation
                    </td>

                    <td className="px-6 py-5 text-sm font-medium text-slate-950">
                      Flexible editing
                    </td>

                    <td className="px-6 py-5 text-sm text-slate-600">
                      Custom layouts, visual consistency, exports
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* RESPONSIBLE USE */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Responsible use
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                Let AI handle the formatting — keep the thinking yours
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                AI can create a useful first draft, but students should verify
                the information, add their own research, and understand the
                material they are presenting. Always check your course or
                university rules before using AI-generated content in assessed
                work.
              </p>

              <div className="mt-7 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
                  <p className="font-semibold text-slate-950">
                    Verify facts
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Check statistics, claims, references, and technical
                    information.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
                  <p className="font-semibold text-slate-950">
                    Add your work
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Include your actual project findings, research, examples,
                    and conclusions.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
                  <p className="font-semibold text-slate-950">
                    Practice presenting
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    A polished slide deck still requires you to understand and
                    explain the content.
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
              AI presentation makers for students: FAQs
            </h2>
          </div>

          <div className="mt-8 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            <details className="group p-6">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-950">
                What is the best AI presentation maker for students?
              </summary>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                The right tool depends on your workflow. Some tools focus on
                generating complete presentations, while others are stronger
                at design, editing, or converting existing text into slides.
              </p>
            </details>

            <details className="group p-6">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-950">
                Can AI create a college presentation?
              </summary>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Yes. AI presentation tools can help generate an initial
                structure and visual design. Students should then verify,
                edit, and personalize the presentation.
              </p>
            </details>

            <details className="group p-6">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-950">
                Are there free AI presentation makers?
              </summary>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Several presentation tools provide free plans or limited free
                access, although generation, export, and design features may
                vary by plan.
              </p>
            </details>

            <details className="group p-6">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-950">
                Can I use AI-generated slides for college assignments?
              </summary>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                That depends on your course and university policies. Students
                should check the applicable academic-integrity and AI-use
                requirements before submitting AI-assisted work.
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
              Looking for AI tools beyond presentations?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300">
              Explore AI tools for studying, academic research, writing, and
              other college workflows.
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