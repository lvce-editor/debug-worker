import type { Highlight } from '../Highlight/Highlight.ts'
import * as RunAndDebugStates from '../RunAndDebugStates/RunAndDebugStates.ts'

export const getHighlight = (uid: number): Highlight => {
  const state = RunAndDebugStates.get(uid)
  if (!state) {
    return {
      uri: '',
      rowIndex: 0,
      columnIndex: 0,
    }
  }
  const { newState } = state
  const { parsedScripts, callStack } = newState
  const top = callStack[0]
  const { functionLocation } = top
  const { scriptId, lineNumber, columnNumber } = functionLocation
  const script = parsedScripts[scriptId]
  return {
    uri: script.url,
    rowIndex: lineNumber,
    columnIndex: columnNumber,
  }
}
