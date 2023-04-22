import camelcaseKeys from 'camelcase-keys'
import snakecaseKeys from 'snakecase-keys'

export function transformRequestData(requestData: any) {
  if (typeof requestData === 'object') {
    return snakecaseKeys(requestData, { deep: true })
  }

  return requestData
}

export function transformResponseData(responseData: any) {
  if (typeof responseData === 'object') {
    return camelcaseKeys(responseData, { deep: true })
  }

  return responseData
}

export function formatNumber(number: number) {
  return new Intl.NumberFormat('ru-RU').format(number) + ' руб.'
}

export function formatTerm(term: number) {
  if (term == 1) {
    return `${term} год`
  }
  if (term > 1 && term < 5) {
    return `${term} года`
  }

  return `${term} лет`
}

export function formatPassport(passport: string) {
  return `${passport.slice(0, 2)} ${passport.slice(2, 4)} ${passport.slice(4)}`
}

type CamelToSnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? '_' : ''}${Lowercase<T>}${CamelToSnakeCase<U>}`
  : S

type KeysToSnakeCase<T> = {
  [K in keyof T as CamelToSnakeCase<string & K>]: T[K]
}

/** Нормализуем формат данных в тот, что на сервере (в змеиную) ({userId: 1} => {user_id: 1}) */
export const toSnakecaseKeysData = <T extends object>(data: T): KeysToSnakeCase<T> => {
  if (typeof data !== 'object') {
    throw new Error('data is not object')
  }

  return snakecaseKeys(data, { deep: true }) as KeysToSnakeCase<T>
}

type SnakeToCamelCase<S extends string> = S extends `${infer T}_${infer U}`
  ? `${T}${Capitalize<SnakeToCamelCase<U>>}`
  : S

type KeysToCamelCase<T> = {
  [K in keyof T as SnakeToCamelCase<K & string>]: KeysToCamelCase<T[K]>
}

/** Нормализуем формат данных в тот, что у нас (в верблюжий) ({user_id: 1} => {userId: 1}) */
export const toCamelcaseKeysData = <T extends object>(data: T): KeysToCamelCase<T> => {
  if (typeof data !== 'object') {
    throw new Error('data is not object')
  }

  return camelcaseKeys(data, { deep: true }) as KeysToCamelCase<T>
}
