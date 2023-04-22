import { Transaction } from '../types'

export const createTransaction = ({
  id,
  date,
  category,
  amount,
  description,
}: Omit<Transaction, 'id'> & { id?: string }): Transaction => ({
  id: id ?? `${Math.random() * 10000000000}`,
  date,
  category,
  amount,
  description,
})
