import { Dispatch, SetStateAction } from 'react'

/**
 * JSON stringify the given input
 */
export const stringify = (input: any): string => JSON.stringify(input)

/**
 * timeout that takes 2 seconds to mock a server call
 * can be used for loading effects
 */
export const mockServerCall = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('Loading Done...')
    }, 2000)
  })

export const localStorageGetAndSetState = (
  itemKey: string,
  setter: Dispatch<SetStateAction<string>>
) => {
  const value = localStorage.getItem(itemKey)

  if (value) setter(value)
}

export const localStorageGetParseAndSetState = <T>(
  itemKey: string,
  setter: Dispatch<SetStateAction<T>>
) => {
  const value = localStorage.getItem(itemKey)

  if (value) {
    const parsedValue = JSON.parse(value) as T

    setter(parsedValue)
  }
}
