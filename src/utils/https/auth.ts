const TOKEN_KEY = '__TOKEN' // token
export function setTokenAUTH(token) {
  sessionStorage.setItem(TOKEN_KEY, token)
}
export function getTokenAUTH() {
  return sessionStorage.getItem(TOKEN_KEY)
}
export function removeTokenAUTH() {
  sessionStorage.removeItem(TOKEN_KEY)
}
