import { useCallback, type FormEventHandler } from "react"

import { useStorage } from "~hooks/storage"

type UseForm = {
  handleSubmit: FormEventHandler<HTMLFormElement>
  deleteAllBorderPageColorizers: () => void
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
        await addProps(domainName, color)
      }
    },
    []
  )

  const addProps = useCallback(async (domainName: string, color: string) => {
    const newArray = structuredClone(borderPageColorizerStorage)

    let no = 1

    const existingIndex = newArray.findIndex(
      (item) => item.domainName === domainName
    )
    if (existingIndex !== -1) {
      newArray[existingIndex].color = color
    }

    if (newArray.length > 0) {
      no = newArray[length - 1].no + 1
    }
    newArray.push({ no, domainName, color })

    await setBorderPageColorizer(newArray.sort((a, b) => a.no - b.no))
  }, [])

  return {
    handleSubmit,
    deleteAllBorderPageColorizers
  }
}
