import { useCallback, useState } from 'react'

import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

import { COOKIE_JWT_TOKEN } from 'shared/api/token'
import { appRoutePaths } from 'shared/navigation/routerPaths'

export const useAuth = () => {
  const [isFetch, setIsFetch] = useState(false)

  const navigate = useNavigate()

  const onAuth = useCallback(async () => {
    try {
      setIsFetch(true)
      const res = await new Promise(resolve => {
        setTimeout(() => {
          resolve('ok')
        }, 750)
      })

      if (res === 'ok') {
        Cookies.set(COOKIE_JWT_TOKEN, '123')
        navigate(appRoutePaths.main)
      }
    } catch (err) {}

    setIsFetch(false)
  }, [navigate])

  return { onAuth, isFetch }
}
