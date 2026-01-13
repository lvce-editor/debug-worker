import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { getHighlight } from '../src/parts/GetHighlight/GetHighlight.ts'
import * as RunAndDebugStates from '../src/parts/RunAndDebugStates/RunAndDebugStates.ts'

test('returns empty highlight when state does not exist', () => {
  const highlight = getHighlight(1)
  expect(highlight).toEqual({
    columnIndex: 0,
    rowIndex: 0,
    uri: '',
  })
})

test('returns empty highlight when call stack is empty', () => {
  createDefaultState(1)
  const highlight = getHighlight(1)
  expect(highlight).toEqual({
    columnIndex: 0,
    rowIndex: 0,
    uri: '',
  })
})

test('returns highlight from top of call stack', () => {
  const state: RunAndDebugState = createDefaultState(1)
  const newState: RunAndDebugState = {
    ...state,
    callStack: [
      {
        functionLocation: {
          columnNumber: 0,
          lineNumber: 0,
          scriptId: 'script1',
        },
        functionName: '',
        location: {
          columnNumber: 5,
          lineNumber: 10,
          scriptId: 'script1',
        },
      },
    ],
    parsedScripts: {
      script1: {
        scriptId: 'script1',
        scriptLanguage: 'typescript',
        url: 'file:///test.ts',
      },
    },
  }
  RunAndDebugStates.set(1, newState, newState)
  const highlight = getHighlight(1)
  expect(highlight).toEqual({
    columnIndex: 5,
    rowIndex: 10,
    uri: 'file:///test.ts',
  })
})
