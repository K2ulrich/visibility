import Button from "./Button";

export default function PricingCard({ plan, highlighted = false }) {
  return (
    <div
      className={`card-cut rounded p-7 border flex flex-col ${
        highlighted ? "border-gold bg-ink-soft" : "border-ink-line"
      }`}
    >
      <h3 className="font-display text-xl font-semibold text-paper mb-1">{plan.title}</h3>
      <p className="font-display text-2xl text-gold-deep mt-3">{plan.priceFrom}</p>
      {plan.priceEur && <p className="text-sm text-muted mb-5">{plan.priceEur}</p>}
      {!plan.priceEur && <div className="mb-5" />}

      <ul className="space-y-2 text-sm text-muted flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="text-teal-soft">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Button href="/contact" variant={highlighted ? "primary" : "outline"} className="mt-7 w-full">
        Demander un devis
      </Button>
    </div>
  );
}
