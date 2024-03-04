"use client"

import * as React from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"

import { Icons } from "@/components/icons"

interface MainNavProps {
  children?: React.ReactNode
}

export function MainNav({ children }: MainNavProps) {
  const t = useTranslations("marketing.main")

  return (
    <div className="flex w-full justify-between gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.logo />
        <span className="hidden font-bold sm:inline-block">{t("title")}</span>
      </Link>

      <nav className="">hello</nav>
    </div>
  )
}
