import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import { Auth } from 'pages/auth/ui/Auth'
import { AddTransactionForm } from 'pages/create'
import { DefaultLayout } from 'pages/defaultLayout'
import { Main } from 'pages/main'
import { NotFoundPage } from 'pages/notFound'
import { appRoutePaths, defaultRoute } from 'shared/navigation/routerPaths'

export function MainRouter(): JSX.Element {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path={appRoutePaths.auth} element={<Auth />} />

      <Route path={appRoutePaths.empty} element={<DefaultLayout />}>
        <Route path={appRoutePaths.empty} element={<Navigate to={defaultRoute} replace />} />
        <Route path={appRoutePaths.main} element={<Main />} />
        <Route path={appRoutePaths.create} element={<AddTransactionForm />} />
      </Route>
    </Routes>
  )
}
