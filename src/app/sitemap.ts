import type { MetadataRoute } from "next";
import { navItems, projects, siteUrl } from "@/data/site";

export const dynamic = "force-static";

const lastModified = new Date("2026-08-17");

export default function sitemap(): MetadataRoute.Sitemap {
  const imageUrls = [
    "/Banner_background.png",
    "/services/banner.jpg",
    ...projects.map((project) => project.src),
  ].map((src) => `${siteUrl}${src}`);

  return navItems.map((item) => ({
    url: `${siteUrl}${item.href === "/" ? "" : item.href}`,
    lastModified,
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority:
      item.href === "/" ? 1 : item.href === "/projects" || item.href === "/services" ? 0.9 : 0.7,
    images:
      item.href === "/"
        ? imageUrls.slice(0, 1)
        : item.href === "/projects"
          ? imageUrls.slice(2)
          : undefined,
  }));
}
