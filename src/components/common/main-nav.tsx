"use client"

import * as React from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"

import { Icons } from "@/components/icons"

import { ModeToggle } from "../mode-toggle"
import { LanguagePicker } from "./language-switcher"

interface MainNavProps {
  children?: React.ReactNode
}

export function MainNav({ children }: MainNavProps) {
  const t = useTranslations("marketing.main")

  return (
    <div className="flex w-full justify-between gap-6 md:gap-10">
      <Link href="/" className=" flex items-center space-x-2">
        <Icons.logo />
        <span className="hidden font-bold sm:inline-block">{t("title")}</span>
      </Link>

      <nav className="flex items-center space-x-6">
        <ModeToggle />
        <LanguagePicker />
      </nav>
    </div>
  )
}
