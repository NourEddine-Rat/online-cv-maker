"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoSrc from "public/logo.svg";
import { cx } from "lib/cx";

export const TopNavBar = () => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  return (
    <header
      aria-label="Site Header"
      className={cx(
        "flex h-[var(--top-nav-bar-height)] items-center border-b border-zinc-200 px-4 lg:px-12 bg-white sticky top-0 z-50",
        isHomePage && "bg-white"
      )}
    >
      <div className="flex h-10 w-full items-center justify-between">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <span className="sr-only">Online CV Maker</span>
          <Image
            src={logoSrc}
            alt="Online CV Maker Logo"
            className="h-8 w-full"
            priority
          />
        </Link>
        <nav
          aria-label="Site Nav Bar"
          className="flex items-center gap-1 text-sm font-medium"
        >
          {[
            ["/resume-builder", "Builder"],
            ["/resume-parser", "Parser"],
          ].map(([href, text]) => (
            <Link
              key={text}
              className={cx(
                "rounded-md px-4 py-2 text-zinc-600 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-900 focus-visible:bg-zinc-100",
                pathName === href && "bg-zinc-100 text-zinc-900 font-semibold"
              )}
              href={href}
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
