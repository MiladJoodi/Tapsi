import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const icons = {
  twitter: "/assets/twitter.svg",
  facebook: "/assets/facebook.svg",
  instagram: "/assets/instagram.svg",
} as const;

export type SocialIconName = keyof typeof icons;

export function SocialIcon({
  name,
  href = "#",
  label,
  className,
}: {
  name: SocialIconName;
  href?: string;
  label?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label ?? name}
      className={cn(
        "social-chip w-14 h-14 flex justify-center items-center rounded-2xl",
        "bg-white border border-[#eee] shadow-sm",
        "transition-all duration-300",
        "hover:border-primary/40 hover:shadow-[0_10px_28px_rgba(255,87,34,0.2)] hover:-translate-y-1",
        "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
        className
      )}
    >
      <Image
        src={icons[name]}
        alt=""
        width={28}
        height={28}
        className="w-7 h-7 object-contain"
      />
    </Link>
  );
}
