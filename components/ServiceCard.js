export default function ServiceCard({ title, text }) {
  return (
    <div className="card-cut border border-ink-line rounded p-6 hover:border-gold/50 transition-colors duration-200">
      <h3 className="font-display text-lg font-semibold text-paper mb-2">{title}</h3>
      <p className="text-sm text-muted">{text}</p>
    </div>
  );
}
