import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://faycalbouzid.fr";

  return ["", "/projets", "/competences", "/contact"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
