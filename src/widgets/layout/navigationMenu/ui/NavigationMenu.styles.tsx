import { makeStyles } from '@mui/styles'

import { DARK_NORMAL, WHITE } from 'shared/palette'

export default makeStyles(theme => ({
  closeButton: {
    '&&': {
      position: 'absolute',
      top: theme.spacing(1),
      left: theme.spacing(1),
      color: WHITE,
    },
  },
  label: {
    '& > span': {
      lineHeight: 0.75,
      color: DARK_NORMAL,

      [theme.breakpoints.down('sm')]: {
        fontWeight: 600,
        color: DARK_NORMAL,
      },
    },
  },
}))
