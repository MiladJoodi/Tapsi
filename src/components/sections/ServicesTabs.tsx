"use client";

import { useState } from "react";
import Image from "next/image";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServicesTabs() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((s) => s.id === activeId) ?? services[0];

  return (
    <section className="container mx-auto max-w-[1140px] px-8 py-16 block">
      <h2 className="text-[2rem] lg:text-[3.5rem] font-bold mb-8 mt-16 lg:mt-24">
        سرویس‌های تپسی
      </h2>
      <div className="flex flex-row justify-between overflow-x-auto pb-4 gap-2">
        {services.map((service) => (
          <button
            key={service.id}
            type="button"
            onClick={() => setActiveId(service.id)}
            className={cn(
              "flex flex-col items-center max-w-[100px] shrink-0 cursor-pointer transition-opacity border-0 bg-transparent",
              activeId === service.id ? "opacity-100" : "opacity-50 hover:opacity-100"
            )}
          >
            <Image
              src={service.icon}
              alt={service.name}
              width={85}
              height={85}
              className="max-w-[85px]"
            />
            <p className="mt-4 text-[1.2rem] lg:text-[1.4rem] text-[#444]">
              {service.name}
            </p>
          </button>
        ))}
      </div>
      <div className="mt-8 flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="hidden lg:flex lg:w-1/2 justify-center">
          <Image
            src={active.icon}
            alt={active.name}
            width={300}
            height={300}
            className="w-[70%] h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-[2.2rem] my-6">{active.name}</h3>
          <p className="text-justify mb-8">{active.description}</p>
        </div>
      </div>
    </section>
  );
}
