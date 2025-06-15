import * as ExtensionHostDebug from '../ExtensionHostDebug/ExtensionHostDebug.ts'
import { getKey, openAtPausedLocation } from '../OpenAtPausedLocation/OpenAtPausedLocation.ts'
import * as RendererWorker from '../RendererWorker/RendererWorker.ts'
import { updateDebugInfo } from '../UpdateDebugInfo/UpdateDebugInfo.ts'

export const create = (debugId: any): any => {
  return {
    debugId,
  }
}

export const start = async (id: any): Promise<any> => {
  return ExtensionHostDebug.start(id)
}

export const listProcesses = async (id: any): Promise<any> => {
  return ExtensionHostDebug.listProcesses(id)
}

export const resume = async (id: any): Promise<any> => {
  return ExtensionHostDebug.resume(id)
}

export const pause = async (id: any): Promise<any> => {
  return ExtensionHostDebug.pause(id)
}

export const stepOver = async (id: any): Promise<any> => {
  return ExtensionHostDebug.stepOver(id)
}

export const stepInto = async (id: any): Promise<any> => {
  return ExtensionHostDebug.stepInto(id)
}

export const stepOut = async (id: any): Promise<any> => {
  return ExtensionHostDebug.stepOut(id)
}

export const step = async (id: any): Promise<any> => {
  return ExtensionHostDebug.step(id)
}

export const setPauseOnExceptions = async (id: any, value: any): Promise<any> => {
  return ExtensionHostDebug.setPauseOnExceptions(id, value)
}

export const getProperties = async (id: any, objectId: any): Promise<any> => {
  return ExtensionHostDebug.getProperties(id, objectId)
}

export const evaluate = async (id: any, expression: any, callFrameId: any): Promise<any> => {
  return ExtensionHostDebug.evaluate(id, expression, callFrameId)
}

export const scriptParsed = async (script: any): Promise<void> => {
  // TODO find a better way to inform renderer worker about
  // without sending the data to renderer worker
  await RendererWorker.invoke('Run And Debug.handleScriptParsed', script)
}

export const paused = async (params: any): Promise<void> => {
  await RendererWorker.invoke('Run And Debug.handlePaused', params)
  await openAtPausedLocation()
}

export const resumed = async (params: any): Promise<void> => {
  await RendererWorker.invoke('Run And Debug.handleResumed', params)
  const key = getKey()
  await updateDebugInfo(key)
}

export const handleChange = async (params: any): Promise<void> => {
  // @ts-ignore
  await RendererWorker.invoke('Run And Debug.handleChange', params)
}
