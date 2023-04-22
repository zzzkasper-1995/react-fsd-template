import { useCallback } from 'react'

import Cookies from 'js-cookie'

import { COOKIE_JWT_TOKEN } from 'shared/api/token'

export const useLogout = () => {
  const onLogout = useCallback(() => {
    Cookies.remove(COOKIE_JWT_TOKEN)
  }, [])

  return { onLogout }
}
