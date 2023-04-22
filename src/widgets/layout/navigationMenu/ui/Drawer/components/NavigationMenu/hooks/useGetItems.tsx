import React, { useMemo } from 'react'

import { ReactComponent as OrderCreateIcon } from 'assets/icons/orderCreate.svg'
import { ReactComponent as OrderCreateIconSelected } from 'assets/icons/orderCreateSelected.svg'
import { ReactComponent as OrderListIcon } from 'assets/icons/orderList.svg'
import { ReactComponent as OrderListIconSelected } from 'assets/icons/orderListSelected.svg'
import { appRoutePaths } from 'shared/navigation/routerPaths'
import { AuthType } from 'widgets/auth/checkToken/types'

import { MenuItem } from './types'
import { useGetLogoutBtn } from './useGetLogoutBtn'

type UseGetItemsProps = {
  authType: AuthType
}

export const useGetItems = (props: UseGetItemsProps): MenuItem[] => {
  const { authType } = props

  const logoutItems = useGetLogoutBtn({ authType })

  const menuItems = useMemo(() => {
    switch (authType) {
      case 'auth': {
        const items: MenuItem[] = [
          {
            label: 'Создать',
            icon: ({ isSelected }) => (isSelected ? <OrderCreateIconSelected /> : <OrderCreateIcon />),
            path: appRoutePaths.main,
          },
          {
            label: 'История',
            icon: ({ isSelected }) => (isSelected ? <OrderListIconSelected /> : <OrderListIcon />),
            path: appRoutePaths.main,
          },
        ]

        if (logoutItems) {
          items.push(logoutItems)
        }

        return items
      }
      default: {
        return []
      }
    }
  }, [authType, logoutItems])

  return menuItems
}
