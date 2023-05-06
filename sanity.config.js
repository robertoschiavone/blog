import {visionTool} from "@sanity/vision"
import {defineConfig} from "sanity"
import {deskTool} from "sanity/desk"

import {apiVersion, dataset, projectId} from "./src/services/sanity/env"
import {schema} from "./src/services/sanity/schema"

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool(),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
