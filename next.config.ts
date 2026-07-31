import type { NextConfig } from "next"
import { withSentryConfig } from "@sentry/nextjs"

const nextConfig: NextConfig = {
  devIndicators: false,
}

export default withSentryConfig(nextConfig, {
  org: "barclays-97",
  project: "flowbrowse",

  // EU region — required so source maps upload to the right Sentry region
  sentryUrl: "https://de.sentry.io",

  // Source map upload auth token (set SENTRY_AUTH_TOKEN in CI / a gitignored env file)
  authToken: process.env.SENTRY_AUTH_TOKEN,

  // Upload a wider set of client source files for better stack trace resolution
  widenClientFileUpload: true,

  // Create a proxy API route to bypass ad-blockers
  tunnelRoute: "/monitoring",

  // Suppress non-CI build output
  silent: !process.env.CI,
})
