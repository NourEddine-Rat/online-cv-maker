const STEPS = [
  { title: "Upload or start fresh", text: "Import your existing resume PDF or create one from scratch", icon: "📄" },
  { title: "Customize & preview", text: "Edit content and see real-time preview of your professional CV", icon: "✏️" },
  { title: "Download & apply", text: "Get your polished resume as a PDF and apply with confidence", icon: "🚀" },
];

export const Steps = () => {
  return (
    <section className="mx-auto mt-8 rounded-xl bg-white border border-zinc-200 shadow-sm px-8 pb-12 pt-10 lg:mt-2">
      <h2 className="text-center text-4xl font-extrabold tracking-tight text-zinc-950">
        3 Simple Steps to Your Dream CV
      </h2>
      <div className="mt-12 flex justify-center">
        <dl className="flex flex-col gap-y-10 lg:flex-row lg:justify-center lg:gap-x-14">
          {STEPS.map(({ title, text, icon }, idx) => (
            <div className="relative self-start pl-16 max-w-xs group" key={idx}>
              <dt className="text-lg font-bold text-zinc-900">
                <div className="absolute left-0 top-0 flex h-12 w-12 select-none items-center justify-center rounded-lg bg-zinc-100 border border-zinc-200 shadow-sm transition-transform duration-200 group-hover:-translate-y-1">
                  <span className="text-xl">{icon}</span>
                </div>
                {title}
              </dt>
              <dd className="mt-1.5 text-gray-500 text-sm leading-relaxed">{text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
