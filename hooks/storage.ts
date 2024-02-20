import { useCallback } from "react"

import { Storage } from "@plasmohq/storage"
import { useStorage as usePlasmohqStorage } from "@plasmohq/storage/hook"

import type { BorderPageColorizerProps } from "~models"
import { STORAGE_KEY } from "~storage"

type UseStorage = {
  borderPageColorizerStorage: BorderPageColorizerProps[]
  setBorderPageColorizer: (setter: BorderPageColorizerProps[]) => Promise<void>
  deleteAllBorderPageColorizers: () => void
  deleteBorderPageColorizer: (no: number) => Promise<void>
}

export const useStorage = (): UseStorage => {
  const [borderPageColorizerStorage, setBorderPageColorizerStorage] =
    usePlasmohqStorage<BorderPageColorizerProps[]>(
      {
        key: STORAGE_KEY,
        instance: new Storage({
          area: "local"
        })
      },
      (v) => (v ? v : [])
    )

  const setBorderPageColorizer = useCallback(
    async (setter: BorderPageColorizerProps[]) =>
      await setBorderPageColorizerStorage(setter),
    []
  )

  const deleteBorderPageColorizer = useCallback(
    async (no: number) =>
      await setBorderPageColorizer(
        borderPageColorizerStorage.filter((item) => item.no !== no)
      ),
    [borderPageColorizerStorage]
  )

  return {
    borderPageColorizerStorage,
    setBorderPageColorizer,
    deleteAllBorderPageColorizers: () => setBorderPageColorizerStorage([]),
    deleteBorderPageColorizer
  }
}
