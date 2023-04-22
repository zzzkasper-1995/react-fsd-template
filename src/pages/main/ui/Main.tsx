import React from 'react'

import { TransactionHistory } from 'feature/history'

import { useStyles } from './Main.styles'

export function Main() {
  const classes = useStyles()

  return (
    <div className={classes.page} data-testid="dealershipPage">
      <span>MainPage</span>
      <TransactionHistory />
    </div>
  )
}
