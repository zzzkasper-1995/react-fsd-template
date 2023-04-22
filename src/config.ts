const env = <T extends string>(key: string): T => {
  const value = process.env[key]
  if (value) {
    return value as T
  }

  // Енвы могут отсутствовать в зависимости от окружения и их отсутствие не должно ронять приложение
  console.warn(`${key} is undefined!`)

  return '' as T
}

export const appConfig = {
  apiUrl: env('REACT_APP_API_URL'),
}
