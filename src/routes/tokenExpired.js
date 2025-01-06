/** FALTA:
 *  fazer essa funação fincionar
 */
// Function to check if the token is expired
const isTokenExpired = (token) => {
  if (!token) return true

  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join('')
  )
  const { exp } = JSON.parse(jsonPayload)
  return exp * 1000 < Date.now()
}

export default isTokenExpired
