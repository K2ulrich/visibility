import { siteConfig } from "@/lib/data";

const base =
  "flex h-[52px] w-[52px] items-center justify-center rounded-full shadow-[0_8px_24px_rgba(27,30,39,0.18)] transition-transform duration-200 hover:scale-105";

export default function SocialFloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={siteConfig.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Profil LinkedIn"
        title="LinkedIn"
        className={`${base} bg-paper text-ink`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" opacity="0.12" />
          <text x="12" y="16.5" textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor">in</text>
        </svg>
      </a>

      <a
        href={`mailto:${siteConfig.email}`}
        aria-label="Envoyer un email"
        title="Email"
        className={`${base} bg-gold text-ink`}
      >
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4 6.5 L12 13 L20 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </a>

      <a
        href={siteConfig.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discuter sur WhatsApp"
        title="WhatsApp"
        className={`${base} bg-teal text-white`}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.5A10 10 0 1 0 12 2Z"
            fill="currentColor"
            opacity="0.15"
          />
          <path
            d="M8.5 8.3c.2-.5.5-.5.7-.5h.5c.2 0 .4 0 .6.4.2.5.7 1.6.7 1.7.1.1.1.3 0 .4-.1.2-.1.3-.3.5-.1.2-.3.3-.4.5-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.5.7 1.8.8.3.1.4.2.5.3.1.2.1.9-.2 1.7-.3.8-1.7 1.5-2.3 1.6-.6.1-1.3.1-4.2-1.1-3.2-1.4-5.2-4.6-5.4-4.8-.1-.2-1.2-1.6-1.2-3.1 0-1.5.8-2.2 1-2.5Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  );
}
