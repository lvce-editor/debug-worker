const RE_NO_DEBUG_PROVIDER_FOUND = /no debug provider "([^"]+)" found/

export const getDebugProviderName = (error: any): string => {
  const message = error?.message || ''
  const match = RE_NO_DEBUG_PROVIDER_FOUND.exec(message)
  if (!match) {
    return ''
  }
  return match[1]
}

export const isNoDebugProviderFound = (error: any): boolean => {
  return getDebugProviderName(error) !== ''
}
