import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Transaction } from 'enteties/transaction'
import _ from 'lodash'

interface HistoryState {
  list: Transaction[]
  timeFilter: [Date] | undefined
}

const initialState: HistoryState = {
  list: [],
  timeFilter: undefined,
}

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addTransactions: (state, action: PayloadAction<Transaction[]>) => {
      state.list = _.uniqBy(state.list.concat(action.payload), 'id')
    },
    removeTransaction: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(item => item.id !== action.payload)
    },
    setFilter: (state, action: PayloadAction<[Date]>) => {
      state.timeFilter = action.payload
    },
  },
})

export const { addTransactions, removeTransaction, setFilter } = historySlice.actions
export default historySlice
