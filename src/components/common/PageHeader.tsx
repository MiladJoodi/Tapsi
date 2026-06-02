type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="container mx-auto max-w-[1140px] px-8 py-16 text-center">
      <h1 className="mb-4">{title}</h1>
      {subtitle && (
        <p className="text-[1.6rem] text-[#666] max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
