import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
  pointOfSaleFormContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '416px',
    boxSizing: 'border-box',
    padding: theme.spacing(3),
    gap: theme.spacing(3),
    borderRadius: 4 * theme.shape.borderRadius,
    boxShadow: `0 4px 16px ${theme.palette.grey[300]}`,
    background: theme.palette.background.default,
  },

  avatarContainer: {
    '&.MuiAvatar-root': {
      width: '100px',
      height: '100px',
      backgroundColor: theme.palette.background.paper,
    },
  },

  formMessage: {
    '&.MuiTypography-root': {
      fontWeight: 600,
      fontSize: 19,
      lineHeight: theme.spacing(3),
    },
  },

  loginButton: {
    width: '100%',
    height: '48px',

    '&.MuiButton-root': {
      borderRadius: 12 * theme.shape.borderRadius,

      background: theme.palette.custom.main,

      '&:hover': {
        background: theme.palette.custom.dark,
      },
    },
  },
}))
