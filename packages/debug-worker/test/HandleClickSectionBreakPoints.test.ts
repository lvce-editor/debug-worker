import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClickSectionBreakPoints } from '../src/parts/HandleClickSectionBreakPoints/HandleClickSectionBreakPoints.ts'

test('handleClickSectionBreakPoints toggles breakPointsExpanded and sets selectedIndex', () => {
  const state = createDefaultState()
  const newState = handleClickSectionBreakPoints(state)
  expect(newState.breakPointsExpanded).toBe(!state.breakPointsExpanded)
  expect(newState.selectedIndex).toBe(1)
})

test('handleClickSectionBreakPoints preserves other state properties', () => {
  const state = createDefaultState()
  const newState = handleClickSectionBreakPoints(state)
  expect(newState).toEqual({
    ...state,
    focus: expect.anything(),
    breakPointsExpanded: !state.breakPointsExpanded,
    selectedIndex: 1,
    visibleRows: expect.anything(),
  })
})
