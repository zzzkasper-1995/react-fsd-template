import React, { useEffect } from 'react'

import { List, ListItem, ListItemText } from '@material-ui/core'

import { useGetTransactionsQuery } from 'feature/history/api/request'
import { addTransactions } from 'feature/history/model/historySlice'
import { slHistory } from 'feature/history/model/selectors'
import { useAppDispatch } from 'shared/hooks/store/useAppDispatch'
import { useAppSelector } from 'shared/hooks/store/useAppSelector'

import LoadingList from './components/LoadingLIst'

export const TransactionHistory = () => {
  const dispatch = useAppDispatch()

  const historyList = useAppSelector(slHistory)

  const { data: list, error, isLoading } = useGetTransactionsQuery({})

  useEffect(() => {
    const fetch = async () => {
      try {
        dispatch(addTransactions(list?.data ?? []))
      } catch (err) {
        console.log('getUser.err', err)
      }
    }

    fetch()
  }, [dispatch, list])

  if (isLoading) {
    return <LoadingList />
  }

  return (
    <List>
      {historyList.map(transaction => (
        <ListItem key={transaction.id}>
          <ListItemText primary={transaction.date} secondary={transaction.description} />
          <ListItemText primary={transaction.category} secondary={transaction.amount} />
        </ListItem>
      ))}
    </List>
  )
}
