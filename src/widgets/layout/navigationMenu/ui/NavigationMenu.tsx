import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

import useStyles from './NavigationMenu.styles'

interface NavigationMenuProps {
  onClose: () => void
}

export function NavigationMenu({ onClose }: NavigationMenuProps) {
  const classes = useStyles()
  const navigate = useNavigate()

  const menuItems = useMemo(
    () => [
      {
        label: 'Создать заявку',
        path: '#',
      },
      {
        label: 'Текущие заявки',
        path: '#',
      },
      {
        label: 'Статистика',
        path: '#',
      },
    ],
    [],
  )

  return (
    <>
      <IconButton className={classes.closeButton} onClick={onClose}>
        <CloseRoundedIcon />
      </IconButton>
      
      <List>
        {menuItems.map(item => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              onClick={() => navigate(item.path)}
              selected={!!item.path && location.pathname.includes(item.path)}
            >
              <ListItemText primary={item.label} className={classes.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  )
}
