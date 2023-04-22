import React from 'react'

import { Routes, Route } from 'react-router-dom'

import { AuthPage } from 'pages/auth'
import { DefaultLayout } from 'pages/defaultLayout'
import { appRoutePaths } from 'shared/navigation/routerPaths'

export function AuthRouter(): JSX.Element {
  return (
    <Routes>
      <Route element={<DefaultLayout isHeader={false} />}>
        <Route path="*" element={<AuthPage />} />

        <Route path={appRoutePaths.auth} element={<AuthPage />} />
      </Route>
    </Routes>
  )
}
