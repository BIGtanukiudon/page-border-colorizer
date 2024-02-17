import { renderHook } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { useForm } from "~hooks/form"

vi.mock("~hooks/storage", () => ({
  useStorage: () => ({
    borderPageColorizerStorage: [],
    setBorderPageColorizer: () => {},
    deleteAllBorderPageColorizers: () => {}
  })
}))

describe("useForm", () => {
  it("空の配列の場合、新しいプロパティが追加されることを確認する", () => {
    const { result } = renderHook(() => useForm())

    expect(
      result.current.generateNewProps([], "example.com", "#000000")
    ).toEqual([{ no: 1, domainName: "example.com", color: "#000000" }])
  })

  it("値ありで新規追加の場合、正しいプロパティが生成されることを確認する", () => {
    const { result } = renderHook(() => useForm())

    const oldArray = [
      { no: 1, domainName: "example.com", color: "#ffffff" },
      { no: 2, domainName: "example.net", color: "#000000" },
      { no: 3, domainName: "example.org", color: "#123456" }
    ]

    expect(
      result.current.generateNewProps(oldArray, "test.com", "#000000")
    ).toEqual([
      { no: 1, domainName: "example.com", color: "#ffffff" },
      { no: 2, domainName: "example.net", color: "#000000" },
      { no: 3, domainName: "example.org", color: "#123456" },
      { no: 4, domainName: "test.com", color: "#000000" }
    ])
  })

  it("値ありで上書きの場合、プロパティが上書きされることを確認する", () => {
    const { result } = renderHook(() => useForm())

    const oldArray = [
      { no: 1, domainName: "example.com", color: "#ffffff" },
      { no: 2, domainName: "example.net", color: "#000000" },
      { no: 3, domainName: "example.org", color: "#123456" }
    ]

    expect(
      result.current.generateNewProps(oldArray, "example.com", "#000000")
    ).toEqual([
      { no: 1, domainName: "example.com", color: "#000000" },
      { no: 2, domainName: "example.net", color: "#000000" },
      { no: 3, domainName: "example.org", color: "#123456" }
    ])
  })
})
