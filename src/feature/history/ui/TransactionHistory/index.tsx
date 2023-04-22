import React, { useCallback, useEffect } from 'react'

import { List, ListItem, ListItemText } from '@material-ui/core'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { TransactionItem } from 'enteties/transaction/ui/Transaction'

import { TransactionsResponse, useGetTransactionsQuery } from 'feature/history/api/request'
import { addTransactions, removeTransaction } from 'feature/history/model/historySlice'
import { slHistory } from 'feature/history/model/selectors'
import { useAppDispatch } from 'shared/hooks/store/useAppDispatch'
import { useAppSelector } from 'shared/hooks/store/useAppSelector'

import DateRangePicker from './components/DataFilter'
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
    try {
      dispatch(addTransactions(list?.data ?? []))
    } catch (err) {}
  }, [dispatch, list])

  const onRemove = useCallback(
    (id: string) => {
      dispatch(removeTransaction(id))
    },
    [dispatch],
  )

  if (isLoading) {
    return <LoadingList />
  }

  if (!historyList.length) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <Typography variant="h5" color="textSecondary">
          Нет данных
        </Typography>
      </Box>
    )
  }

  return (
    <List>
      <DateRangePicker isLoading={isLoading} />
      {historyList.map(transaction => (
        <TransactionItem key={transaction.id} transaction={transaction} onRemove={onRemove} />
      ))}
    </List>
  )
}
