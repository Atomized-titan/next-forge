import withNextIntl from "next-intl/plugin"

const nextIntlConfig = withNextIntl()

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [],
  },
}

export default nextIntlConfig(config)
