import { Transaction } from '../types'

export const createTransaction = ({ id, date, category, amount, description }: Transaction): Transaction => ({
  id,
  date,
  category,
  amount,
  description,
})
