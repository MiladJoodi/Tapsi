import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Badge({ children, variant = "secondary", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block py-1 px-4 rounded-full border-2 border-primary text-primary uppercase text-[1.2rem] lg:text-[1.4rem]",
        variant === "primary" && "bg-primary text-white",
        variant === "secondary" && "bg-white",
        className
      )}
    >
      {children}
    </span>
  );
}
