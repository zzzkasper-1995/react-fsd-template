import { createSelector } from '@reduxjs/toolkit'

export const slHistory = (state: RootState) => {
  const [startDate] = state.history.timeFilter || []

  if (startDate) {
    const res = state.history.list.filter(
      transaction => (transaction.date ?? 0) >= new Date(startDate).getTime(),
    )

    return res
  }

  return state.history.list
}

export const selectExpenseTotalByCategory = createSelector([slHistory], history => {
  const expenseTotalsByCategory: { [category: string]: number } = {}

  // Iterate through each transaction and add up the expenses by category
  history.forEach(transaction => {
    if (transaction.amount !== 0) {
      const { category } = transaction

      if (expenseTotalsByCategory[category] === undefined) {
        expenseTotalsByCategory[category] = 0
      }

      expenseTotalsByCategory[category] += Math.abs(transaction.amount)
    }
  })

  return expenseTotalsByCategory
})
