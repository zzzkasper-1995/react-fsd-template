import { createApi } from '@reduxjs/toolkit/query/react'
import { Transaction } from 'enteties/transaction'

import { defaultBaseQuery } from 'shared/api/helpers/defaultBaseQuery'
import { sleep } from 'shared/lib/sleep'

import { getHistoryResponse } from './responsesMock'

export interface TransactionsResponse {
  data: Transaction[]
}

export interface AddResponse {
  data: {}
}

export const transactionsApi = createApi({
  reducerPath: 'transactionsApi',
  baseQuery: defaultBaseQuery({
    baseUrl: 'http://localhost:3001/',
  }),
  endpoints: builder => ({
    getTransactions: builder.query<TransactionsResponse, {}>({
      query: body => ({
        url: '/getHistory',
        body,
      }),
      transformResponse: async (response: TransactionsResponse) => {
        await sleep(1000)

        return { data: getHistoryResponse }
      },
      transformErrorResponse: async (response: TransactionsResponse) => {
        await sleep(1000)

        return { data: getHistoryResponse }
      },
    }),
  }),
})

export const { useGetTransactionsQuery } = transactionsApi
