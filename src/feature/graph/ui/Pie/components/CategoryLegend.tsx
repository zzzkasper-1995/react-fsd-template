import React from 'react'

import { List, ListItem, ListItemText, Typography, makeStyles, Paper, Box } from '@material-ui/core'
import { expenseCategories } from 'enteties/transaction/types'
import { useSelector } from 'react-redux'

import { selectExpenseTotalByCategory } from 'feature/history/model/selectors'

const useStyles = makeStyles(theme => ({
  legendItem: {
    alignItems: 'center',
    padding: theme.spacing(0.5, 2),
    margin: theme.spacing(1, 0),
    borderRadius: '10px',
  },
  legendIcon: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    marginRight: theme.spacing(1),
  },
  legendList: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}))

const CategoryLegend = () => {
  const classes = useStyles()
  const expenseTotalsByCategory = useSelector(selectExpenseTotalByCategory)

  return (
    <Paper style={{ maxWidth: 300 }}>
      <List className={classes.legendList}>
        {Object.entries(expenseCategories).map(([categoryKey, categoryValue]) => {
          const totalExpense = expenseTotalsByCategory[categoryKey] ?? 0

          // If there are no expenses for this category, skip it
          if (totalExpense === 0) {
            return null
          }

          return (
            <ListItem key={categoryKey} className={classes.legendItem}>
              <Box className={classes.legendIcon} style={{ backgroundColor: categoryValue.color }} />
              <ListItemText primary={categoryValue.name} />
              <Typography variant="subtitle1" color="textSecondary">
                {totalExpense}
              </Typography>
            </ListItem>
          )
        })}
      </List>
    </Paper>
  )
}

export default CategoryLegend
