import Link from "next/link";
import type { ReactNode } from "react";

type Section = {
  title: string;
  points: string[];
};

type CommandGroup = {
  title: string;
  items: [string, string][];
};

type NetworkTopicPageProps = {
  step: string;
  title: string;
  description: string;
  summary?: string[];
  visual?: ReactNode;
  sections: Section[];
  commandGroups?: CommandGroup[];
  nextHref?: string;
  nextLabel?: string;
  previousHref?: string;
  previousLabel?: string;
};

export default function NetworkTopicPage({
  step,
  title,
  description,
  summary = [],
  visual,
  sections,
  commandGroups = [],
  nextHref,
  nextLabel,
  previousHref,
  previousLabel,
}: NetworkTopicPageProps) {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-950">
      <article className="mx-auto max-w-5xl">
        <div className="flex flex-wrap gap-3 text-sm font-medium">
          <Link href="/labs/network" className="text-teal-700">
            go to Network
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/labs" className="text-teal-700">
            go to Labs
          </Link>
        </div>

        <p className="mt-6 text-sm font-semibold text-teal-700">STEP {step}</p>
        <h1 className="mt-2 text-4xl font-bold">{title}</h1>
        <p className="mt-4 max-w-3xl leading-8 text-slate-700">{description}</p>

        {summary.length > 0 ? (
          <section className="mt-8 grid gap-3 md:grid-cols-3">
            {summary.map((item, index) => (
              <div key={item} className="rounded-lg border border-teal-100 bg-white p-4">
                <p className="text-sm font-semibold text-teal-700">POINT {index + 1}</p>
                <p className="mt-2 leading-7 text-slate-800">{item}</p>
              </div>
            ))}
          </section>
        ) : null}

        {visual ? (
          <section className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold">한눈에 보기</h2>
            <div className="mt-4">{visual}</div>
          </section>
        ) : null}

        <section className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">개념 정리</h2>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {sections.map((section, index) => (
              <section
                key={section.title}
                className="rounded-lg border border-slate-200 bg-slate-50/50 p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="rounded bg-slate-950 px-2 py-1 text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold text-slate-950">{section.title}</h3>
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-700">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        {commandGroups.length > 0 ? (
          <section className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold">확인 명령어</h2>
            <div className="mt-4 space-y-5">
              {commandGroups.map((group) => (
                <section key={group.title}>
                  <h3 className="font-semibold text-slate-950">{group.title}</h3>
                  <div className="mt-3 grid gap-3">
                    {group.items.map(([command, detail]) => (
                      <div
                        key={command}
                        className="grid gap-2 rounded-lg bg-slate-50 p-3 sm:grid-cols-[250px_1fr]"
                      >
                        <code className="rounded bg-slate-950 px-3 py-2 font-mono text-sm text-slate-50">
                          {command}
                        </code>
                        <p className="leading-7 text-slate-700">{detail}</p>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </section>
        ) : null}

        <nav className="mt-6 grid gap-3 sm:grid-cols-2">
          {previousHref ? (
            <Link
              href={previousHref}
              className="rounded-lg border border-slate-200 bg-white p-4 font-semibold shadow-sm hover:border-teal-500"
            >
              <span className="block text-sm text-slate-500">Previous</span>
              {previousLabel}
            </Link>
          ) : (
            <div />
          )}
          {nextHref ? (
            <Link
              href={nextHref}
              className="rounded-lg border border-slate-200 bg-white p-4 font-semibold shadow-sm hover:border-teal-500 sm:text-right"
            >
              <span className="block text-sm text-teal-700">Next</span>
              {nextLabel}
            </Link>
          ) : null}
        </nav>
      </article>
    </main>
  );
}
