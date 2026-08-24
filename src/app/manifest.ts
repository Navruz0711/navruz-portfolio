import type { MetadataRoute } from "next";
import { config } from "@/data/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: config.title,
    short_name: "Navruz Dev",
    description: config.description.long,
    start_url: "/",
    display: "standalone",
    background_color: "#030712",
    theme_color: "#ff7744",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
