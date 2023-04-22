import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(theme => ({
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',

    [theme.breakpoints.down('sm')]: {
      alignItems: 'unset',
      padding: 0,
      backgroundColor: theme.palette.background.paper,
    },
  },
}))
