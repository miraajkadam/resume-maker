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
