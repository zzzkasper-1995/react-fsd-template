import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing(2),
    padding: theme.spacing(2, 3),
    width: '100%',
    color: theme.palette.text.primary,
  },
}))
