import { Transaction } from 'enteties/transaction'

export const getHistoryResponse: Transaction[] = [
  {
    id: '1',
    date: new Date('2022-04-20').getTime(),
    category: 'groceries',
    amount: 50.0,
    description: 'Bought groceries for the week',
  },
  {
    id: '2',
    date: new Date('2022-04-21').getTime(),
    category: 'transportation',
    amount: -25.0,
    description: 'Filled up gas tank',
  },
  {
    id: '3',
    date: new Date('2022-04-22').getTime(),
    category: 'entertainment',
    amount: 10.0,
    description: 'Bought movie tickets',
  },
]
