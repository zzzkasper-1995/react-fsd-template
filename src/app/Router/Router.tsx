import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Main } from 'pages/main'
import { DefaultLayout } from 'pages/defaultLayout'

import { appRoutePaths } from '../../shared/navigation/routerPaths'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path={appRoutePaths.main} element={<Main />} />
      </Route>
    </Routes>
  )
}
