import { Transaction } from 'enteties/transaction'

export const getExpenseCategoriesData = (transactions: Transaction[]) => {
  const categories: { [key: string]: number } = {}

  // Вычисляем сумму расходов для каждой категории
  transactions.forEach(transaction => {
    if (transaction.amount < 0) {
      const { category } = transaction
      const amount = -transaction.amount
      if (categories[category]) {
        categories[category] += amount
      } else {
        categories[category] = amount
      }
    }
  })

  // Преобразуем данные в массив объектов, сортируя их по убыванию суммы
  const data = Object.keys(categories).map(category => ({
    name: category,
    value: categories[category],
  }))
  data.sort((a, b) => b.value - a.value)

  return data
}
