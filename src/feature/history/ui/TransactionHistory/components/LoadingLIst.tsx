import React from 'react'

import { List, ListItem, ListItemText } from '@material-ui/core'
import { Skeleton } from '@mui/material'

const LoadingList = () => {
  const skeletonItems = new Array(10).fill(null) // создаем массив с 10 элементами

  return (
    <List>
      {skeletonItems.map((item, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={<Skeleton animation="wave" variant="text" width="70%" />}
            secondary={<Skeleton animation="wave" variant="text" width="50%" />}
          />
        </ListItem>
      ))}
    </List>
  )
}

export default LoadingList
