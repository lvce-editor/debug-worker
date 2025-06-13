import { test, expect } from '@jest/globals'
import { handleClickSectionBreakPoints } from '../src/parts/HandleClickSectionBreakPoints/HandleClickSectionBreakPoints.js'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.js'

test('handleClickSectionBreakPoints toggles breakPointsExpanded and sets focusedIndex', () => {
  const state = createDefaultState()
  const newState = handleClickSectionBreakPoints(state)
  expect(newState.breakPointsExpanded).toBe(!state.breakPointsExpanded)
  expect(newState.focusedIndex).toBe(1)
})

test('handleClickSectionBreakPoints preserves other state properties', () => {
  const state = createDefaultState()
  const newState = handleClickSectionBreakPoints(state)
  expect(newState).toEqual({
    ...state,
    breakPointsExpanded: !state.breakPointsExpanded,
    focusedIndex: 1,
  })
})
