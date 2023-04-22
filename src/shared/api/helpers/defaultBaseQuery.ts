import { BaseQueryFn } from '@reduxjs/toolkit/query/react'

import { transformRequestData, transformResponseData } from 'shared/lib/utils'
import { appRoutePaths } from 'shared/navigation/routerPaths'

import { authToken } from '../token'

type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK'

export interface ErrorInfo {
  code: string
  description: string
  data?: {
    description?: string
  }
}

export interface GenericResponse<T> {
  data: T
  success: boolean
  errors: ErrorInfo[]
}

export const defaultBaseQuery =
  <ResponseType, RequestType>({
    baseUrl,
  }: {
    baseUrl: string
  }): BaseQueryFn<
    {
      url: string
      method?: Method
      body?: RequestType
      options?: any
      responseHandler?: (response: Response) => Promise<any>
    },
    unknown,
    unknown
  > =>
  async ({ url, method = 'POST', body, options, responseHandler }) => {
    const jwt = authToken.jwt.get()
    // const userSessionId = getUserSessionId()

    const headers: Record<string, string> = {}
    headers['Content-Type'] = 'application/json'

    if (jwt) {
      headers['Authorization'] = `Bearer ${jwt}`
    }
    // if (userSessionId) {
    //   headers['X-Session-Id'] = userSessionId
    // }

    const formattedBody = body ? JSON.stringify(transformRequestData(body)) : null
    const optionsWithToken = { body: formattedBody, headers, method, ...options }

    return fetch(baseUrl + url, optionsWithToken)
      .then(async response => {
        if (responseHandler) {
          return responseHandler(response)
        }

        if (response.status === 401 && window.location.pathname !== appRoutePaths.auth) {
          window.location.replace(appRoutePaths.auth)

          return
        }

        const transformedResponse: GenericResponse<ResponseType> = transformResponseData(
          await response.json(),
        )

        if (!response.ok) {
          throw transformedResponse
        }

        const { data } = transformedResponse

        return { data }
      })
      .catch(error => {
        console.warn(error)

        return { error }
      })
  }
