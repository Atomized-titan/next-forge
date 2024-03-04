import { NextRequest, NextResponse } from "next/server"
import createMiddleware from "next-intl/middleware"

const nextIntlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "es"],

  // Used when no locale matches
  defaultLocale: "en",
  // The default locale can be used without a prefix (e.g. /about). If you prefer to have a prefix for
  //  the default locale as well (e.g. /en/about), you can switch this option to always.
  localePrefix: "never",
})

export default function (req: NextRequest): NextResponse {
  return nextIntlMiddleware(req)
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(es|en)/:path*"],
}
