import * as Assert from '../Assert/Assert.ts'
import * as ExecuteProvider from '../ExecuteProvider/ExecuteProvider.ts'

export const listProcesses = async (debugId: any): Promise<readonly any[]> => {
  const processes = await ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.listProcesses',
    params: [debugId],
  })
  Assert.array(processes)
  return processes
}

export const resume = (debugId: any): Promise<void> => {
  return ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.resume',
    params: [debugId],
  })
}

export const pause = (debugId: any): Promise<any> => {
  return ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.pause',
    params: [debugId],
  })
}

export const stepOver = (debugId: any): Promise<any> => {
  return ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.stepOver',
    params: [debugId],
  })
}

export const stepInto = (debugId: any): Promise<any> => {
  return ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.stepInto',
    params: [debugId],
  })
}

export const stepOut = (debugId: any): Promise<any> => {
  return ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.stepOut',
    params: [debugId],
  })
}

export const step = (debugId: any): Promise<any> => {
  return ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.step',
    params: [debugId],
  })
}

export const setPauseOnExceptions = (debugId: any, value: any): Promise<any> => {
  return ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.setPauseOnExceptions',
    params: [debugId, value],
  })
}

export const start = (debugId: any): Promise<any> => {
  return ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.start',
    params: [debugId],
  })
}

export const getProperties = (debugId: any, objectId: any): Promise<any> => {
  return ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.getProperties',
    params: [debugId, objectId],
  })
}

export const evaluate = (debugId: any, expression: any, callFrameId: any): Promise<any> => {
  return ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.evaluate',
    params: [debugId, expression, callFrameId],
  })
}

export const getScriptSource = (debugId: any, scriptId: string): Promise<string> => {
  return ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.getScriptSource',
    params: [debugId, scriptId],
  })
}

export const getPausedStatus = (debugId: any): Promise<any> => {
  return ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.getPausedStatus',
    params: [debugId],
  })
}

export const getCallStack = (debugId: any): Promise<any> => {
  return ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.getCallStack',
    params: [debugId],
  })
}

export const getScopeChain = (debugId: any, callFrameId: any): Promise<any> => {
  return ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.getScopeChain',
    params: [debugId, callFrameId],
  })
}

export const getScripts = (debugId: any): Promise<any> => {
  return ExecuteProvider.executeProvider({
    event: `onDebug:${debugId}`,
    method: 'ExtensionHostDebug.getScripts',
    params: [debugId],
  })
}
