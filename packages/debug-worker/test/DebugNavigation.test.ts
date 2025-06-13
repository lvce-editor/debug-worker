import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { focusNext, focusPrevious, handleArrowDown, handleArrowLeft, handleArrowRight, handleArrowUp, resize } from '../src/parts/DebugNavigation/DebugNavigation.ts'

test('handleArrowLeft collapses scope when focusedIndex is 2', () => {
  const state = {
    ...createDefaultState(),
    focusedIndex: 2,
    scopeExpanded: true,
  }
  const newState = handleArrowLeft(state)
  expect(newState.scopeExpanded).toBe(false)
})

test('handleArrowLeft does nothing when focusedIndex is not 2', () => {
  const state = {
    ...createDefaultState(),
    focusedIndex: 1,
    scopeExpanded: true,
  }
  const newState = handleArrowLeft(state)
  expect(newState.scopeExpanded).toBe(true)
})

test('handleArrowRight expands scope when focusedIndex is 2', () => {
  const state = {
    ...createDefaultState(),
    focusedIndex: 2,
    scopeExpanded: false,
  }
  const newState = handleArrowRight(state)
  expect(newState.scopeExpanded).toBe(true)
})

test('handleArrowRight does nothing when focusedIndex is not 2', () => {
  const state = {
    ...createDefaultState(),
    focusedIndex: 1,
    scopeExpanded: false,
  }
  const newState = handleArrowRight(state)
  expect(newState.scopeExpanded).toBe(false)
})

test('handleArrowUp returns same state', () => {
  const state = createDefaultState()
  const newState = handleArrowUp(state)
  expect(newState).toBe(state)
})

test('handleArrowDown returns same state', () => {
  const state = createDefaultState()
  const newState = handleArrowDown(state)
  expect(newState).toBe(state)
})

test('focusPrevious returns same state', () => {
  const state = createDefaultState()
  const newState = focusPrevious(state)
  expect(newState).toBe(state)
})

test('focusNext returns same state', () => {
  const state = createDefaultState()
  const newState = focusNext(state)
  expect(newState).toBe(state)
})

test('resize updates state with dimensions', () => {
  const state = createDefaultState()
  const dimensions = { width: 100, height: 200 }
  const newState = resize(state, dimensions)
  expect(newState).toEqual({ ...state, ...dimensions })
})
