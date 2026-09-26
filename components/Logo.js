/**
 * Monogramme "VT" (Visibility).
 * Le V est inscrit dans un carré. La barre horizontale du T touche les deux
 * bras du V exactement à leur milieu, et la barre verticale du T descend
 * jusqu'à la pointe du V — ce qui transforme visuellement le V en Y.
 * Utilise currentColor : fonctionne tel quel sur fond clair ou sombre.
 */
export default function Logo({ className = "h-9 w-9" }) {
  return (
    <svg
      viewBox="0 0 44 44"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Visibility"
    >
      {/* Carré */}
      <rect x="2" y="2" width="40" height="40" rx="4" stroke="currentColor" strokeOpacity="0.22" />

      {/* V — deux bras partant des coins hauts vers la pointe basse centrale */}
      <path
        d="M10 10 L22 34 L34 10"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* T — barre horizontale au milieu des bras (touche les deux côtés du V) */}
      <path
        d="M16 22 H28"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />

      {/* T — barre verticale, du centre de la barre horizontale jusqu'à la pointe : transforme le V en Y */}
      <path
        d="M22 22 V34"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />

      <circle cx="22" cy="34" r="2.4" fill="#E8A94A" />
    </svg>
  );
}
