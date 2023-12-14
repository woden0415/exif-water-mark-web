export type TypeCommon =
  | string
  | number
  | boolean
  | Array<TypeCommon>
  | TypeCommonObject
export type TypeCommonObject = {
  [key: string]: TypeCommon
}
