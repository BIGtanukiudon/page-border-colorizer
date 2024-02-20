import exp from "constants"
import { describe, expect, it } from "vitest"

import { isHostname } from "~utils/form"

describe("isHostname", () => {
  it("有効なホスト名", () => {
    expect(isHostname("example.com")).toBeTruthy()
    expect(isHostname("subdomain.example.com")).toBeTruthy()
    expect(isHostname("www.example.com")).toBeTruthy()
    expect(isHostname("123.example.com")).toBeTruthy()
    expect(isHostname("太郎.com")).toBeTruthy()
    expect(isHostname("localhost")).toBeTruthy()
    expect(isHostname("localhost:3000")).toBeTruthy()
    expect(isHostname("text.app")).toBeTruthy()
    expect(isHostname("127.0.0.1")).toBeTruthy()
    expect(isHostname("127.0.0.1:3000")).toBeTruthy()
  })

  it("無効なホスト名", () => {
    expect(isHostname("example")).toBeFalsy()
    expect(isHostname("example.")).toBeFalsy()
    expect(isHostname(".example.com")).toBeFalsy()
    expect(isHostname("example..com")).toBeFalsy()
    expect(isHostname("example.com.")).toBeFalsy()
    expect(isHostname("example_com")).toBeFalsy()
    expect(isHostname("example@com")).toBeFalsy()
  })

  it("空の文字列", () => {
    expect(isHostname("")).toBeFalsy()
  })

  it("null", () => {
    expect(isHostname(null)).toBeFalsy()
  })

  it("undefined", () => {
    expect(isHostname(undefined)).toBeFalsy()
  })
})
