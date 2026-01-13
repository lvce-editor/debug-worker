import type { Highlight } from '../Highlight/Highlight.ts'
import * as RunAndDebugStates from '../RunAndDebugStates/RunAndDebugStates.ts'

const emptyHighlight: Highlight = {
  columnIndex: 0,
  rowIndex: 0,
  uri: '',
}

export const getHighlight = (uid: number): Highlight => {
  const state = RunAndDebugStates.get(uid)
  if (!state) {
    return emptyHighlight
  }
  const { newState } = state
  const { callStack, parsedScripts } = newState
  if (callStack.length === 0) {
    return emptyHighlight
  }
  const top = callStack[0]
  const { location } = top
  const { columnNumber, lineNumber, scriptId } = location
  const script = parsedScripts[scriptId]
  if (!script) {
    return emptyHighlight
  }
  return {
    columnIndex: columnNumber,
    rowIndex: lineNumber,
    uri: script.url,
  }
}
