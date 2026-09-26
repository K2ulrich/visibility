import AboutPhoto from "@/components/AboutPhoto";
import Reveal from "@/components/Reveal";
import { about, siteConfig } from "@/lib/data";

export const metadata = {
  title: "À propos",
  description:
    "Qui est Ulrich Konan, développeur web freelance derrière Visibility, et pourquoi ce studio a été créé.",
};

export default function AProposPage() {
  return (
    <section className="section-y">
      <div className="container-page grid md:grid-cols-[0.8fr,1fr,1.1fr] gap-12 items-start">
        <Reveal>
          <AboutPhoto src="/images/about/ulrich.png" alt={`Photo de ${siteConfig.founder}`} />
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="font-display text-4xl font-semibold text-paper mb-4">
            Qui est {siteConfig.founder} ?
          </h1>
          <p className="text-muted">{about.intro}</p>
          <p className="text-muted mt-4">{about.background}</p>
        </Reveal>

        <Reveal delay={0.16} className="space-y-10">
          <div>
            <h2 className="font-display text-xl font-semibold text-paper mb-4">Centres d&apos;intérêt</h2>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted">
              {about.interests.map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-gold-deep">.</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-l-2 border-teal pl-6">
            <h2 className="font-display text-xl font-semibold text-paper mb-3">Pourquoi Visibility ?</h2>
            <p className="text-muted">{about.why}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
