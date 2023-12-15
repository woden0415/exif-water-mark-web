export const isUndef = (v: unknown) => v === undefined || v === null

// 判断是否为空
export const isEmpty = (x: unknown) =>
  isUndef(x) ||
  (typeof x === 'string' && x.trim() === '') ||
  (Array.isArray(x) && x.length === 0) ||
  (x instanceof Object && JSON.stringify(x) === '{}')
