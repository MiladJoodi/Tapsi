import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FeatureBlockProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  buttonText: string;
  buttonHref: string;
  reverse?: boolean;
};

export function FeatureBlock({
  title,
  description,
  image,
  imageAlt,
  buttonText,
  buttonHref,
  reverse = false,
}: FeatureBlockProps) {
  return (
    <section
      className={cn(
        "container mx-auto max-w-[1140px] px-8 py-16 grid gap-10 lg:grid-cols-2 lg:gap-24",
        reverse && "charge-reverse"
      )}
    >
      <div
        className={cn(
          "flex justify-center mb-8 lg:mb-0",
          reverse ? "lg:order-1" : "lg:order-2"
        )}
      >
        <Image
          src={image}
          alt={imageAlt}
          width={600}
          height={400}
          className="w-full lg:w-[70%] h-auto"
        />
      </div>
      <div
        className={cn(
          "flex flex-col justify-center",
          reverse ? "lg:order-2" : "lg:order-1"
        )}
      >
        <h2 className="feature-title">{title}</h2>
        <p className="text-justify mb-8">{description}</p>
        <Button href={buttonHref}>{buttonText}</Button>
      </div>
    </section>
  );
}
