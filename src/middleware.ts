import { NextRequest, NextResponse } from "next/server"
import createMiddleware from "next-intl/middleware"

import { Locale, locales } from "./lib/locales"

const nextIntlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale: "en" satisfies Locale,
  // The default locale can be used without a prefix (e.g. /about). If you prefer to have a prefix for
  //  the default locale as well (e.g. /en/about), you can switch this option to always.
  localePrefix: "never",
})

export default function (req: NextRequest): NextResponse {
  return nextIntlMiddleware(req)
}

export const config = {
  // match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
}
