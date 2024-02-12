import { Storage } from "@plasmohq/storage"

import type { BorderPageColorizerProps } from "~models"
import { isBorderPageColorizerPropsArray } from "~models"

export const STORAGE_KEY = "border-page-colorizer"

const storage = new Storage({
  area: "local"
})

const getValue = async (): Promise<BorderPageColorizerProps[]> => {
  try {
    const data = await storage.get(STORAGE_KEY)

    if (isBorderPageColorizerPropsArray(data)) {
      return data
    } else {
      return []
    }
  } catch {
    return []
  }
}

export const getColorByHost = async (
  host: string
): Promise<string | undefined> => {
  const data = await getValue()
  const color = data.find((d) => {
    const url = new URL(`https://${d.domainName}`)
    return url.host === host
  })?.color
  return color
}
