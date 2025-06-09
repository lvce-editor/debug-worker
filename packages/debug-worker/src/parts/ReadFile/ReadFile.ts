import * as ExtensionHostDebug from '../ExtensionHostDebug/ExtensionHostDebug.ts'
import * as RunAndDebugStates from '../RunAndDebugStates/RunAndDebugStates.ts'

interface ParsedUri {
  readonly key: number
  readonly scriptId: string
}

const parseUri = (uri: string): ParsedUri => {
  const parts = uri.split('/')
  const key = Number.parseInt(parts[1])
  const scriptId = parts[2]
  return {
    key,
    scriptId,
  }
}

export const readFile = async (uri: string): Promise<string> => {
  const { key, scriptId } = parseUri(uri)
  const instance = RunAndDebugStates.get(key)
  if (!instance) {
    return ''
  }
  const { newState } = instance
  const { debugId } = newState
  const content = await ExtensionHostDebug.getScriptSource(debugId, scriptId)
  return content
}
