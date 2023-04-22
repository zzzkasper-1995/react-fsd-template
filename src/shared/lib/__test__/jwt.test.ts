import { disableConsole } from 'tests/utils'
import { parseJwt } from 'shared/lib/jwt'

disableConsole('error')

describe('parseJwt', () => {
  it('Успешный парсинг', () => {
    expect(
      parseJwt(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzM5MDMwMDYsImlhdCI6MTY3MzgxNjYwNiwiaXNzIjoiYXV0aC1hcGkiLCJzdWIiOiI3MDU0NDQiLCJzY29wZXMiOlsidXNlcjptYW5hZ2VyIiwidXNlcjpkZXZlbG9wZXIiLCJ1c2VyOmVtcGxveWVlIiwidXNlcjphdWN0aW9uX21hbmFnZXIiXX0.gNuPdMNN9ZE4e1W_oTLQXiufIVOFCDNgrQlFWhyrN-c',
      ),
    ).toStrictEqual({
      exp: 1673903006,
      iat: 1673816606,
      iss: 'auth-api',
      sub: '705444',
      scopes: ['user:manager', 'user:developer', 'user:employee', 'user:auction_manager'],
    })
  })

  it('Передан не jwt', () => {
    expect(() => parseJwt('tuts')).toThrowError()
  })
})
