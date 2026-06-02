import { cn } from "@/lib/utils";

type FormFieldProps = {
  label: string;
  type?: "text" | "email" | "textarea";
  placeholder?: string;
  ltr?: boolean;
  rows?: number;
  required?: boolean;
};

export function FormField({
  label,
  type = "text",
  placeholder,
  ltr = false,
  rows = 6,
  required = true,
}: FormFieldProps) {
  const inputClass = cn(
    "form-input w-full rounded-[39px] bg-[#f5f5f5] border border-[#e0e0e0] py-4 px-6",
    "outline-none transition-all duration-200",
    "focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white",
    ltr && "input-ltr",
    type === "textarea" && "!rounded-2xl min-h-[140px]"
  );

  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      {type === "textarea" ? (
        <textarea
          placeholder={placeholder ?? label}
          rows={rows}
          className={cn(inputClass, "rounded-2xl")}
          required={required}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder ?? label}
          className={inputClass}
          required={required}
          {...(ltr ? { dir: "ltr" } : {})}
        />
      )}
    </label>
  );
}
