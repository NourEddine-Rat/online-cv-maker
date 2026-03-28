import Link from "next/link";
import { FlexboxSpacer } from "components/FlexboxSpacer";
import { AutoTypingResume } from "home/AutoTypingResume";

export const Hero = () => {
  return (
    <section className="lg:flex lg:h-[825px] lg:justify-center">
      <FlexboxSpacer maxWidth={75} minWidth={0} className="hidden lg:block" />
      <div className="mx-auto max-w-xl pt-8 text-center lg:mx-0 lg:grow lg:pt-32 lg:text-left">
        <div className="mb-6 inline-flex items-center justify-center rounded-md bg-zinc-100 px-3 py-1.5 text-xs font-bold tracking-widest uppercase text-zinc-700 border border-zinc-200">
          ✨ Free & Powerful CV Builder
        </div>
        <h1 className="pb-4 text-5xl font-extrabold tracking-tighter text-zinc-950 lg:text-[4rem] leading-none mb-4">
          Build your perfect
          <br />
          CV in minutes
        </h1>
        <p className="mt-3 text-lg font-medium text-zinc-500 lg:mt-5 lg:text-xl max-w-lg">
          Create a stunning, professional resume that stands out — completely free, no sign-up needed
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:mt-12">
          <Link href="/resume-import" className="btn-primary mt-2 text-center">
            Start Building <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/resume-parser"
            className="mt-2 rounded-lg border border-zinc-200 bg-white px-6 py-2.5 font-semibold text-zinc-800 shadow-sm transition-colors duration-200 hover:bg-zinc-50"
          >
            Test Your Resume
          </Link>
        </div>
        <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-400">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
          No sign up required · Your data stays private
        </div>
      </div>
      <FlexboxSpacer maxWidth={100} minWidth={50} className="hidden lg:block" />
      <div className="mt-6 flex justify-center lg:mt-4 lg:block lg:grow">
        <AutoTypingResume />
      </div>
    </section>
  );
};
