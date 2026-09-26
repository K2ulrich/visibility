import Reveal from "./Reveal";
import { process } from "@/lib/data";

export default function ProcessSection() {
  return (
    <section className="section-y section-divider">
      <div className="container-page">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-paper mb-3">Comment nous travaillons</h2>
          <p className="text-muted max-w-xl mb-16">
            Un déroulement clair, du premier échange à l&apos;accompagnement après livraison.
          </p>
        </Reveal>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-14">
          {process.map((step, i) => (
            <Reveal key={step.number} as="li" delay={i * 0.06} className="relative pt-2">
              <span className="ghost-number absolute -top-8 left-0 text-6xl font-semibold select-none" aria-hidden="true">
                {step.number}
              </span>
              <div className="relative border-t-2 border-gold pt-4">
                <h3 className="font-display text-lg font-semibold text-paper mb-2">{step.title}</h3>
                <p className="text-sm text-muted">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
