import React, { useState } from 'react'

import { Button, TextField, MenuItem, FormControl, Select, InputLabel, makeStyles } from '@material-ui/core'
import { Box } from '@mui/system'
import { createTransaction } from 'enteties/transaction/methods/createTransaction'
import { expenseCategories, incomeCategories, Transaction } from 'enteties/transaction/types'
import { useNavigate } from 'react-router-dom'

import { addTransactions } from 'feature/history/model/historySlice'
import { useAppDispatch } from 'shared/hooks/store/useAppDispatch'
import { appRoutePaths } from 'shared/navigation/routerPaths'

const useStyles = makeStyles(theme => ({
  main: {
    padding: theme.spacing(4),
  },
  formControl: {
    marginTop: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  inputField: {
    margin: theme.spacing(1),
  },
  btn: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}))

export const AddTransactionForm = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [type, setType] = useState('expense')
  const [description, setDescription] = useState('')

  const handleSubmit = (event: any) => {
    event.preventDefault()

    if (!amount || !category) {
      return
    }

    dispatch(
      addTransactions([
        createTransaction({
          amount: (type === 'expense' ? -1 : 1) * parseFloat(amount),
          category,
          description,
          date: new Date().getTime(),
        }),
      ]),
    )

    navigate(appRoutePaths.main)
  }

  return (
    <Box className={classes.main}>
      <form onSubmit={handleSubmit}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="transaction-form-category-label">Категория</InputLabel>
          <Select
            labelId="transaction-form-category-label"
            id="transaction-form-category-select"
            value={category}
            onChange={e => setCategory(e.target.value as string)}
            label="Категория"
          >
            {Object.entries(expenseCategories).map(([key, value]) => (
              <MenuItem key={key} value={key}>
                {value.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          className={classes.inputField}
          label="Сумма"
          variant="outlined"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          required
        />
        <TextField
          className={classes.inputField}
          label="Описание"
          variant="outlined"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <Button type="submit" variant="contained" color="primary" className={classes.btn}>
          Добавить
        </Button>
      </form>
    </Box>
  )
}
