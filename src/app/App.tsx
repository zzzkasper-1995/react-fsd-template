import React from 'react'

import { ThemeProvider } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from 'app/store'

import { Router } from './Router'
import { theme } from './theme'

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <BrowserRouter basename="/">
            <Router />
          </BrowserRouter>
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  )
}
