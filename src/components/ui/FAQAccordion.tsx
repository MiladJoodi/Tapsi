"use client";

import { useState } from "react";
import type { FAQItem } from "@/types";
import { cn } from "@/lib/utils";

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="faq-accordion rounded-2xl border border-[#ececec] shadow-[0_12px_40px_rgba(0,0,0,0.06)] bg-white overflow-hidden">
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={cn(
              "border-b border-[#ececec] last:border-b-0",
              isOpen && "bg-[#fffaf8]"
            )}
          >
            <button
              type="button"
              className="faq-accordion__trigger w-full flex flex-row items-center gap-4 p-5 md:p-6 cursor-pointer bg-transparent border-0"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
            >
              <span className="faq-accordion__question flex-1 text-right text-[1.6rem] md:text-[1.8rem] font-bold text-[#2a2a2a] leading-snug">
                <span className="text-primary/80 text-[1.2rem] font-normal ml-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.question}
              </span>
              <span
                className={cn(
                  "faq-accordion__toggle shrink-0 w-10 h-10 rounded-xl flex items-center justify-center",
                  "bg-secondary-light text-primary text-[2.4rem] leading-none font-light",
                  "transition-all duration-300",
                  isOpen && "bg-primary text-white"
                )}
                aria-hidden="true"
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              className={cn(
                "faq-accordion__panel overflow-hidden transition-all duration-400 ease-out",
                isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <p className="text-right text-justify leading-relaxed text-[1.4rem] md:text-[1.6rem] text-[#555] px-5 md:px-6 pb-6 pt-0 m-0 border-t border-[#f0f0f0]">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
