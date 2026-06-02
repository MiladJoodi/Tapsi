import type { PricingPlan } from "@/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function PricingCard({ plan }: { plan: PricingPlan }) {
  const isPrimary = plan.variant === "primary";

  return (
    <div
      className={cn(
        "max-w-[450px] text-[1.8rem] transition-all duration-200 ease-out",
        plan.popular && "scale-105 lg:scale-110 hover:scale-[1.15]",
        !plan.popular && "hover:scale-105"
      )}
    >
      <div className="rounded-[20px] overflow-hidden shadow-[0_0_20px_10px_#efefef]">
        <header
          className={cn(
            "p-8 text-white",
            isPrimary ? "bg-primary-light" : "bg-secondary-dark"
          )}
        >
          <div className="flex justify-between mb-6">
            <span className="font-bold">{plan.name}</span>
            <Badge variant={isPrimary ? "primary" : "secondary"}>
              {plan.discount}
            </Badge>
          </div>
          <span className="block text-[3rem] font-bold">
            {formatPrice(plan.price)}
          </span>
          <span className="block text-[1.4rem]">{plan.billingCycle}</span>
          <span className="block mt-4">{plan.description}</span>
        </header>
        <div className="p-8 bg-white">
          <ul className="list-tick mb-8">
            {plan.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <Button
            variant={isPrimary ? "primary" : "secondary"}
            block
            href="/contact"
          >
            ثبت سفارش
          </Button>
        </div>
      </div>
    </div>
  );
}
