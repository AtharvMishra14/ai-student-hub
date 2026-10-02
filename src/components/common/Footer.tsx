import Link from "next/link";
import Container from "./Container";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { name: "AI Tools", href: "/tools" },
      { name: "Notes & Study", href: "/categories/notes-study" },
      { name: "Presentations", href: "/categories/presentations" },
      { name: "Research & Writing", href: "/categories/research" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Student Guides", href: "/blog" },
      { name: "About", href: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-slate-950"
            >
              AI Student Hub
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
              Practical AI tools, workflows, and guides designed around real
              college student needs.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h2 className="text-sm font-semibold text-slate-950">
                {section.title}
              </h2>

              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 transition hover:text-indigo-600"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} AI Student Hub. All rights reserved.
          </p>
          <p>Built for college students.</p>
        </div>
      </Container>
    </footer>
  );
}