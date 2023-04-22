import { renderHook } from '@testing-library/react-hooks'

import { useGetItems } from '../useGetItems'

describe('useGetItems', () => {
  it('возвращает пустой массив для неавторизованных пользователей', () => {
    const { result } = renderHook(() => useGetItems({ authType: 'no_auth' }))

    expect(result.current).toEqual([])
  })

  it('возвращает массив элементов меню для авторизованных пользователей', () => {
    const { result } = renderHook(() => useGetItems({ authType: 'auth' }))
    const expectedMenuItems = [
      {
        label: 'Создать заявку',
        icon: expect.any(Function),
        path: '/create_order',
      },
      {
        label: 'Текущие заявки',
        icon: expect.any(Function),
        path: '/order_list',
      },
    ]

    expect(result.current).toMatchObject(expectedMenuItems)
  })
})
