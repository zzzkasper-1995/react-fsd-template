import React from 'react'

import { AppBar, Box, Toolbar } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { Header } from 'widgets/layout/header'
import { Drawer } from 'widgets/layout/navigationMenu'

import { useStyles } from './DefaultLayout.styles'

type Props = {
  isHeader?: boolean
}

export function DefaultLayout(props: Props) {
  const { isHeader = true } = props

  const classes = useStyles()

  return (
    <Box className={classes.globalContainer}>
      <Drawer />

      <Box display="grid" gridAutoRows="auto 1fr">
        {isHeader && (
          <AppBar className={classes.appBar} position="static">
            <Toolbar>
              <Header />
            </Toolbar>
          </AppBar>
        )}

        <Box className={classes.main} component="main">
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
