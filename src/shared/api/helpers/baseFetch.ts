import Cookies from 'js-cookie'

import { CLIENT_JWT } from 'shared/lib/jwt'

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

interface Options<RequestType> {
  headers?: Record<string, string>
  data?: RequestType
  method?: Method
  sendSessionId?: boolean
  isResponseBlob?: boolean
  isReadOnly?: boolean
  withCredentials?: boolean
}

const genericRequest = async <RequestType, ResponseType>(
  url: string,
  options: Options<RequestType> = {},
): Promise<ResponseType> => {
  const {
    headers: additionalHeaders,
    isResponseBlob = false,
    isReadOnly = false,
    data,
    withCredentials = true,
    ...opt
  } = options

  const headers = new Headers({
    'Content-Type': 'application/json',
    ...additionalHeaders,
  })

  if (withCredentials) {
    headers.append('Authorization', `Bearer ${Cookies.get(CLIENT_JWT)}`)
  }

  return fetch(`${url}${isReadOnly ? '?readonly=true' : ''}`, {
    body: data ? JSON.stringify(data) : null,
    headers,
    ...opt,
  })
    .then(async response => {
      if (isResponseBlob) {
        return (await response.blob()) as any
      }

      if (!response.ok) {
        throw await response.json()
      }

      const data: ResponseType = await response.json()

      return data
    })
    .catch(error => {
      if (
        error.errors?.some(
          (error: { code: string }) =>
            error.code === 'Unauthenticated' && window.location.pathname !== '/login',
        )
      ) {
        window.location.replace('/login')
      } else {
        return error
      }
    })
}

export const baseFetch = {
  post: <RequestType, ResponseType>(url: string, options: Options<RequestType> = {}) =>
    genericRequest<RequestType, ResponseType>(url, { ...options, method: 'POST' }),
  get: <RequestType, ResponseType>(url: string, options: Options<RequestType> = {}) =>
    genericRequest<RequestType, ResponseType>(url, { ...options, method: 'GET' }),
}
