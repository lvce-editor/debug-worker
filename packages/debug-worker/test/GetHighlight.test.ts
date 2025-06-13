import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { getHighlight } from '../src/parts/GetHighlight/GetHighlight.ts'
import * as RunAndDebugStates from '../src/parts/RunAndDebugStates/RunAndDebugStates.ts'

test('returns empty highlight when state does not exist', () => {
  const highlight = getHighlight(1)
  expect(highlight).toEqual({
    uri: '',
    rowIndex: 0,
    columnIndex: 0,
  })
})

test('returns empty highlight when call stack is empty', () => {
  createDefaultState(1)
  const highlight = getHighlight(1)
  expect(highlight).toEqual({
    uri: '',
    rowIndex: 0,
    columnIndex: 0,
  })
})

test('returns highlight from top of call stack', () => {
  const state: RunAndDebugState = createDefaultState(1)
  const newState: RunAndDebugState = {
    ...state,
    callStack: [
      {
        location: {
          scriptId: 'script1',
          lineNumber: 10,
          columnNumber: 5,
        },
      } as any,
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
    uri: 'file:///test.ts',
    rowIndex: 10,
    columnIndex: 5,
  })
})
