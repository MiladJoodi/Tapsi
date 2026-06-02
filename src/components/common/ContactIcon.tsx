import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const icons = {
  email: "/assets/email.svg",
  calling: "/assets/calling.svg",
  location: "/assets/location.svg",
} as const;

export type ContactIconName = keyof typeof icons;

export function ContactIcon({
  name,
  href,
  label,
}: {
  name: ContactIconName;
  href?: string;
  label: string;
}) {
  const content = (
    <span
      className={cn(
        "contact-icon flex w-14 h-14 items-center justify-center rounded-2xl",
        "bg-[#fff6f2] border border-primary/15",
        "transition-all duration-300",
        href &&
          "group-hover/contact:border-primary/50 group-hover/contact:shadow-[0_8px_20px_rgba(255,87,34,0.18)] group-hover/contact:-translate-y-0.5"
      )}
    >
      <Image
        src={icons[name]}
        alt=""
        width={32}
        height={32}
        className="w-8 h-8 object-contain"
      />
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        aria-label={label}
        className="shrink-0 rounded-2xl focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
      >
        {content}
      </Link>
    );
  }

  return <span className="shrink-0" aria-hidden={!label}>{content}</span>;
}
