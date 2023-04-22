import React from 'react'

import { useStyles } from './Main.styles'

export function Main() {
  const classes = useStyles()

  return (
    <div className={classes.page} data-testid="dealershipPage">
      <span>MainPage</span>
    </div>
  )
}
