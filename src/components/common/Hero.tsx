import Link from "next/link"
import { useTranslations } from "next-intl"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Icons } from "../icons"
import { buttonVariants } from "../ui/button"

const Hero = () => {
  const t = useTranslations("marketing.main")

  return (
    <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
      <Icons.logo className="h-16 w-16" />
      <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
        {t("title")}
      </h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        {t("description")}
      </p>
      <div className="flex gap-2">
        <Link
          href={siteConfig.links.github}
          target="_blank"
          className={cn(buttonVariants({ size: "default" }))}
        >
          {t("cta")}
        </Link>
      </div>
      <div className="mt-6 text-center text-sm">
        <p className="text-muted-foreground">
          {t("last_updated", { now: new Date() })}
        </p>
      </div>
    </div>
  )
}

export default Hero
