import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Transaction } from 'enteties/transaction'

interface HistoryState {
  list: Transaction[]
}

const initialState: HistoryState = {
  list: [],
}

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addTransactions: (state, action: PayloadAction<Transaction[]>) => {
      state.list = state.list.concat(action.payload)
    },
    removeTransaction: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(item => item.id === action.payload)
    },
  },
})

export const { addTransactions, removeTransaction } = historySlice.actions
export default historySlice
