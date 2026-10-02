import Link from "next/link";
import type { AITool } from "@/data/tools";

interface ToolCardProps {
  tool: AITool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-200/50">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-lg font-bold text-indigo-600">
          {tool.name.charAt(0)}
        </div>

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

      <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-indigo-600">
        {tool.category}
      </p>

      <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
        {tool.name}
      </h2>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {tool.shortDescription}
      </p>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Best for
        </p>

        <p className="mt-1 text-sm text-slate-700">{tool.bestFor}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {tool.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <Link
          href={`/tools/${tool.slug}`}
          className="inline-flex items-center text-sm font-semibold text-indigo-600 transition-colors group-hover:text-indigo-700"
        >
          View tool
          <span
            className="ml-1 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}