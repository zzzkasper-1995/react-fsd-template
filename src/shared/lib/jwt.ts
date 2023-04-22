import Cookies from 'js-cookie'

export const CLIENT_JWT = 'sb_client_j'

export const getJwt = () => Cookies.get(CLIENT_JWT)

interface ParsedJwtData {
  exp: number
  iat: number
  iss: string
  sub: string
  scopes: string[]
}

export const parseJwt = (token: string): ParsedJwtData => {
  try {
    const base64Url = token?.split('.')[1]
    const base64 = base64Url?.replace(/-/g, '+')?.replace(/_/g, '/')

    return JSON.parse(atob(base64))
  } catch (error) {
    console.error(error)

    throw error
  }
}
