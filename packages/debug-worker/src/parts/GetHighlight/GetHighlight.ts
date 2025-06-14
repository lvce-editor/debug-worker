import type { Highlight } from '../Highlight/Highlight.ts'
import * as RunAndDebugStates from '../RunAndDebugStates/RunAndDebugStates.ts'

const emptyHighlight: Highlight = {
  uri: '',
  rowIndex: 0,
  columnIndex: 0,
}

export const getHighlight = (uid: number): Highlight => {
  const state = RunAndDebugStates.get(uid)
  if (!state) {
    return emptyHighlight
  }
  const { newState } = state
  const { parsedScripts, callStack } = newState
  if (callStack.length === 0) {
    return emptyHighlight
  }
  const top = callStack[0]
  const { location } = top
  const { scriptId, lineNumber, columnNumber } = location
  const script = parsedScripts[scriptId]
  if (!script) {
    return emptyHighlight
  }
  return {
    uri: script.url,
    rowIndex: lineNumber,
    columnIndex: columnNumber,
  }
}
