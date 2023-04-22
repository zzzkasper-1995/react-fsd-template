import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'

import { appRoutes } from 'shared/navigation/routerPaths'
import { ReactComponent as MainLogo } from 'assets/icons/mainLogo.svg'
import useStyles from './Header.styles'

interface HeaderProps {}

export function Header(props: HeaderProps) {
  const classes = useStyles()

  const header = useMemo(
    () => (
      <Link className={classes.logo} to={appRoutes.main()}>
        <MainLogo />
      </Link>
    ),
    [classes],
  )

  return <div className={classes.headerContainer}>{header}</div>
}
