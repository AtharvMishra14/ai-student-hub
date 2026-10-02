import Container from "../common/Container";

const steps = [
  {
    number: "01",
    title: "Choose your task",
    description:
      "Start with what you actually need to accomplish, from studying to creating presentations or researching a topic.",
  },
  {
    number: "02",
    title: "Compare your options",
    description:
      "Explore tools through student-focused use cases, features, pricing information, and practical evaluations.",
  },
  {
    number: "03",
    title: "Use the workflow",
    description:
      "Follow practical workflows and example prompts to get more useful results from the tool you choose.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-20 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            How it works
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Choose. Compare. Use.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            AI Student Hub is built around the way students actually approach
            college tasks.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="text-sm font-bold text-indigo-600">
                {step.number}
              </span>

              <h3 className="mt-4 text-xl font-semibold text-slate-950">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}