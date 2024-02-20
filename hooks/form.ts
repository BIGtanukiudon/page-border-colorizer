import { useCallback, useState, type FormEventHandler } from "react"

import { useStorage } from "~hooks/storage"
import type { BorderPageColorizerProps } from "~models"
import { isHostname } from "~utils/form"

type UseForm = {
  handleSubmit: FormEventHandler<HTMLFormElement>
  deleteAllBorderPageColorizers: () => void
  generateNewProps: (
    oldArray: BorderPageColorizerProps[],
    domainName: string,
    color: string
  ) => void
  domainNameErrorMessages: string
  colorErrorMessages: string
  setDomainNameErrorMessages: (value: string) => void
  setColorErrorMessages: (value: string) => void
}

export const useForm = (): UseForm => {
  const [domainNameErrorMessages, setDomainNameErrorMessages] =
    useState<string>("")
  const [colorErrorMessages, setColorErrorMessages] = useState<string>("")

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

      if (!domainName) {
        setDomainNameErrorMessages("Domain Name is required")
        return
      } else if (!isHostname(domainName)) {
        setDomainNameErrorMessages("Invalid Domain Name")
        return
      }

      if (!color) {
        setColorErrorMessages("Color is required")
        return
      }

      await setBorderPageColorizer(
        generateNewProps(borderPageColorizerStorage, domainName, color)
      )
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
    generateNewProps,
    domainNameErrorMessages,
    colorErrorMessages,
    setDomainNameErrorMessages,
    setColorErrorMessages
  }
}
