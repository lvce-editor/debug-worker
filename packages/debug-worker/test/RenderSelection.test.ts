import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderSelection } from '../src/parts/RenderSelection/RenderSelection.ts'

test('renderSelection returns correct selection command', () => {
  const oldState = createDefaultState()
  const newState = { ...oldState, editingselectionstart: 5, editingselectionend: 10 }

  const result = renderSelection(oldState, newState)
  expect(result).toEqual(['setSelection', 'editingValue', 5, 10])
})

test('renderSelection works with zero values', () => {
  const oldState = createDefaultState()
  const newState = { ...oldState, editingselectionstart: 0, editingselectionend: 0 }

  const result = renderSelection(oldState, newState)
  expect(result).toEqual(['setSelection', 'editingValue', 0, 0])
})

test('renderSelection first element is setSelection', () => {
  const oldState = createDefaultState()
  const newState = { ...oldState, editingselectionstart: 1, editingselectionend: 2 }

  const result = renderSelection(oldState, newState)
  expect(result[0]).toBe('setSelection')
})

test('renderSelection uses editingValue as input name', () => {
  const oldState = createDefaultState()
  const newState = { ...oldState, editingselectionstart: 1, editingselectionend: 2 }

  const result = renderSelection(oldState, newState)
  expect(result[1]).toBe('editingValue')
})
