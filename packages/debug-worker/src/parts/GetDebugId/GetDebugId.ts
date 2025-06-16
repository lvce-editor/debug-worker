export const getDebugId = (isTest: boolean): string => {
  const debugId = isTest ? 'test-debug' : 'node-debug' // TODO
  return debugId
}
