"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Emplacement d'image carrée avec repli élégant si le fichier n'existe pas
 * encore. Utilisé pour l'image de marque en page d'accueil.
 */
export default function SquareImage({ src, alt, label, className = "" }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative aspect-square w-full overflow-hidden rounded border border-ink-line bg-ink-soft ${className}`}>
      {imgError ? (
        <div className="flex h-full w-full items-center justify-center p-6 text-center">
          <span className="font-display text-sm text-muted">{label || "Ajoutez votre image"}</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          onError={() => setImgError(true)}
          sizes="(max-width: 768px) 100vw, 480px"
        />
      )}
    </div>
  );
}
