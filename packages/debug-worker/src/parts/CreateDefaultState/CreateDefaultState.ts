import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { set } from '../RunAndDebugStates/RunAndDebugStates.ts'

export const createDefaultState = (uid = 0): RunAndDebugState => {
  const state: RunAndDebugState = {
    id: uid,
    disposed: false,
    processes: [],
    debugState: 0,
    watchExpanded: false,
    breakPointsExpanded: false,
    scopeExpanded: false,
    callStackExpanded: false,
    scopeChain: [],
    callStack: [],
    parsedScripts: {},
    pausedReason: '',
    pausedMessage: '',
    debugInputValue: '',
    debugOutputValue: '',
    callFrameId: '',
    expandedIds: [],
    scopeFocusedIndex: 0,
    focusedIndex: 0,
    pauseOnExceptionState: 'none',
    cache: {},
    exceptionBreakPoints: 0,
    watchExpressions: [],
    focus: 0,
    editingValue: '',
    debugId: 0,
    inputSource: 0,
  }
  set(uid, state, state)
  return state
}
