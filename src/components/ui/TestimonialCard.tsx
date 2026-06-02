import type { Testimonial } from "@/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <blockquote className="rounded-[20px] p-8 bg-secondary-light shadow-[0_0_20px_10px_#efefef]">
      <div className="text-primary mb-4" aria-label={`امتیاز ${testimonial.rating} از ۵`}>
        {"★".repeat(testimonial.rating)}
        {"☆".repeat(5 - testimonial.rating)}
      </div>
      <p className="text-justify mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
      <footer>
        <cite className="not-italic font-bold block">{testimonial.name}</cite>
        <span className="text-[1.3rem] text-[#666]">
          {testimonial.role} — {testimonial.company}
        </span>
      </footer>
    </blockquote>
  );
}
