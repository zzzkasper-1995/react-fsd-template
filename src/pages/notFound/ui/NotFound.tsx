import React from 'react'

import { Button, Paper, Typography } from '@mui/material'

import { useStyles } from './NotFound.styles'

export function NotFound() {
  const classes = useStyles()

  return (
    <Paper className={classes.page} data-testid="notFound">
      <Typography variant="h1" style={{ color: 'black' }}>
        404
      </Typography>

      <Typography variant="h6" style={{ color: 'black' }}>
        Страница не найдена
      </Typography>

      <Button variant="contained" href="/" style={{ marginTop: 16 }}>
        Вернуться на главную
      </Button>
    </Paper>
  )
}
