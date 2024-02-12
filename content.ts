import type { PlasmoCSConfig } from "plasmo"

import { getColorByHost } from "~storage"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true
}

const main = async () => {
  const hostName = location.host
  const color = await getColorByHost(hostName)

  if (color) {
    document.body.style.border = `5px solid ${color}`
  }
}

main()
