import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugPausedReason from '../DebugPausedReason/DebugPausedReason.ts'
import * as DebugState from '../DebugState/DebugState.ts'
import * as ExceptionBreakPoints from '../ExceptionBreakPoints/ExceptionBreakPoints.ts'
import * as PauseOnExceptionState from '../PauseOnExceptionState/PauseOnExceptionState.ts'
import * as RunAndDebugStates from '../RunAndDebugStates/RunAndDebugStates.ts'

export const create = (id: number, uri: string, x: number, y: number, width: number, height: number): void => {
  const state: RunAndDebugState = {
    breakPointsExpanded: false,
    breakPointsVisible: true,
    cache: Object.create(null), // TODO maybe store cache in extension host worker
    callFrameId: '',
    callStack: [],
    callStackExpanded: false,
    callStackVisible: true,
    debugId: 0,
    debugInputValue: '',
    debugOutputValue: '',
    debugState: DebugState.None,
    disposed: false,
    editingselectionend: 0,
    editingselectionstart: 0,
    editingValue: '',
    exceptionBreakPoints: ExceptionBreakPoints.None,
    expandedIds: [],
    focus: 0,
    focusedIndex: -1,
    inputSource: 0,
    maxDescriptionLength: 100,
    openFilesOnPause: true,
    parsedScripts: Object.create(null),
    pausedMessage: '',
    pausedReason: DebugPausedReason.None,
    pauseOnExceptionState: PauseOnExceptionState.None,
    processes: [],
    scopeChain: [],
    scopeExpanded: false,
    scopeFocusedIndex: -1,
    scopeVisible: true,
    selectedIndex: -1,
    tokenColoringEnabled: false,
    topLevelCount: 4,
    uid: id,
    visibleRows: [],
    watchExpanded: false,
    watchExpressions: [],
    watchVisible: true,
  }
  RunAndDebugStates.set(id, state, state)
}
