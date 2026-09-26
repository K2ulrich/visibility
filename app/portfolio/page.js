import PortfolioCard from "@/components/PortfolioCard";
import AboutPhoto from "@/components/AboutPhoto";
import Reveal from "@/components/Reveal";
import { portfolio, siteConfig, about } from "@/lib/data";

export const metadata = {
  title: "Réalisations",
  description:
    "Découvrez les projets web développés par Visibility : bibliothèque en ligne, gestion de garage, tirage au sort et e-commerce.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="section-y section-divider">
        <div className="container-page">
          <Reveal>
            <h1 className="font-display text-4xl font-semibold text-paper mb-4">Réalisations</h1>
            <p className="text-muted max-w-xl mb-12">
              Une sélection de projets web personnels et applicatifs, développés pour explorer différents besoins métier.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolio.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.06}>
                <PortfolioCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid md:grid-cols-[0.7fr,1.3fr] gap-12 items-center">
          <Reveal>
            <AboutPhoto src="/images/about/ulrich.png" alt={`Photo de ${siteConfig.founder}, fondateur de Visibility`} />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm text-teal-soft font-medium mb-3 tracking-wide uppercase">Le fondateur</p>
            <h2 className="font-display text-3xl font-semibold text-paper mb-4">{siteConfig.founder}</h2>
            <p className="text-muted max-w-lg">{about.intro}</p>
            <p className="text-muted max-w-lg mt-3">{about.background}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
