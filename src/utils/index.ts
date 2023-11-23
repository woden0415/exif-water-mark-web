export function randomId() {
  const chars =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  let did = []
  for (let i = 0; i < 32; i++)
    did[i] = chars[0 | (Math.random() * chars.length)]
  return did.join('')
}
