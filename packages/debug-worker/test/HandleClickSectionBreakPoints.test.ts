import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClickSectionBreakPoints } from '../src/parts/HandleClickSectionBreakPoints/HandleClickSectionBreakPoints.ts'

test('handleClickSectionBreakPoints toggles breakPointsExpanded from false to true', () => {
  const state: RunAndDebugState = createDefaultState()
  const newState = handleClickSectionBreakPoints(state)
  expect(newState.breakPointsExpanded).toBe(!state.breakPointsExpanded)
  expect(newState.selectedIndex).toBe(1)
})

test('handleClickSectionBreakPoints toggles breakPointsExpanded from true to false', () => {
  const state: RunAndDebugState = createDefaultState()
  const newState = handleClickSectionBreakPoints(state)
  expect(newState.breakPointsExpanded).toBe(!state.breakPointsExpanded)
  expect(newState.selectedIndex).toBe(1)
})

test('handleClickSectionBreakPoints preserves other state properties', () => {
  const state: RunAndDebugState = createDefaultState()
  const newState = handleClickSectionBreakPoints(state)
  expect(newState).toEqual({
    ...state,
    breakPointsExpanded: !state.breakPointsExpanded,
    focus: expect.anything(),
    selectedIndex: 1,
    visibleRows: expect.anything(),
  })
})
