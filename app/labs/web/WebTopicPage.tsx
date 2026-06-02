import Link from "next/link";
import type { ReactNode } from "react";

type Section = {
  title: string;
  points: string[];
};

type CodeBlock = {
  title: string;
  code: string;
  description: string;
};

type WebTopicPageProps = {
  step: string;
  title: string;
  description: string;
  summary: string[];
  visual?: ReactNode;
  sections: Section[];
  codeBlocks?: CodeBlock[];
  previousHref?: string;
  previousLabel?: string;
  nextHref?: string;
  nextLabel?: string;
};

export default function WebTopicPage({
  step,
  title,
  description,
  summary,
  visual,
  sections,
  codeBlocks = [],
  previousHref,
  previousLabel,
  nextHref,
  nextLabel,
}: WebTopicPageProps) {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-950">
      <article className="mx-auto max-w-5xl">
        <div className="flex flex-wrap gap-3 text-sm font-medium">
          <Link href="/labs/web" className="text-teal-700">
            go to Web
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/labs" className="text-teal-700">
            go to Labs
          </Link>
        </div>

        <p className="mt-6 text-sm font-semibold text-teal-700">STEP {step}</p>
        <h1 className="mt-2 text-4xl font-bold">{title}</h1>
        <p className="mt-4 max-w-3xl leading-8 text-slate-700">{description}</p>

        <section className="mt-8 grid gap-3 md:grid-cols-3">
          {summary.map((item, index) => (
            <div key={item} className="rounded-lg border border-teal-100 bg-white p-4">
              <p className="text-sm font-semibold text-teal-700">POINT {index + 1}</p>
              <p className="mt-2 leading-7 text-slate-800">{item}</p>
            </div>
          ))}
        </section>

        {visual ? (
          <section className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold">한눈에 보기</h2>
            <div className="mt-4">{visual}</div>
          </section>
        ) : null}

        <section className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
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

        {codeBlocks.length > 0 ? (
          <section className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold">코드 예시</h2>
            <div className="mt-4 grid gap-4">
              {codeBlocks.map((block) => (
                <section key={block.title} className="rounded-lg bg-slate-50 p-4">
                  <h3 className="font-semibold text-slate-950">{block.title}</h3>
                  <pre className="mt-3 overflow-x-auto rounded bg-slate-950 p-4 text-sm text-slate-50">
                    <code>{block.code}</code>
                  </pre>
                  <p className="mt-3 leading-7 text-slate-700">{block.description}</p>
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
