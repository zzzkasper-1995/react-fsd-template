import React from 'react'

import { Box } from '@mui/system'
import { expenseCategories } from 'enteties/transaction/types'
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'

import { selectExpenseTotalByCategory } from 'feature/history/model/selectors'
import { useAppSelector } from 'shared/hooks/store/useAppSelector'

import CategoryLegend from './components/CategoryLegend'

const ExpenseChart = () => {
  const expenseTotalsByCategory = useAppSelector(selectExpenseTotalByCategory)

  const chartData = Object.entries(expenseTotalsByCategory).map(([category, totalExpense]) => ({
    name: expenseCategories[category].name,
    value: totalExpense,
    color: expenseCategories[category].color,
  }))

  return (
    <Box>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <CategoryLegend />
    </Box>
  )
}

export default ExpenseChart
