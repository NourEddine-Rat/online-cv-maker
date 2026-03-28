import Image from "next/image";
import featureFreeSrc from "public/assets/feature-free.svg";
import featureUSSrc from "public/assets/feature-us.svg";
import featurePrivacySrc from "public/assets/feature-privacy.svg";
import featureOpenSourceSrc from "public/assets/feature-open-source.svg";

const FEATURES = [
  {
    src: featureFreeSrc,
    title: "Free Forever",
    text: "We believe everyone deserves access to a modern, professional resume design — completely free, no hidden fees",
  },
  {
    src: featureUSSrc,
    title: "ATS Optimized",
    text: "Built with best practices that work seamlessly with top Applicant Tracking Systems like Greenhouse, Lever, and more",
  },
  {
    src: featurePrivacySrc,
    title: "100% Private",
    text: "Your data never leaves your browser. Everything is stored locally on your device — only you have access",
  },
  {
    src: featureOpenSourceSrc,
    title: "Smart Formatting",
    text: "Automatic formatting ensures consistent fonts, bullet points, and spacing so your resume always looks polished",
  },
];

export const Features = () => {
  return (
    <section className="py-16 lg:py-28 relative">
      <div className="mx-auto lg:max-w-4xl relative z-10">
        <h2 className="text-center text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 mb-6">
          Why Online CV Maker?
        </h2>
        <p className="text-center text-zinc-500 font-medium text-lg max-w-2xl mx-auto mb-14">
          Everything you need to create a standout resume, without the hassle
        </p>
        <dl className="grid grid-cols-1 justify-items-center gap-y-8 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
          {FEATURES.map(({ src, title, text }) => (
            <div className="group rounded-xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1" key={title}>
              <div className="relative w-full pl-16">
                <dt className="text-xl font-bold text-zinc-900">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-50 border border-zinc-200 shadow-sm transition-transform duration-200 group-hover:-translate-y-1">
                    <Image
                      src={src}
                      className="h-6 w-6 opacity-70 group-hover:opacity-100 transition-opacity"
                      alt="Feature icon"
                    />
                  </div>
                  {title}
                </dt>
                <dd className="mt-2 text-gray-500 leading-relaxed">{text}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
