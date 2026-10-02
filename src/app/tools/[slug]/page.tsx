import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/common/Container";
import { aiTools, getToolBySlug } from "@/data/tools";

interface ToolPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return aiTools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({
  params,
}: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: "Tool Not Found",
    };
  }

  return {
    title: `${tool.name} for College Students`,
    description: `${tool.shortDescription} Learn how ${tool.name} can help college students with ${tool.bestFor.toLowerCase()}.`,
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const relatedTools = tool.alternatives
    .map((alternative) => getToolBySlug(alternative.slug))
    .filter((alternative) => alternative !== undefined);

  return (
    <main>
      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <Container>
          <div className="py-12 md:py-16">
            <Link
              href="/tools"
              className="text-sm font-medium text-indigo-600 transition hover:text-indigo-700"
            >
              ← Back to AI Tools
            </Link>

            <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                    {tool.category}
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      tool.pricingType === "Free"
                        ? "bg-green-50 text-green-700"
                        : tool.pricingType === "Paid"
                          ? "bg-amber-50 text-amber-700"
                          : "bg-indigo-50 text-indigo-700"
                    }`}
                  >
                    {tool.pricingType}
                  </span>
                </div>

                <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
                  {tool.name} for College Students
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  {tool.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white px-3 py-1.5 text-xs font-medium text-slate-600 ring-1 ring-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Visit Official Website
                <span className="ml-2" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* QUICK FACTS */}
      <section className="border-b border-slate-200 bg-white py-10">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Best for
              </p>

              <p className="mt-3 text-base font-semibold leading-6 text-slate-950">
                {tool.bestFor}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Pricing
              </p>

              <p className="mt-3 text-base font-semibold leading-6 text-slate-950">
                {tool.pricing}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Category
              </p>

              <p className="mt-3 text-base font-semibold leading-6 text-slate-950">
                {tool.category}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
            <article className="max-w-3xl">
              {/* ACADEMIC VERDICT */}
              <section>
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  Academic Verdict
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                  Is {tool.name} useful for college students?
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  {tool.academicVerdict}
                </p>
              </section>

              {/* USE CASES */}
              <section className="mt-16">
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  Student Use Cases
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                  How students can use {tool.name}
                </h2>

                <div className="mt-7 space-y-4">
                  {tool.studentUseCases.map((useCase, index) => (
                    <div
                      key={useCase.title}
                      className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-indigo-200 hover:shadow-sm"
                    >
                      <div className="flex gap-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-sm font-bold text-indigo-600">
                          {index + 1}
                        </span>

                        <div>
                          <h3 className="text-lg font-semibold text-slate-950">
                            {useCase.title}
                          </h3>

                          <p className="mt-2 text-sm leading-7 text-slate-600">
                            {useCase.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* WORKFLOW */}
              <section className="mt-16">
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  Student Workflow
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                  A practical way to use {tool.name}
                </h2>

                <div className="mt-8 space-y-8">
                  {tool.workflow.map((step, index) => (
                    <div key={step.step} className="flex gap-5">
                      <div className="flex flex-col items-center">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                          {index + 1}
                        </span>

                        {index !== tool.workflow.length - 1 && (
                          <div className="mt-2 h-full w-px bg-slate-200" />
                        )}
                      </div>

                      <div className="pb-2">
                        <h3 className="text-lg font-semibold text-slate-950">
                          {step.step}
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* PROMPT */}
              <section className="mt-16">
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  Example Prompt
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                  Try this student prompt
                </h2>

                <div className="mt-7 rounded-2xl border border-indigo-100 bg-indigo-50 p-6 md:p-8">
                  <p className="text-sm leading-7 text-slate-700">
                    &quot;{tool.examplePrompt}&quot;
                  </p>
                </div>
              </section>

              {/* PROS AND CONS */}
              <section className="mt-16">
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  Pros & Cons
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                  What to know before using {tool.name}
                </h2>

                <div className="mt-7 grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 p-6">
                    <h3 className="text-lg font-semibold text-slate-950">
                      What students may like
                    </h3>

                    <ul className="mt-5 space-y-3">
                      {tool.pros.map((pro) => (
                        <li
                          key={pro}
                          className="flex gap-3 text-sm leading-6 text-slate-600"
                        >
                          <span
                            className="mt-0.5 text-green-600"
                            aria-hidden="true"
                          >
                            ✓
                          </span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-6">
                    <h3 className="text-lg font-semibold text-slate-950">
                      Things to consider
                    </h3>

                    <ul className="mt-5 space-y-3">
                      {tool.cons.map((con) => (
                        <li
                          key={con}
                          className="flex gap-3 text-sm leading-6 text-slate-600"
                        >
                          <span
                            className="mt-0.5 text-amber-600"
                            aria-hidden="true"
                          >
                            !
                          </span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mt-16">
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  Frequently Asked Questions
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                  {tool.name} FAQs
                </h2>

                <div className="mt-7 divide-y divide-slate-200 rounded-2xl border border-slate-200">
                  {tool.faqs.map((faq) => (
                    <details key={faq.question} className="group p-6">
                      <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-slate-950">
                        <span className="flex items-center justify-between gap-4">
                          {faq.question}

                          <span
                            className="text-xl font-normal text-slate-400 transition-transform group-open:rotate-45"
                            aria-hidden="true"
                          >
                            +
                          </span>
                        </span>
                      </summary>

                      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            </article>

            {/* SIDEBAR */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold text-slate-950">
                  Quick summary
                </p>

                <div className="mt-5 space-y-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Best for
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      {tool.bestFor}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Pricing
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      {tool.pricing}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Category
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      {tool.category}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Tags
                    </p>

                    <div className="mt-2 flex flex-wrap gap-2">
                      {tool.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-white px-2 py-1 text-xs text-slate-600 ring-1 ring-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  Visit Official Website ↗
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* ALTERNATIVES */}
      {relatedTools.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 py-16 md:py-20">
          <Container>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Alternatives
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                Other AI tools to consider
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Explore other tools that can support similar college workflows.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {relatedTools.map((alternative) => (
                <Link
                  key={alternative.slug}
                  href={`/tools/${alternative.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-slate-200/40"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                        {alternative.category}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold text-slate-950">
                        {alternative.name}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {alternative.shortDescription}
                      </p>
                    </div>

                    <span
                      className="text-lg text-slate-400 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="border-t border-slate-200 bg-white py-16 md:py-20">
        <Container>
          <div className="rounded-3xl bg-slate-950 px-6 py-12 text-center sm:px-10 md:py-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-300">
              AI Student Hub
            </p>

            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              Find the right AI tool for your college work
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300">
              Explore more student-focused AI tools for studying,
              presentations, research, writing, and academic productivity.
            </p>

            <Link
              href="/tools"
              className="mt-7 inline-flex rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Browse all AI tools
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}