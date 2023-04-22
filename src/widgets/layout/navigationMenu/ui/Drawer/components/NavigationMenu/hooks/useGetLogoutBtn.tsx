import React from 'react'

import { ReactComponent as LogoutIcon } from 'assets/icons/logout.svg'
import { appRoutePaths } from 'shared/navigation/routerPaths'
import { AuthType } from 'widgets/auth/checkToken/types'
import { useLogout } from 'widgets/auth/logout'

import { MenuItem } from './types'

type UseGetLogoutBtnProps = {
  authType: AuthType
}

export const useGetLogoutBtn = (props: UseGetLogoutBtnProps): MenuItem | null => {
  const { authType } = props

  const { onLogout } = useLogout()

  if (authType != 'no_auth') {
    return {
      label: 'Выйти',
      icon: () => <LogoutIcon />,
      path: appRoutePaths.auth,
      onCallback: onLogout,
    }
  }

  return null
}
