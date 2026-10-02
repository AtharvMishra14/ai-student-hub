import Link from "next/link";

const categories = [
  {
    title: "Notes & Study",
    description:
      "Summarize lectures, understand difficult topics, create study materials, and revise faster.",
    href: "/categories/notes-study",
  },
  {
    title: "Presentations",
    description:
      "Create better presentations, turn ideas into slides, and prepare for college presentations.",
    href: "/categories/presentations",
  },
  {
    title: "Research & Writing",
    description:
      "Find sources, explore research questions, improve writing, and work with academic information.",
    href: "/categories/research",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight"
          >
            AI Student Hub
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/categories/notes-study"
              className="text-sm text-slate-600 transition hover:text-slate-900"
            >
              Categories
            </Link>

            <Link
              href="/tools"
              className="text-sm text-slate-600 transition hover:text-slate-900"
            >
              AI Tools
            </Link>

            <Link
              href="/blog"
              className="text-sm text-slate-600 transition hover:text-slate-900"
            >
              Guides
            </Link>

            <Link
              href="/about"
              className="text-sm text-slate-600 transition hover:text-slate-900"
            >
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-violet-50" />

        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
          <div className="mb-6 inline-flex rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm">
            AI tools for college students
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Find the Right AI Tool for Your College Work
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Discover practical AI tools for studying, presentations, research,
            and everyday college work — with student-focused evaluations and
            clear pricing information.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/tools"
              className="rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
            >
              Explore AI Tools
            </Link>

            <Link
              href="/blog"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Browse Student Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Explore by task
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            What are you trying to do?
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Start with the type of college work you need help with.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-slate-950">
                {category.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {category.description}
              </p>

              <span className="mt-6 inline-block text-sm font-semibold text-indigo-600">
                Explore category →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} AI Student Hub
          </p>

          <p className="text-sm text-slate-500">
            Practical AI tools for college students.
          </p>
        </div>
      </footer>
    </main>
  );
}