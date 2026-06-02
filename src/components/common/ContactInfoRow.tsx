import { ContactIcon, type ContactIconName } from "@/components/common/ContactIcon";
import { cn } from "@/lib/utils";

export function ContactInfoRow({
  icon,
  label,
  href,
}: {
  icon: ContactIconName;
  label: string;
  href?: string;
}) {
  return (
    <div
      className={cn(
        "contact-info-row group/contact flex flex-row items-center gap-5 w-full"
      )}
    >
      <ContactIcon name={icon} href={href} label={label} />
      {href ? (
        <a
          href={href}
          className="flex-1 text-[1.4rem] lg:text-[1.6rem] text-[#333] no-underline group-hover/contact:text-primary transition-colors"
        >
          {label}
        </a>
      ) : (
        <span className="flex-1 text-[1.4rem] lg:text-[1.6rem] text-[#333]">
          {label}
        </span>
      )}
    </div>
  );
}
