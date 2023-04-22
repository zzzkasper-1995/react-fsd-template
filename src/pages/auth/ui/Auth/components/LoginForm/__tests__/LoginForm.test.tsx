import React from 'react'

import { render, screen } from '@testing-library/react'

import { MockProviders } from 'tests/mocks'

import { LoginForm } from '..'
import * as LoginFormHooks from '../LoginForm.hooks'

const mockedUseAuthSberId = jest.spyOn(LoginFormHooks, 'useAuthSberId')
mockedUseAuthSberId.mockImplementation(jest.fn())

describe('LoginForm', () => {
  beforeEach(() => {
    mockedUseAuthSberId.mockImplementation(() => ({
      onGoToSberAuth: jest.fn(),
      isFetch: false,
    }))
  })

  it('отрисовывает форму', () => {
    render(
      <MockProviders>
        <LoginForm />
      </MockProviders>,
    )

    const loginForm = screen.getByTestId('loginForm')
    expect(loginForm).toBeInTheDocument()
  })

  it('отрисовывает кнопку', () => {
    render(
      <MockProviders>
        <LoginForm />
      </MockProviders>,
    )

    const loginButton = screen.getByTestId('loginButton')
    expect(loginButton).toBeInTheDocument()
  })

  it('отображает индикатор загрузки в кнопке, когда isFetch равно true', () => {
    mockedUseAuthSberId.mockImplementation(() => ({
      onGoToSberAuth: jest.fn(),
      isFetch: true,
    }))

    render(
      <MockProviders>
        <LoginForm />
      </MockProviders>,
    )

    const circularProgress = screen.getByRole('progressbar')
    expect(circularProgress).toBeInTheDocument()
  })
})
