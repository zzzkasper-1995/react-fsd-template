import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(theme => ({
  globalContainer: {
    display: 'grid',
    gridTemplateColumns: '198px 1fr',
    height: '100%',
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.grey[400]}`,

    '&&': {
      [theme.breakpoints.down('sm')]: {
        zIndex: theme.zIndex.drawer,
      },
    },
  },
  main: {
    flexGrow: 1,
  },
}))
