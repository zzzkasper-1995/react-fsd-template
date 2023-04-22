export const expenseCategories: { [key: string]: Category } = {
  groceries: {
    name: 'Продукты',
    color: '#7CB342',
  },
  dining: {
    name: 'Кафе',
    color: '#F44336',
  },
  transportation: {
    name: 'Транспорт',
    color: '#FF9800',
  },
  housing: {
    name: 'Жилье',
    color: '#2196F3',
  },
  utilities: {
    name: 'Коммунальные услуги',
    color: '#673AB7',
  },
  entertainment: {
    name: 'Развлечения',
    color: '#E91E63',
  },
  clothing: {
    name: 'Одежда',
    color: '#9C27B0',
  },
  health: {
    name: 'Здоровье',
    color: '#00BCD4',
  },
  pets: {
    name: 'Домашние животные',
    color: '#795548',
  },
  travel: {
    name: 'Путешествия',
    color: '#009688',
  },
}

export type Category = {
  name: string
  color: string
}

export type Transaction = {
  id: string
  date: undefined | number
  category: string
  amount: number
  description: string
}
