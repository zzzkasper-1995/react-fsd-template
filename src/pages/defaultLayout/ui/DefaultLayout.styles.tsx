import { makeStyles } from '@mui/styles'

import { WHITE } from 'shared/palette'

const NAVIGATION_MENU_WIDTH = 170
const FULLWIDTH_BREAKPOINT = 270

export const useStyles = makeStyles(theme => ({
  globalContainer: {
    display: 'flex',

    [theme.breakpoints.down('sm')]: {
      display: 'unset',
    },
  },
  appBar: {
    '&&': {
      zIndex: theme.zIndex.drawer + 1,

      [theme.breakpoints.down('sm')]: {
        zIndex: theme.zIndex.drawer,
      },
    },
  },
  main: {
    flexGrow: 1,
  },
  navigationMenuDrawer: {
    width: `${NAVIGATION_MENU_WIDTH}px`,

    [theme.breakpoints.down(FULLWIDTH_BREAKPOINT)]: {
      width: 'auto',
    },

    '& .MuiDrawer-paper': {
      width: `${NAVIGATION_MENU_WIDTH}px`,
      background: WHITE,

      [theme.breakpoints.down('sm')]: {
        background: WHITE,
      },

      [theme.breakpoints.down(FULLWIDTH_BREAKPOINT)]: {
        width: '100%',
      },
    },
  },
}))
