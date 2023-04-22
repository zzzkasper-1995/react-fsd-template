import { makeStyles } from '@mui/styles'

import { DARK_NORMAL } from 'shared/palette'

export default makeStyles(theme => ({
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(3),
    width: '100%',

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-between',
    },

    '& p': {
      color: DARK_NORMAL,
      fontWeight: 600,
    },
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    marginLeft: theme.spacing(-1),
    color: 'inherit',
    textDecoration: 'none',

    '& svg': {
      width: 150,
      height: 24,
    },
  },
  burgerIcon: {
    fill: DARK_NORMAL,
  },
  arrowIcon: {
    color: DARK_NORMAL,
  },
}))
