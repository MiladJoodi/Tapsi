import Image from "next/image";
import Link from "next/link";
import { travelDestinations } from "@/data/destinations";
import { Badge } from "@/components/ui/Badge";

export function TravelSlider() {
  return (
    <section className="container mx-auto max-w-[1140px] px-8 py-16">
      <h2 className="mb-8">مقاصد پیشنهادی</h2>
      <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
        {travelDestinations.map((dest) => (
          <article
            key={dest.id}
            className="flex-[0_0_280px] flex flex-col items-center"
          >
            <div className="relative w-full">
              <Image
                src={dest.image}
                alt={dest.title}
                width={280}
                height={200}
                className="w-full h-auto object-cover rounded-[32px]"
              />
              <div className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] rounded-[32px] p-4 px-6 -translate-y-[60px] w-[85%] mx-auto">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">{dest.badge}</Badge>
                  <p className="text-[1.2rem] m-0">{dest.subtitle}</p>
                </div>
                <p className="text-[1.4rem] font-bold mt-4">{dest.title}</p>
                <div className="flex justify-between text-[#cacaca] mt-4 text-[1.2rem]">
                  <span>♥ {dest.likes}</span>
                  <span>👁 {dest.views}</span>
                </div>
                <Link
                  href="/portfolio"
                  className="text-primary text-[1.2rem] mt-4 inline-block no-underline"
                >
                  مشاهده جزئیات
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
