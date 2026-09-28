import type { MetadataRoute } from "next";
import { siteDescription, siteName } from "@/data/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "DPS",
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f766e",
    icons: [
      {
        src: "/DPS_Logo_PNG.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
