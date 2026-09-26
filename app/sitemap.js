import { siteConfig, navLinks } from "@/lib/data";

export default function sitemap() {
  return navLinks.map((link) => ({
    url: `${siteConfig.url}${link.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: link.href === "/" ? 1 : 0.7,
  }));
}
