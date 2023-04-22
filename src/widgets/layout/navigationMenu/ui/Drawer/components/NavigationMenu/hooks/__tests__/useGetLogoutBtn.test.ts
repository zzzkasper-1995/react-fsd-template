import { renderHook } from '@testing-library/react-hooks'

import { useLogout } from 'common/auth/Logout'

import { useGetLogoutBtn } from '../useGetLogoutBtn'

jest.mock('common/auth/Logout', () => ({
  useLogout: jest.fn(),
}))

describe('useGetLogoutBtn', () => {
  beforeEach(() => {
    const onLogout = jest.fn()
    ;(useLogout as jest.Mock).mockImplementation(() => ({ onLogout }))
  })

  it('возвращает null для пользователей с типом авторизации no_auth', () => {
    const { result } = renderHook(() => useGetLogoutBtn({ authType: 'no_auth' }))
    expect(result.current).toBeNull()
  })

  it('возвращает объект кнопки выхода для авторизованных пользователей', () => {
    const { result } = renderHook(() => useGetLogoutBtn({ authType: 'auth' }))
    const expectedLogoutBtn = {
      label: 'Выйти',
      icon: expect.any(Function),
      path: '/auth',
      onCallback: expect.any(Function),
    }

    expect(result.current).toMatchObject(expectedLogoutBtn)
  })
})
