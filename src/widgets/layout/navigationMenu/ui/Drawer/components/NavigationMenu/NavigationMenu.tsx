import React, { useCallback } from 'react'

import { Tab, Tabs } from '@mui/material'
import { useNavigate, useLocation, matchPath } from 'react-router-dom'

import { AuthType } from 'widgets/auth/checkToken/types'

import { MenuItem } from './hooks/types'
import { useGetItems } from './hooks/useGetItems'
import useStyles from './NavigationMenu.styles'

type Props = {
  authType: AuthType
}

export function NavigationMenu(props: Props) {
  const { authType } = props

  const classes = useStyles()
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = useGetItems({ authType })

  const onClick = useCallback(
    (item: MenuItem) => {
      item?.onCallback?.()
      navigate(item.path)
    },
    [navigate],
  )

  const handleChange = useCallback(
    (event: React.SyntheticEvent, index: number) => {
      onClick(menuItems[index])
    },
    [menuItems, onClick],
  )

  const renderItem = useCallback(
    (item: MenuItem, index: number) => {
      const isSelected = !!matchPath(item.path, location.pathname)
      const id = `${item.label}_${item.path}`
      const tabProps = { id, key: id, 'aria-controls': `vertical-tabpanel-${index}` }
      const icon = item?.icon?.({ isSelected })

      return <Tab {...tabProps} label={item.label} icon={icon} className={classes.tab} />
    },
    [classes, location.pathname],
  )

  const value = Math.max(
    menuItems.findIndex(item => matchPath(item.path, location.pathname)),
    0,
  )

  return (
    <>
      {!!menuItems.length && (
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          className={classes.tabs}
        >
          {menuItems.map(renderItem)}
        </Tabs>
      )}
    </>
  )
}
