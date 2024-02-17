/// <reference types="vitest" />

import path from "path"
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    alias: {
      "~components": path.resolve(__dirname, "components"),
      "~hooks": path.resolve(__dirname, "hooks"),
      "~models": path.resolve(__dirname, "models"),
      "~storage": path.resolve(__dirname, "storage")
    },
    globals: true,
    environment: "jsdom"
  }
})
