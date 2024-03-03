import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Next Forge",
  author: "Atomized-titan",
  description:
    "A cutting-edge Next.js 14+ template featuring an app router, shadcn/ui, typesafe environment, and pre-configured icons and settings for rapid development.",
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://pushpalghoshal.com",
  },
  links: {
    github: "https://github.com/Atomized-titan/next-forge",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
