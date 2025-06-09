import type { Highlight } from '../Highlight/Highlight.ts'
import * as RunAndDebugStates from '../RunAndDebugStates/RunAndDebugStates.ts'

export const getHighlight = (uid: number): Highlight => {
  const state = RunAndDebugStates.get(uid)
  if (!state) {
    return {
      uri: '',
      rowIndex: 0,
    }
  }
  // TODO get highlight from paused callframe
  return {
    uri: '',
    rowIndex: 0,
  }
}
