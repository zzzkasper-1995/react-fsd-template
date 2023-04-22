import React, { useEffect } from 'react'

import { List, ListItem, ListItemText } from '@material-ui/core'
import { TransactionItem } from 'enteties/transaction/ui/Transaction'

import { TransactionsResponse, useGetTransactionsQuery } from 'feature/history/api/request'
import { addTransactions } from 'feature/history/model/historySlice'
import { slHistory } from 'feature/history/model/selectors'
import { useAppDispatch } from 'shared/hooks/store/useAppDispatch'
import { useAppSelector } from 'shared/hooks/store/useAppSelector'

import LoadingList from './components/LoadingLIst'

export const TransactionHistory = () => {
  const dispatch = useAppDispatch()

  const historyList = useAppSelector(slHistory)

  //TODO ручки не работают, прокидываем моки в error. Потом убрать
  const {
    // data: list,
    error,
    isLoading,
  } = useGetTransactionsQuery({})
  const list = error as TransactionsResponse

  useEffect(() => {
    console.log('useHook', list)
    try {
      dispatch(addTransactions(list?.data ?? []))
    } catch (err) {
      console.log('getUser.err', err)
    }
  }, [dispatch, list])

  console.log('!!!!!historyList', historyList, list)

  if (isLoading) {
    return <LoadingList />
  }

  return (
    <List>
      {historyList.map(transaction => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </List>
  )
}
