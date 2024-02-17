import { useCallback, type FormEventHandler } from "react"

import { useStorage } from "~hooks/storage"
import type { BorderPageColorizerProps } from "~models"

type UseForm = {
  handleSubmit: FormEventHandler<HTMLFormElement>
  deleteAllBorderPageColorizers: () => void
  generateNewProps: (
    oldArray: BorderPageColorizerProps[],
    domainName: string,
    color: string
  ) => void
}

export const useForm = (): UseForm => {
  const {
    borderPageColorizerStorage,
    setBorderPageColorizer,
    deleteAllBorderPageColorizers
  } = useStorage()

  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    async (event) => {
      event.preventDefault()

      const form = new FormData(event.currentTarget)
      const domainName = form.get("domain-name")?.toString()
      const color = form.get("color")?.toString()

      if (domainName != null && color != null) {
        await setBorderPageColorizer(
          generateNewProps(borderPageColorizerStorage, domainName, color)
        )
      }
    },
    [borderPageColorizerStorage]
  )

  const generateNewProps = useCallback(
    (
      oldArray: BorderPageColorizerProps[],
      domainName: string,
      color: string
    ) => {
      const newArray = structuredClone(oldArray)
      const length = newArray.length

      let no = 1

      const existingIndex = newArray.findIndex(
        (item) => item.domainName === domainName
      )
      if (existingIndex !== -1) {
        newArray[existingIndex].color = color
      } else {
        if (newArray.length > 0) {
          no = newArray[length - 1].no + 1
        }
        newArray.push({ no, domainName, color })
      }

      return newArray.sort((a, b) => a.no - b.no)
    },
    []
  )

  return {
    handleSubmit,
    deleteAllBorderPageColorizers,
    generateNewProps
  }
}
