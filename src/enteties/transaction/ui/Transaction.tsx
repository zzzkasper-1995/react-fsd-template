import React from 'react'

import { Paper, Typography, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton, Skeleton } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { Transaction } from '../types'

export const TransactionItem = ({
  transaction,
  isLoading = false,
  onRemove,
}: {
  transaction: Transaction
  isLoading?: boolean
  onRemove?: (id: string) => void
}) => {
  const classes = useStyles()

  const isExpense = transaction.amount < 0
  const icon = isExpense ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />
  const { amount } = transaction

  return (
    <Paper
      className={isExpense ? classes.expense : classes.income}
      style={isLoading ? { backgroundColor: 'white' } : undefined}
    >
      <ListItem className={classes.listItem}>
        {icon}
        <ListItemText
          primary={
            isLoading ? (
              <Skeleton width="100%" />
            ) : (
              <Typography variant="subtitle1">{transaction.category}</Typography>
            )
          }
          secondary={
            isLoading ? (
              <Skeleton width="100%" />
            ) : (
              <>
                <Typography variant="caption">{transaction.date}</Typography>
                <Typography variant="body2">{transaction.description}</Typography>
              </>
            )
          }
          className={classes.listItemText}
        />
        <ListItemText
          primary={isLoading ? <Skeleton /> : <Typography variant="subtitle1">{amount}</Typography>}
          secondary={
            isLoading ? (
              <Skeleton />
            ) : (
              <Typography variant="caption">{isExpense ? 'Расход' : 'Доход'}</Typography>
            )
          }
          style={{ alignItems: 'flex-end' }}
        />

        <ListItemIcon className={classes.listItemIcon}>
          {isLoading ? (
            <Skeleton />
          ) : (
            <>
              {onRemove && (
                <IconButton onClick={() => onRemove(transaction.id)}>
                  <DeleteIcon />
                </IconButton>
              )}
            </>
          )}
        </ListItemIcon>
      </ListItem>
    </Paper>
  )
}

const useStyles = makeStyles(theme => ({
  income: {
    backgroundColor: theme.palette.custom.income,
    width: 350,
  },
  expense: {
    backgroundColor: theme.palette.custom.expense,
    width: 350,
  },
  listItem: {
    padding: theme.spacing(2),
    margin: theme.spacing(1, 0),
  },
  avatar: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.primary,
  },
  paper: {
    width: 350,
  },
  listItemIcon: {
    minWidth: 36,
  },
  listItemText: {
    flex: 'auto',
    minWidth: 0,
    marginRight: theme.spacing(1),
  },
}))
