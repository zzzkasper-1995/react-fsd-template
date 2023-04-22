import { renderHook, act } from '@testing-library/react-hooks'
import Cookies from 'js-cookie'

import { COOKIE_JWT_TOKEN } from 'common/auth/constants'
import { COOKIE_POINT_OF_SALE } from 'entities/pointOfSale/constants'

import { useLogout } from '../useLogout'

jest.mock('js-cookie', () => ({
  remove: jest.fn(),
}))

describe('useLogout', () => {
  it('токены авторизации и точки продаж пользователя удаляется из cookie при выходе из системы', () => {
    const { result } = renderHook(() => useLogout())

    act(() => {
      result.current.onLogout()
    })

    expect(Cookies.remove).toBeCalledTimes(2)
    expect(Cookies.remove).toHaveBeenNthCalledWith(1, COOKIE_JWT_TOKEN)
    expect(Cookies.remove).toHaveBeenNthCalledWith(2, COOKIE_POINT_OF_SALE)
  })
})
