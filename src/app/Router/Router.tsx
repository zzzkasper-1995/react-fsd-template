import React from 'react'

import { useCheckToken } from 'widgets/auth/checkToken/hooks/useCheckToken'

import { AuthRouter } from './Routers/AuthRouter'
import { MainRouter } from './Routers/MainRouter'

export function Router(): JSX.Element {
  const isAuth = useCheckToken()

  // return isAuth ? <MainRouter /> : <AuthRouter />
  return <MainRouter />
}
