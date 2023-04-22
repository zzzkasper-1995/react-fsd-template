import React, { useMemo } from 'react'

import useStyles from './Header.styles'

interface HeaderProps {}

export function Header(props: HeaderProps) {
  const classes = useStyles()

  const header = useMemo(() => <div className={classes.headerContainer} />, [classes])

  return <div className={classes.headerContainer}>{header}</div>
}
