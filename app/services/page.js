import PricingCard from "@/components/PricingCard";
import Reveal from "@/components/Reveal";
import { pricing, pricingNote, maintenanceOffer } from "@/lib/data";

export const metadata = {
  title: "Services & Tarifs",
  description:
    "Sites vitrines, sites professionnels avancés et e-commerce pour PME et entrepreneurs. Tarifs indicatifs et maintenance sur devis.",
};

export default function ServicesPage() {
  return (
    <section className="section-y">
      <div className="container-page">
        <Reveal>
          <h1 className="font-display text-4xl font-semibold text-paper mb-4">Services & Tarifs</h1>
          <p className="text-muted max-w-xl mb-12">
            Trois formules pensées pour accompagner votre entreprise selon son stade de développement.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {pricing.map((plan, i) => (
            <Reveal key={plan.title} delay={i * 0.08}>
              <PricingCard plan={plan} highlighted={i === 0} />
            </Reveal>
          ))}
        </div>

        <p className="text-sm text-muted border border-ink-line rounded p-4 mb-16">{pricingNote}</p>

        <Reveal className="card-cut border border-ink-line rounded p-8">
          <h2 className="font-display text-2xl font-semibold text-paper mb-2">{maintenanceOffer.title}</h2>
          <p className="text-gold-deep font-display mb-5">{maintenanceOffer.price}</p>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted">
            {maintenanceOffer.features.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="text-teal-soft">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
