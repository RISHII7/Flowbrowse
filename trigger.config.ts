import { defineConfig } from "@trigger.dev/sdk"
import { esbuildPlugin } from "@trigger.dev/build/extensions"
import { sentryEsbuildPlugin } from "@sentry/esbuild-plugin"

export default defineConfig({
  project: "proj_zogsllrfowwglzrhbnqf",
  runtime: "node",
  logLevel: "log",
  // The max compute seconds a task is allowed to run. If the task run exceeds this duration, it will be stopped.
  // You can override this on an individual task.
  // See https://trigger.dev/docs/runs/max-duration
  maxDuration: 3600,
  retries: {
    enabledInDev: true,
    default: {
      maxAttempts: 3,
      minTimeoutInMs: 1000,
      maxTimeoutInMs: 10000,
      factor: 2,
      randomize: true,
    },
  },
  dirs: ["features"],
  build: {
    extensions: [
      // Upload source maps to Sentry on every deploy so task stack traces
      // map back to original source. Runs last, deploy target only.
      esbuildPlugin(
        sentryEsbuildPlugin({
          org: "barclays-97",
          project: "flowbrowse",
          authToken: process.env.SENTRY_AUTH_TOKEN,
        }),
        { placement: "last", target: "deploy" }
      ),
    ],
  },
})
