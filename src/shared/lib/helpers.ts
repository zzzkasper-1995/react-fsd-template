export const exhaustiveCheck = (value: never) => value

export const filterDigitsFromString = (str: string) => str.replace(/[^0-9]/g, '')

export const getLocaleStringFromNumeric = (value: string | number) => {
  switch (typeof value) {
    case 'string': {
      const parsedNumber = parseInt(filterDigitsFromString(value), 10) || null

      return parsedNumber ? parsedNumber.toLocaleString('ru-RU') : ''
    }
    case 'number':
      return value.toLocaleString('ru-RU')
    default:
      return ''
  }
}

export const addSuffix = (value: number | string, suffix: string, nowrap: boolean = false) => {
  const NON_BREAKING_SPACE = '\u00A0'

  return value + (nowrap ? NON_BREAKING_SPACE : ' ') + suffix
}

export const removeSpaces = (str: string) => str.replace(/\s/g, '')

export function downloadBlob(blob: Blob, fileName: string) {
  const url = window.URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', `${fileName}.pdf`)

  document.body.appendChild(link)
  link.click()
  link.remove()
}
