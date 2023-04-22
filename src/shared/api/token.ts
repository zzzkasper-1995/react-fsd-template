import Cookies from 'js-cookie'

export const COOKIE_JWT_TOKEN = 'authToken'
export const COOKIE_REFRESH_TOKEN = 'refreshToken'

type TokenMethods = {
  save: (value: string) => void
  get: () => string | null
  delete: () => void
}

interface AuthToken {
  jwt: TokenMethods
  refresh: TokenMethods
}

/** Методы работы с токенами */
export const authToken: AuthToken = {
  jwt: {
    save: jwtToken => Cookies.set(COOKIE_JWT_TOKEN, jwtToken),
    get: () => Cookies.get(COOKIE_JWT_TOKEN) ?? null,
    delete: () => Cookies.remove(COOKIE_JWT_TOKEN),
  },
  refresh: {
    save: refreshToken => localStorage.setItem(COOKIE_REFRESH_TOKEN, refreshToken),
    get: () => localStorage.getItem(COOKIE_REFRESH_TOKEN),
    delete: () => localStorage.removeItem(COOKIE_REFRESH_TOKEN),
  },
}

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
