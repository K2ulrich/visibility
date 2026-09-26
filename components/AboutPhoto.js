"use client";

import Image from "next/image";
import { useState } from "react";

export default function AboutPhoto({ src, alt }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative aspect-[4/5] w-full max-w-sm rounded overflow-hidden border border-ink-line bg-ink-soft">
      {imgError ? (
        <div className="flex h-full w-full items-center justify-center">
          <span className="font-display text-sm text-muted px-6 text-center">
            Ajoutez votre photo dans
            <br />
            public/images/about/
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          onError={() => setImgError(true)}
          sizes="(max-width: 768px) 100vw, 400px"
        />
      )}
    </div>
  );
}
