import React, { useState } from 'react'

import { Box, Button, Typography } from '@material-ui/core'
import { Skeleton } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import { setFilter } from 'feature/history/model/historySlice'
import { useAppDispatch } from 'shared/hooks/store/useAppDispatch'

const useStyles = makeStyles(theme => ({
  main: { marginBottom: theme.spacing(2) },
  btn: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(2),
  },
}))

const DateRangePicker = ({ isLoading }: { isLoading?: boolean }) => {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  const [startDate, setStartDate] = useState<null | Date>(null)

  const handleStartDateChange = (date: any) => {
    setStartDate(date)
  }

  const handleApplyClick = () => {
    if (startDate) {
      dispatch(setFilter([new Date(startDate)]))
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box display="flex" alignItems="center" className={classes.main}>
        <Box mr={2}>
          <Typography variant="subtitle1">Начало периода:</Typography>
          {isLoading ? (
            <Skeleton variant="text" width={200} />
          ) : (
            <DatePicker value={startDate} onChange={handleStartDateChange} />
          )}
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleApplyClick}
          disabled={!startDate}
          className={classes.btn}
        >
          Применить
        </Button>
      </Box>
    </LocalizationProvider>
  )
}

export default DateRangePicker
