import { tasks } from "@trigger.dev/sdk"
import * as Sentry from "@sentry/node"

// Initialize Sentry for the Trigger.dev runtime. Auto-loaded before tasks run.
Sentry.init({
  defaultIntegrations: false,
  dsn: process.env.SENTRY_DSN,
  environment:
    process.env.NODE_ENV === "production" ? "production" : "development",
})

// Global hook: capture every task failure as a Sentry exception.
tasks.onFailure(({ payload, error, ctx }) => {
  Sentry.captureException(error, {
    extra: {
      payload,
      ctx,
    },
  })
})
