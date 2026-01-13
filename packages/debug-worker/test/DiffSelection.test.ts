import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { isEqual } from '../src/parts/DiffSelection/DiffSelection.ts'

test('isEqual returns true when selection states are the same', () => {
  const oldState = createDefaultState()
  const newState = { ...oldState, editingselectionend: 10, editingselectionstart: 5 }

  const result = isEqual(oldState, newState)
  expect(result).toBe(false)
})

test('isEqual returns true when selection states are identical', () => {
  const oldState = createDefaultState()
  const newState = { ...oldState, editingselectionend: 0, editingselectionstart: 0 }

  const result = isEqual(oldState, newState)
  expect(result).toBe(true)
})

test('isEqual returns false when selection start differs', () => {
  const oldState = createDefaultState()
  const newState = { ...oldState, editingselectionend: 0, editingselectionstart: 5 }

  const result = isEqual(oldState, newState)
  expect(result).toBe(false)
})

test('isEqual returns false when selection end differs', () => {
  const oldState = createDefaultState()
  const newState = { ...oldState, editingselectionend: 10, editingselectionstart: 0 }

  const result = isEqual(oldState, newState)
  expect(result).toBe(false)
})
