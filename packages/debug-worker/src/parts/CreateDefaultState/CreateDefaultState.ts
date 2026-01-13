import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { set } from '../RunAndDebugStates/RunAndDebugStates.ts'

export const createDefaultState = (uid = 0): RunAndDebugState => {
  const state: RunAndDebugState = {
    breakPointsExpanded: false,
    breakPointsVisible: true,
    cache: {},
    callFrameId: '',
    callStack: [],
    callStackExpanded: false,
    callStackVisible: true,
    debugId: 0,
    debugInputValue: '',
    debugOutputValue: '',
    debugState: 0,
    disposed: false,
    editingselectionend: 0,
    editingselectionstart: 0,
    editingValue: '',
    exceptionBreakPoints: 0,
    expandedIds: [],
    focus: 0,
    focusedIndex: 0,
    inputSource: 0,
    maxDescriptionLength: 100,
    openFilesOnPause: true,
    parsedScripts: {},
    pausedMessage: '',
    pausedReason: '',
    pauseOnExceptionState: 'none',
    processes: [],
    scopeChain: [],
    scopeExpanded: false,
    scopeFocusedIndex: 0,
    scopeVisible: true,
    selectedIndex: -1,
    tokenColoringEnabled: false,
    topLevelCount: 4,
    uid: uid,
    visibleRows: [],
    watchExpanded: false,
    watchExpressions: [],
    watchVisible: true,
  }
  set(uid, state, state)
  return state
}
