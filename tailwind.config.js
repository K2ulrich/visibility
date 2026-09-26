/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Thème clair : fond blanc/écru, surfaces légèrement teintées, bordures discrètes
        ink: {
          DEFAULT: "#FFFFFF", // fond principal
          soft: "#F6F4EF",    // surfaces / cartes
          line: "#E5E1D3",    // bordures
        },
        paper: "#1B1E27",     // texte principal, encre foncée sur fond clair
        gold: {
          DEFAULT: "#E8A94A", // accent principal (fonds de boutons, bordures)
          soft: "#F2C685",    // survol, accents clairs
          deep: "#9C6317",    // texte/liens sur fond clair (contraste suffisant)
        },
        teal: {
          DEFAULT: "#2FA88E", // accent secondaire (fonds : bouton WhatsApp)
          soft: "#0D8A70",    // texte/liens sur fond clair
        },
        muted: "#5B6270",     // texte secondaire, lisible sur fond clair
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      borderRadius: {
        DEFAULT: "10px",
      },
    },
  },
  plugins: [],
};
