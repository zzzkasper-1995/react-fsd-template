import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { MockStore } from 'redux-mock-store'
import { ThemeProvider } from '@mui/material'

import { theme } from 'app/theme'
import { store } from 'app/store'

export function ThemeProviderMock({ children }: PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export function StoreProviderMock({ mockStore, children }: { mockStore?: MockStore } & PropsWithChildren) {
  return <Provider store={mockStore || store}>{children}</Provider>
}
