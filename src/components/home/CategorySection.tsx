import Link from "next/link";
import Container from "../common/Container";

const categories = [
  {
    title: "Notes & Study",
    description:
      "Summarize lectures, understand difficult topics, create study materials, and revise faster.",
    href: "/categories/notes-study",
    number: "01",
  },
  {
    title: "Presentations",
    description:
      "Create better presentations, turn ideas into slides, and prepare for college presentations.",
    href: "/categories/presentations",
    number: "02",
  },
  {
    title: "Research & Writing",
    description:
      "Find sources, explore research questions, improve writing, and work with academic information.",
    href: "/categories/research",
    number: "03",
  },
];

export default function CategorySection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Explore by task
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            What are you trying to do?
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            Start with the type of college work you need help with and discover
            tools evaluated for that workflow.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-200/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="text-sm font-semibold text-slate-400">
                {category.number}
              </span>

              <h3 className="mt-5 text-xl font-semibold text-slate-950">
                {category.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {category.description}
              </p>

              <span className="mt-6 inline-flex items-center text-sm font-semibold text-indigo-600">
                Explore category
                <span
                  className="ml-1 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}