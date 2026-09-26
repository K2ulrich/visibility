import Link from "next/link";

const base =
  "inline-flex items-center justify-center gap-2 rounded px-6 py-3 text-sm font-medium transition-colors duration-200 font-display";

const variants = {
  primary: `${base} bg-gold text-ink hover:bg-gold-soft`,
  outline: `${base} border border-ink-line text-paper hover:border-gold hover:text-gold-deep`,
  ghost: `${base} text-paper hover:text-gold-deep`,
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  ...props
}) {
  const classes = `${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
