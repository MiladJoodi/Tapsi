import { pricingPlans } from "@/data/pricing";
import { PricingCard } from "@/components/ui/PricingCard";

export function PricingSection() {
  return (
    <section className="container mx-auto max-w-[1140px] px-8 py-16">
      <h2 className="text-center mb-12">تعرفه‌های ویژه مشتریان</h2>
      <div className="grid gap-16 lg:gap-12 mt-12 justify-center grid-cols-[repeat(auto-fit,minmax(250px,320px))]">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
}
