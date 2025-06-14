import * as EditorWorker from '../EditorWorker/EditorWorker.ts'
import { getDebugUri } from '../GetDebugUri/GetDebugUri.ts'
import * as OpenUri from '../OpenUri/OpenUri.ts'
import * as RunAndDebugStates from '../RunAndDebugStates/RunAndDebugStates.ts'

export const getKey = (): number => {
  const keys = RunAndDebugStates.getKeys()
  return keys[0]
}

export const openAtPausedLocation = async (): Promise<void> => {
  const key = getKey()
  // TODO ask renderer worker to open file
  const { newState } = RunAndDebugStates.get(key)
  const { callStack } = newState
  if (callStack.length === 0) {
    return
  }
  const first = callStack[0]
  const { functionLocation } = first
  const { scriptId, lineNumber, columnNumber } = functionLocation
  const uri = getDebugUri(key, scriptId)
  const rowIndex = lineNumber
  const columnIndex = columnNumber
  const languageId = 'javascript' // TODO
  await OpenUri.openUri(uri, languageId, rowIndex, columnIndex)

  // @ts-ignore
  await EditorWorker.invoke('Editor.updateDebugInfo', key)
}
