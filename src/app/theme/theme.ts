import { createTheme, alpha } from '@mui/material'
import { Theme } from '@mui/material/styles'

import { BLACK, DARK_NORMAL, LIGHT_GRAY, PRIMARY_DARK, PRIMARY_MAIN, WHITE } from '../../shared/palette'

// NOTE: Since makeStyles is now exported from @mui/styles package which does not know about
// Theme in the core package. To fix this, you need to augment the DefaultTheme (empty object)
// in @mui/styles with Theme from the core.

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

export const theme = createTheme({
  typography: {
    fontFamily: '"SBSansText", Arial',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: WHITE,
          boxShadow: `0px 2px 4px ${alpha(BLACK, 0.1)}`,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: `${alpha(PRIMARY_MAIN, 0.1)}`,
          },
          '&.Mui-selected': {
            backgroundColor: '#fff0',
            '&:hover': {
              backgroundColor: `${alpha(PRIMARY_MAIN, 0.1)}`,
            },
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          padding: '8px 16px',
          minWidth: 'min-content',
          fontSize: 16,
          fontWeight: 400,
          textTransform: 'initial',
          lineHeight: '16px',
          letterSpacing: 'normal',
        },
        contained: {
          boxShadow: 'none',

          '&:disabled': {
            backgroundColor: LIGHT_GRAY,
            color: alpha(BLACK, 0.38),
          },
        },
        containedPrimary: {
          backgroundColor: PRIMARY_MAIN,

          '&:hover': {
            backgroundColor: PRIMARY_MAIN,
            boxShadow: `0 2px 4px 0 ${alpha(PRIMARY_MAIN, 0.2)}`,
          },
          '&:active': {
            backgroundColor: PRIMARY_DARK,
          },
        },
        containedSecondary: {
          color: WHITE,
        },
        containedSizeSmall: {
          padding: '6px 8px',
          fontSize: 12,
          height: 32,
          borderRadius: 16,
        },
        containedSizeLarge: {
          padding: '12px 24px',
          fontSize: 16,
          height: 48,
          borderRadius: 24,
        },
      },
    },
  },
  palette: {
    custom: {
      main: '#0585ff',
      dark: '#003aff',
      income: '#66cc99',
      expense: '#f66',
    },
    primary: {
      main: PRIMARY_MAIN,
    },
    background: {
      paper: '#F4F4F9',
      default: '#fff',
    },
    text: {
      primary: DARK_NORMAL,
    },
  },
})

/** Добавляем новые наборы цветов в палитру темы */
declare module '@mui/material/styles' {
  interface Palette {
    custom: Palette['primary']
  }

  interface PaletteOptions {
    custom: {
      main: React.CSSProperties['color']
      dark: React.CSSProperties['color']
      income: React.CSSProperties['color']
      expense: React.CSSProperties['color']
    }
  }

  interface PaletteColor {
    main: string
    dark: string
    income: string
    expense: string
  }

  interface SimplePaletteColorOptions {
    main: string
    dark?: string
    income?: string
    expense?: string
  }
}
