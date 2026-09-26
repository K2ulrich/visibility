import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/data";

export const metadata = {
  title: "Contact",
  description:
    "Contactez Visibility pour démarrer votre projet de site web : formulaire, WhatsApp, email ou LinkedIn.",
};

export default function ContactPage() {
  return (
    <section className="section-y">
      <div className="container-page grid md:grid-cols-[1.3fr,1fr] gap-14">
        <Reveal>
          <h1 className="font-display text-4xl font-semibold text-paper mb-4">Contact</h1>
          <p className="text-muted mb-10 max-w-md">
            Décrivez votre projet, nous reviendrons vers vous rapidement pour en discuter.
          </p>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.1} as="aside" className="card-cut border border-ink-line rounded p-7 h-fit">
          <h2 className="font-display text-lg font-semibold text-paper mb-5">Contact direct</h2>
          <ul className="space-y-4 text-sm">
            <li>
              <p className="text-muted mb-1">WhatsApp</p>
              <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-paper hover:text-teal-soft transition-colors">
                {siteConfig.whatsapp}
              </a>
            </li>
            <li>
              <p className="text-muted mb-1">Email</p>
              <a href={`mailto:${siteConfig.email}`} className="text-paper hover:text-gold-deep transition-colors">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <p className="text-muted mb-1">LinkedIn</p>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-paper hover:text-gold-deep transition-colors">
                Profil LinkedIn
              </a>
            </li>
            <li>
              <p className="text-muted mb-1">Localisation</p>
              <p className="text-paper">{siteConfig.location}</p>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
