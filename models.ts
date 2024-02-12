export type BorderPageColorizerProps = {
  no: number
  domainName: string
  color: string
}

export const isBorderPageColorizerProps = (
  obj: any
): obj is BorderPageColorizerProps => {
  return (
    typeof obj.no === "number" &&
    typeof obj.domainName === "string" &&
    typeof obj.color === "string"
  )
}

export const isBorderPageColorizerPropsArray = (
  obj: any
): obj is BorderPageColorizerProps[] => {
  return (
    Array.isArray(obj) &&
    obj.every(
      (item) =>
        typeof item.no === "number" &&
        typeof item.domainName === "string" &&
        typeof item.color === "string"
    )
  )
}
