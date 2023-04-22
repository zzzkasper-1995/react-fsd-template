import React, { PropsWithChildren, useState } from 'react'

// import { getJwt, parseJwt } from 'shared/lib/jwt'

export const CheckToken = ({ children }: PropsWithChildren) => {
  // const [isAuth, setIsAuth] = useState(false)

  // const redirectToLogin = () => {
  //   if (window.location.pathname !== '/login') {
  //     window.location.replace('/login')
  //   }
  // }

  // useEffect(() => {
  //   const jwt = getJwt()
  //   if (jwt) {
  //     const userId = parseJwt(jwt)?.sub

  //     // Добавить проверки JWT
  //   } else {
  //     redirectToLogin()
  //   }
  // }, [isAuth])

  // if (!isAuth) {
  //   return null
  // }

  return <>{children}</>
}
