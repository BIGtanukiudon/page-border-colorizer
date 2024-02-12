import { useCallback } from "react"

import { Storage } from "@plasmohq/storage"
import { useStorage as usePlasmohqStorage } from "@plasmohq/storage/hook"

import type { BorderPageColorizerProps } from "~models"
import { STORAGE_KEY } from "~storage"

type UseStorage = {
  borderPageColorizerStorage: BorderPageColorizerProps[]
  setBorderPageColorizer: (setter: BorderPageColorizerProps[]) => Promise<void>
  deleteAllBorderPageColorizers: () => void
}

export const useStorage = (): UseStorage => {
  const [borderPageColorizerStorage, setBorderPageColorizerStorage] =
    usePlasmohqStorage(
      {
        key: STORAGE_KEY,
        instance: new Storage({
          area: "local"
        })
      },
      (v) => (v ? v : [])
    )

  const setBorderPageColorizer = useCallback(
    (setter: BorderPageColorizerProps[]) =>
      setBorderPageColorizerStorage(setter),
    []
  )

  return {
    borderPageColorizerStorage,
    setBorderPageColorizer,
    deleteAllBorderPageColorizers: () => setBorderPageColorizerStorage([])
  }
}
