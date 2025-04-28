import * as Assert from '../Assert/Assert.ts'
import * as ExecuteProvider from '../ExecuteProvider/ExecuteProvider.ts'

export const listProcesses = async (debugId: any): Promise<readonly any[]> => {
  const processes = await ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.listProcesses',
    params: [debugId],
    noProviderFoundMessage: 'no debug provider found',
  })
  Assert.array(processes)
  return processes
}

export const resume = (debugId: any): Promise<void> => {
  return ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.resume',
    params: [debugId],
    noProviderFoundMessage: 'no debug provider found',
  })
}

export const pause = (debugId: any): Promise<any> => {
  return ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.pause',
    params: [debugId],
    noProviderFoundMessage: 'no debug provider found',
  })
}

export const stepOver = (debugId: any): Promise<any> => {
  return ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.stepOver',
    params: [debugId],
    noProviderFoundMessage: 'no debug provider found',
  })
}

export const stepInto = (debugId: any): Promise<any> => {
  return ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.stepInto',
    params: [debugId],
    noProviderFoundMessage: 'no debug provider found',
  })
}

export const stepOut = (debugId: any): Promise<any> => {
  return ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.stepOut',
    params: [debugId],
    noProviderFoundMessage: 'no debug provider found',
  })
}

export const step = (debugId: any): Promise<any> => {
  return ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.step',
    params: [debugId],
    noProviderFoundMessage: 'no debug provider found',
  })
}

export const setPauseOnExceptions = (debugId: any, value: any): Promise<any> => {
  return ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.setPauseOnExceptions',
    params: [debugId, value],
    noProviderFoundMessage: 'no debug provider found',
  })
}

export const start = (debugId: any): Promise<any> => {
  return ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.start',
    params: [debugId],
    noProviderFoundMessage: 'no debug provider found',
  })
}

export const getProperties = (debugId: any, objectId: any): Promise<any> => {
  return ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.getProperties',
    params: [debugId, objectId],
    noProviderFoundMessage: 'no debug provider found',
  })
}

export const evaluate = (debugId: any, expression: any, callFrameId: any): Promise<any> => {
  return ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.evaluate',
    params: [debugId, expression, callFrameId],
    noProviderFoundMessage: 'no debug provider found',
  })
}
