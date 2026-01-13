import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import type { ScopeChainItem } from '../src/parts/ScopeChainItem/ScopeChainItem.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { isEqual } from '../src/parts/DiffItems/DiffItems.ts'

test('isEqual - identical states', () => {
  const state: RunAndDebugState = createDefaultState(0)
  expect(isEqual(state, state)).toBe(true)
})

test('isEqual - different scopeChain', () => {
  const state1: RunAndDebugState = createDefaultState(0)
  const state2: RunAndDebugState = {
    ...createDefaultState(0),
    scopeChain: [
      {
        flags: 0,
        indent: 0,
        key: 'different',
        label: '',
        objectId: 'different',
        type: 0,
        value: '',
        valueType: '',
      },
    ] as readonly ScopeChainItem[],
  }
  expect(isEqual(state1, state2)).toBe(false)
})

test('isEqual - different scopeExpanded', () => {
  const state1: RunAndDebugState = createDefaultState()
  const state2: RunAndDebugState = {
    ...createDefaultState(),
    scopeExpanded: true,
  }
  expect(isEqual(state1, state2)).toBe(false)
})

test('isEqual - different callFrameId', () => {
  const state1: RunAndDebugState = createDefaultState()
  const state2: RunAndDebugState = {
    ...createDefaultState(),
    callFrameId: 'different',
  }
  expect(isEqual(state1, state2)).toBe(false)
})

test('isEqual - different breakPointsExpanded', () => {
  const state1: RunAndDebugState = createDefaultState()
  const state2: RunAndDebugState = {
    ...createDefaultState(),
    breakPointsExpanded: true,
  }
  expect(isEqual(state1, state2)).toBe(false)
})

test('isEqual - different debugState', () => {
  const state1: RunAndDebugState = createDefaultState()
  const state2: RunAndDebugState = {
    ...createDefaultState(),
    debugState: 1,
  }
  expect(isEqual(state1, state2)).toBe(false)
})
