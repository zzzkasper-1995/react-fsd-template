import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AppBar, Box, Drawer, Toolbar, useMediaQuery } from '@mui/material'
import { theme } from 'app/theme'

import { useStyles } from './DefaultLayout.styles'
import { Header } from '../../../widgets/layout/header'
import { NavigationMenu } from '../../../widgets/layout/navigationMenu'

export function DefaultLayout() {
  const classes = useStyles()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const [isNavigationMenuOpened, setNavigationMenuOpened] = useState(false)
  useEffect(() => setNavigationMenuOpened(false), [isMobile])

  return (
    <Box className={classes.globalContainer}>
      <AppBar className={classes.appBar} position={isMobile ? 'relative' : 'fixed'}>
        <Toolbar>
          <Header />
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.navigationMenuDrawer}
        open={isNavigationMenuOpened}
        onClose={() => setNavigationMenuOpened(false)}
        variant={isMobile ? 'temporary' : 'permanent'}
      >
        <Toolbar />
        <NavigationMenu onClose={() => setNavigationMenuOpened(false)} />
      </Drawer>

      <Box className={classes.main} component="main">
        {!isMobile && <Toolbar />}
        <Outlet />
      </Box>
    </Box>
  )
}
