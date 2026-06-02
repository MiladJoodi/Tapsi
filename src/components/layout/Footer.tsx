import Image from "next/image";
import Link from "next/link";
import { AUTHOR_LINKS, FOOTER_LINKS } from "@/constants/navigation";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="mb-6 md:mb-0 md:ml-6">
      <h6 className="text-[1.8rem] font-bold mb-4 text-white">{title}</h6>
      {links.map((link) => (
        <Link
          key={link.href + link.label}
          href={link.href}
          className="block text-[1.4rem] text-white no-underline mb-2 hover:text-primary-light transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export function Footer() {
  const trustBadges = [
    { src: "/assets/logo.png", alt: "نماد اعتماد" },
    { src: "/assets/logo (1).png", alt: "نماد ساماندهی" },
    { src: "/assets/etehadiye.png", alt: "اتحادیه" },
  ];

  return (
    <footer className="bg-black text-white min-h-[200px] flex items-center mt-20">
      <div className="container mx-auto max-w-[1140px] px-8 py-12 flex flex-col md:flex-row md:flex-wrap gap-8">
        <FooterColumn title="تپسی" links={FOOTER_LINKS.company} />
        <FooterColumn title="مسافران" links={FOOTER_LINKS.passengers} />
        <FooterColumn title="رانندگان" links={FOOTER_LINKS.drivers} />
        <FooterColumn title="کسب و کارها" links={FOOTER_LINKS.business} />
        <div className="flex flex-row justify-between gap-2 md:ml-auto">
          {trustBadges.map((badge) => (
            <div
              key={badge.src}
              className="bg-white rounded-[10px] p-2 max-w-[86px]"
            >
              <Image
                src={badge.src}
                alt={badge.alt}
                width={86}
                height={86}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
        <div className="w-full text-center text-[1.2rem] text-gray-400 pt-6 border-t border-gray-800 space-y-3">
          <p>
            © {new Date().getFullYear()} تپسی ·{" "}
            <Link href="/privacy" className="hover:text-primary-light">
              حریم خصوصی
            </Link>
            {" · "}
            <Link href="/terms" className="hover:text-primary-light">
              قوانین
            </Link>
          </p>
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span>توسعه:</span>
            <a
              href={AUTHOR_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-light transition-colors no-underline"
            >
              {AUTHOR_LINKS.name}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={AUTHOR_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-light transition-colors no-underline"
            >
              GitHub
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={AUTHOR_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-light transition-colors no-underline"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
