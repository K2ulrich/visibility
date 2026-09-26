import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { whyWebsite, services, portfolio } from "@/lib/data";

export default function HomePage() {
  const featuredProjects = portfolio.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="section-y section-divider">
        <div className="container-page">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-paper mb-3">
              Pourquoi avoir un site web ?
            </h2>
            <p className="text-muted max-w-xl mb-12">
              Un site professionnel change concrètement la façon dont vos clients vous perçoivent et vous trouvent.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyWebsite.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05} className="border-l-2 border-teal pl-5">
                <h3 className="font-display text-base font-semibold text-paper mb-1">{item.title}</h3>
                <p className="text-sm text-muted">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y section-divider">
        <div className="container-page">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-paper mb-3">Ce que nous proposons</h2>
            <p className="text-muted max-w-xl mb-12">
              Des solutions adaptées à la taille et aux objectifs de votre activité.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y section-divider">
        <div className="container-page">
          <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="font-display text-3xl font-semibold text-paper mb-3">Réalisations</h2>
              <p className="text-muted max-w-xl">Quelques projets développés récemment.</p>
            </div>
            <Button href="/portfolio" variant="outline">Voir toutes les réalisations</Button>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.06}>
                <PortfolioCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      <section className="section-y">
        <div className="container-page text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper mb-4">
              Votre entreprise mérite d&apos;être visible.
            </h2>
            <p className="text-muted max-w-xl mx-auto mb-8">
              Parlons de votre projet et voyons ensemble comment développer votre présence en ligne.
            </p>
            <Button href="/contact" variant="primary">Parlons de votre projet</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
