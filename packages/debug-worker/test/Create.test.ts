import { test, expect } from '@jest/globals'
import { create } from '../src/parts/Create/Create.ts'
import * as DebugPausedReason from '../src/parts/DebugPausedReason/DebugPausedReason.ts'
import * as DebugState from '../src/parts/DebugState/DebugState.ts'
import * as ExceptionBreakPoints from '../src/parts/ExceptionBreakPoints/ExceptionBreakPoints.ts'
import * as PauseOnExceptionState from '../src/parts/PauseOnExceptionState/PauseOnExceptionState.ts'
import * as RunAndDebugStates from '../src/parts/RunAndDebugStates/RunAndDebugStates.ts'

test('create sets state with correct parameters', () => {
  create(1, 'file:///test.ts', 100, 200, 800, 600)

  const { newState } = RunAndDebugStates.get(1)
  expect(newState).toEqual({
    id: 1,
    disposed: false,
    processes: [],
    debugState: DebugState.None,
    watchExpanded: false,
    breakPointsExpanded: false,
    scopeExpanded: false,
    callStackExpanded: false,
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
    cache: Object.create(null),
    exceptionBreakPoints: ExceptionBreakPoints.None,
    watchExpressions: [],
  })
})
