import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="block rounded-[20px] overflow-hidden shadow-[0_0_20px_10px_#efefef] bg-white p-6 no-underline text-inherit hover:scale-[1.02] transition-transform"
    >
      <Image
        src={service.icon}
        alt={service.name}
        width={85}
        height={85}
        className="mx-auto mb-4"
      />
      <h3 className="text-center text-[1.8rem]">{service.name}</h3>
      <p className="text-center text-[1.4rem] text-[#666]">{service.shortDescription}</p>
    </Link>
  );
}
