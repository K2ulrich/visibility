"use client";

import Image from "next/image";
import { useState } from "react";

function Placeholder({ title }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-ink-soft border border-ink-line">
      <span className="font-display text-sm text-muted tracking-wide">{title}</span>
    </div>
  );
}

export default function PortfolioCard({ project }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="card-cut border border-ink-line rounded overflow-hidden hover:border-gold/50 transition-colors duration-200">
      <div className="relative aspect-[4/3] w-full">
        {imgError ? (
          <Placeholder title={project.title} />
        ) : (
          <Image
            src={project.image}
            alt={`Aperçu du projet ${project.title}`}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold text-paper mb-2">{project.title}</h3>
        <p className="text-sm text-muted mb-4">{project.description}</p>
        <ul className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <li key={t} className="text-xs text-teal-soft border border-ink-line rounded px-2 py-1">
              {t}
            </li>
          ))}
        </ul>
        <ul className="text-sm text-muted space-y-1">
          {project.features.map((f) => (
            <li key={f}>. {f}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
