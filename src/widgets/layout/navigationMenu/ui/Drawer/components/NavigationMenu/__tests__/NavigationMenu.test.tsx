import React from 'react'

import { render, screen } from '@testing-library/react'

import { MockProviders } from 'tests/mocks'

import { MenuItem } from '../hooks/types'
import * as UseGetItemsHook from '../hooks/useGetItems'
import * as UseGetLogoutBtnHook from '../hooks/useGetLogoutBtn'
import { NavigationMenu } from '../NavigationMenu'

const mockedUseGetItems = jest.spyOn(UseGetItemsHook, 'useGetItems')
mockedUseGetItems.mockImplementation(jest.fn())

const mockedUseGetLogoutBtn = jest.spyOn(UseGetLogoutBtnHook, 'useGetLogoutBtn')
mockedUseGetLogoutBtn.mockImplementation(jest.fn())

const authType = 'auth'

describe('NavigationMenu', () => {
  let mockMenuItems: MenuItem[] = []
  let mockLogoutItem: MenuItem = {} as MenuItem

  beforeEach(() => {
    mockMenuItems = [
      {
        label: 'Создать заявку',
        icon: ({ isSelected }) => <div>Создать заявку{isSelected}</div>,
        path: '/create_order',
      },
      {
        label: 'Текущие заявки',
        icon: ({ isSelected }) => <div>Текущие заявки{isSelected}</div>,
        path: '/order_list',
      },
    ]

    mockLogoutItem = {
      label: 'Выйти',
      icon: () => <div>Выйти</div>,
      path: '/auth',
      onCallback: jest.fn(),
    }

    mockedUseGetItems.mockImplementation(() => mockMenuItems)
    mockedUseGetLogoutBtn.mockImplementation(() => mockLogoutItem)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('отображает табы для каждого элемента меню', () => {
    render(
      <MockProviders>
        <NavigationMenu authType={authType} />
      </MockProviders>,
    )

    const tabs = screen.getAllByRole('tab')

    expect(tabs).toHaveLength(mockMenuItems.length)
  })

  it('вызывает onCallback для кнопки выхода и перенаправляет на страницу авторизации', () => {
    render(
      <MockProviders>
        <NavigationMenu authType={authType} />
      </MockProviders>,
    )

    const logoutBtn = screen.getByTestId('logoutBtn')
    expect(logoutBtn).toBeInTheDocument()
  })
})
