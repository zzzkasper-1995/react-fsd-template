import React from 'react'

import { List, ListItem, makeStyles } from '@material-ui/core'
import { TransactionItem } from 'enteties/transaction/ui/Transaction'

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(2),
    margin: theme.spacing(1, 0),
  },
}))

const LoadingList = () => {
  const classes = useStyles()

  const skeletonItems = new Array(10).fill(null) // создаем массив с 10 элементами

  return (
    <List>
      {skeletonItems.map((item, index) => (
        <ListItem className={classes.listItem} key={index}>
          <TransactionItem
            transaction={{
              id: '',
              date: undefined,
              category: '',
              amount: 0,
              description: '',
            }}
            isLoading
          />
        </ListItem>
      ))}
    </List>
  )
}

export default LoadingList
