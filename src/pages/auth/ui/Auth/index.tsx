import React from 'react'

import { Paper } from '@mui/material'
import Cookies from 'js-cookie'

import { COOKIE_JWT_TOKEN } from 'shared/api/token'
import { useCheckToken } from 'widgets/auth/checkToken/hooks/useCheckToken'

import { useStyles } from './Auth.styles'
import { LoginForm } from './components/LoginForm'

export function Auth() {
  const classes = useStyles()

  const isAuth = useCheckToken()

  if (isAuth) {
    Cookies.remove(COOKIE_JWT_TOKEN)
  }

  return (
    <Paper className={classes.page} data-testid="authPage">
      <LoginForm />
    </Paper>
  )
}
