import React from 'react'

import { Box } from '@material-ui/core'

import { TransactionHistory } from 'feature/history'
import ExpenseChart from 'feature/graph/ui/Pie'

import { useStyles } from './Main.styles'

export function Main() {
  const classes = useStyles()

  return (
    <div className={classes.page} data-testid="dealershipPage">
      <span>История ваших расходов и доходов</span>

      <Box sx={{ display: 'inline-flex' }}>
        <TransactionHistory />
        <Box style={{ width: 12 }}> </Box>
        <ExpenseChart />
      </Box>
    </div>
  )
}
