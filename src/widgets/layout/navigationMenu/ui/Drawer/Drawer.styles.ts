import { makeStyles } from '@mui/styles'

const DRAWER_WIDTH = 198

export const useStyles = makeStyles(theme => ({
  globalContainer: {
    display: 'flex',

    [theme.breakpoints.down('sm')]: {
      display: 'unset',
    },
  },
  appBar: {
    '&&': {
      [theme.breakpoints.down('sm')]: {
        zIndex: theme.zIndex.drawer,
      },
    },
  },
  main: {
    flexGrow: 1,
  },
  logo: {
    alignItems: 'center',
    gap: theme.spacing(1),
    color: 'inherit',
    textDecoration: 'none',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(4),
    marginLeft: 0,

    '& svg': {
      width: 150,
      height: 24,
    },
  },
  navigationMenuDrawer: {
    zIndex: theme.zIndex.drawer + 1,
    height: '100%',

    '& .MuiDrawer-paper': {
      height: '100%',
      position: 'relative',
      width: DRAWER_WIDTH,
      background: theme.palette.background.default,
      'border-right': 0,
    },
    '&.MuiDrawer-docked': {
      height: '100%',
    },
  },
}))
