import type { Metadata } from "next";
import ToolCard from "@/components/tools/ToolCard";
import Container from "@/components/common/Container";
import { aiTools, categories } from "@/data/tools";

export const metadata: Metadata = {
  title: "AI Tools for College Students",
  description:
    "Explore practical AI tools for college students across studying, presentations, research, writing, and academic productivity.",
};

export default function ToolsPage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-slate-50">
        <Container>
          <div className="py-16 md:py-20">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              AI tools directory
            </p>

            <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              AI Tools for College Students
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              Discover AI tools for studying, presentations, research, writing,
              and everyday college work.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
                {aiTools.length} tools
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
                {categories.length} categories
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
                Student-focused
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aiTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}