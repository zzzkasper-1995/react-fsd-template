import React from 'react'

import { Avatar, Box, Button, CircularProgress, Typography } from '@mui/material'

import { ReactComponent as AvatarLogo } from 'assets/icons/avatar.svg'

import { useAuth } from './LoginForm.hooks'
import useStyles from './LoginForm.styles'

export function LoginForm() {
  const classes = useStyles()

  const { onAuth, isFetch } = useAuth()

  return (
    <Box className={classes.pointOfSaleFormContainer} data-testid="loginForm">
      <Avatar className={classes.avatarContainer}>
        <AvatarLogo />
      </Avatar>

      <Typography className={classes.formMessage}>Авторизация</Typography>

      <Button
        variant="contained"
        className={classes.loginButton}
        onClick={onAuth}
        disabled={isFetch}
        data-testid="loginButton"
      >
        {!isFetch ? 'Войти' : <CircularProgress color="inherit" size={16} />}
      </Button>
    </Box>
  )
}
