"use client";
import { getHasUsedAppBefore } from "lib/redux/local-storage";
import { ResumeDropzone } from "components/ResumeDropzone";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ImportResume() {
  const [hasUsedAppBefore, setHasUsedAppBefore] = useState(false);
  const [hasAddedResume, setHasAddedResume] = useState(false);
  const onFileUrlChange = (fileUrl: string) => {
    setHasAddedResume(Boolean(fileUrl));
  };

  useEffect(() => {
    setHasUsedAppBefore(getHasUsedAppBefore());
  }, []);

  return (
    <main className="min-h-[calc(100vh-var(--top-nav-bar-height))] bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-sm px-10 py-10 text-center shadow-xl shadow-indigo-100/20">
        {!hasUsedAppBefore ? (
          <>
            <h1 className="text-xl font-bold text-gray-900">
              Import data from an existing resume
            </h1>
            <p className="mt-2 text-sm text-gray-500">Upload your PDF and we&apos;ll parse it automatically</p>
            <ResumeDropzone
              onFileUrlChange={onFileUrlChange}
              className="mt-5"
            />
            {!hasAddedResume && (
              <>
                <OrDivider />
                <SectionWithHeadingAndCreateButton
                  heading="Don't have a resume yet?"
                  buttonText="Create from scratch"
                />
              </>
            )}
          </>
        ) : (
          <>
            {!hasAddedResume && (
              <>
                <SectionWithHeadingAndCreateButton
                  heading="You have data saved in browser from prior session"
                  buttonText="Continue where I left off"
                />
                <OrDivider />
              </>
            )}
            <h1 className="font-semibold text-gray-900">
              Override data with a new resume
            </h1>
            <ResumeDropzone
              onFileUrlChange={onFileUrlChange}
              className="mt-5"
            />
          </>
        )}
      </div>
    </main>
  );
}

const OrDivider = () => (
  <div className="mx-[-2.5rem] flex items-center pb-6 pt-8" aria-hidden="true">
    <div className="flex-grow border-t border-gray-200" />
    <span className="mx-4 mt-[-2px] flex-shrink text-sm font-medium text-gray-400 uppercase tracking-wider">or</span>
    <div className="flex-grow border-t border-gray-200" />
  </div>
);

const SectionWithHeadingAndCreateButton = ({
  heading,
  buttonText,
}: {
  heading: string;
  buttonText: string;
}) => {
  return (
    <>
      <p className="font-semibold text-gray-900">{heading}</p>
      <div className="mt-5">
        <Link
          href="/resume-builder"
          className="outline-theme-blue rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-8 pb-2.5 pt-2 text-base font-semibold text-white shadow-lg shadow-indigo-200/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
        >
          {buttonText}
        </Link>
      </div>
    </>
  );
};
