import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugPausedReason from '../DebugPausedReason/DebugPausedReason.ts'
import * as DebugState from '../DebugState/DebugState.ts'
import * as ExceptionBreakPoints from '../ExceptionBreakPoints/ExceptionBreakPoints.ts'
import * as PauseOnExceptionState from '../PauseOnExceptionState/PauseOnExceptionState.ts'
import * as RunAndDebugStates from '../RunAndDebugStates/RunAndDebugStates.ts'

export const create = (id: number, uri: string, x: number, y: number, width: number, height: number): void => {
  const state: RunAndDebugState = {
    id,
    disposed: false,
    processes: [],
    debugState: DebugState.None,
    watchExpanded: false,
    breakPointsExpanded: false,
    scopeExpanded: false,
    callStackExpanded: false,
    watchVisible: true,
    breakPointsVisible: true,
    scopeVisible: true,
    callStackVisible: true,
    scopeChain: [],
    callStack: [],
    parsedScripts: Object.create(null),
    pausedReason: DebugPausedReason.None,
    pausedMessage: '',
    debugInputValue: '',
    debugOutputValue: '',
    callFrameId: '',
    expandedIds: [],
    scopeFocusedIndex: -1,
    focusedIndex: -1,
    pauseOnExceptionState: PauseOnExceptionState.None,
    cache: Object.create(null), // TODO maybe store cache in extension host worker
    exceptionBreakPoints: ExceptionBreakPoints.None,
    watchExpressions: [],
    focus: 0,
    editingValue: '',
    debugId: 0,
    inputSource: 0,
    editingselectionstart: 0,
    editingselectionend: 0,
    openFilesOnPause: true,
    maxDescriptionLength: 100,
    selectedIndex: -1,
    visibleRows: [],
    tokenColoringEnabled: false,
    topLevelCount: 4,
  }
  RunAndDebugStates.set(id, state, state)
}
