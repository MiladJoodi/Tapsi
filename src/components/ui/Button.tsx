import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";
type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  block?: boolean;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  block = false,
  href,
  type = "button",
  className,
  onClick,
}: ButtonProps) {
  const base = cn(
    "cursor-pointer outline-none border-0 py-5 px-6 rounded-lg my-2 text-center whitespace-nowrap text-[1.4rem] lg:text-[1.6rem] transition-transform hover:scale-[1.02]",
    variant === "primary" && "bg-primary text-white",
    variant === "secondary" && "bg-secondary-dark text-white",
    block && "w-full block lg:text-[2rem]",
    className
  );

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={base} onClick={onClick}>
      {children}
    </button>
  );
}
