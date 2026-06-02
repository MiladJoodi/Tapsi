"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MAIN_NAV } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="bg-[var(--color-navbar)]/95 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-black/5">
      <nav
        className={cn(
          "container mx-auto max-w-[1140px] flex justify-between items-center flex-wrap px-8 py-4",
          expanded && "nav-expanded"
        )}
      >
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/12570cbc.svg"
            alt="لوگوی تپسی"
            width={100}
            height={100}
            priority
          />
        </Link>

        <button
          type="button"
          className="md:hidden bg-white p-2 cursor-pointer"
          aria-label={expanded ? "بستن منو" : "باز کردن منو"}
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          <span
            className={cn(
              "block w-[25px] h-[3px] bg-black my-1 rounded transition-all",
              expanded && "rotate-[-45deg] translate-y-[6px] translate-x-[-1px]"
            )}
          />
          <span
            className={cn(
              "block w-[25px] h-[3px] bg-black my-1 rounded transition-all",
              expanded && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block w-[25px] h-[3px] bg-black my-1 rounded transition-all",
              expanded && "rotate-45 translate-y-[-6px] translate-x-[-1px]"
            )}
          />
        </button>

        <ul
          className={cn(
            "w-full md:w-auto flex flex-col md:flex-row md:items-center text-[1.4rem] md:text-[1.6rem] overflow-hidden transition-all duration-400",
            expanded
              ? "max-h-[100vh] opacity-100 py-4"
              : "max-h-0 opacity-0 md:max-h-full md:opacity-100 md:py-0"
          )}
        >
          {MAIN_NAV.map((item) =>
            item.cta ? (
              <li key={item.label} className="md:mr-6 border-0">
                <Link
                  href={item.href}
                  className="btn-primary block text-center py-4 px-6 rounded-lg text-white bg-primary text-[1.4rem]"
                >
                  {item.label}
                </Link>
              </li>
            ) : (
              <li
                key={item.label}
                className="mb-4 md:mb-0 md:mr-6 border-b md:border-0 border-[#ccc]"
              >
                <Link
                  href={item.href}
                  className="block py-2 text-[#444] no-underline hover:text-primary hover:bg-orange-100 rounded px-2 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}
