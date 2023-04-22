import React from 'react'

import { Drawer } from '@mui/material'
import { Link } from 'react-router-dom'

import { ReactComponent as MainLogo } from 'assets/icons/mainLogo.svg'
import { useCheckToken } from 'widgets/auth/checkToken/hooks/useCheckToken'

import { NavigationMenu } from './components/NavigationMenu'
import { useStyles } from './Drawer.styles'

export function CustomDrawer() {
  const classes = useStyles()

  const isAuth = useCheckToken()

  return (
    <Drawer className={classes.navigationMenuDrawer} open variant="permanent" PaperProps={{ elevation: 8 }}>
      <Link className={classes.logo} to="/">
        <MainLogo />
      </Link>

      <NavigationMenu authType={isAuth ? 'auth' : 'no_auth'} />
    </Drawer>
  )
}
