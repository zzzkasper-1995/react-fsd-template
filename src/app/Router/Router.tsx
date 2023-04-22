import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { NotFoundPage } from 'pages/notFound'
import { Main } from 'pages/main'
import { DefaultLayout } from 'pages/defaultLayout'

import { appRoutePaths, defaultRoute } from 'shared/navigation/routerPaths'

export function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />

      <Route path={appRoutePaths.empty} element={<DefaultLayout />}>
        <Route path={appRoutePaths.empty} element={<Navigate to={defaultRoute} replace />} />
        <Route path={appRoutePaths.main} element={<Main />} />
      </Route>
    </Routes>
  )
}
