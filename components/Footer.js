import Link from "next/link";
import Image from "next/image";
import { navLinks, siteConfig } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-line bg-ink">
      <div className="container-page py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 text-paper mb-3">
            <Image
              src="/icons/logo.png"
              alt={`Logo ${siteConfig.name}`}
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <span className="font-display font-semibold">{siteConfig.name}</span>
          </div>
          <p className="text-sm text-muted max-w-xs">{siteConfig.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-paper mb-3">Navigation</p>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted hover:text-gold-deep transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-paper mb-3">Contact</p>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-soft transition-colors"
              >
                WhatsApp : {siteConfig.whatsapp}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-gold-deep transition-colors"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-deep transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li className="pt-1 text-muted">{siteConfig.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-line">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted">
          <p>
            © {year} {siteConfig.name}. Un site conçu par {siteConfig.founder}.
            Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <span>Politique de confidentialité</span>
            <span>Mentions légales</span>
          </div>
        </div>
      </div>
    </footer>
  );
}