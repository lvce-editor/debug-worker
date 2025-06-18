import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { WatchExpressionInput } from '../src/parts/InputName/InputName.ts'
import { renderSelection } from '../src/parts/RenderSelection/RenderSelection.ts'
import { FocusDebugWatchInput } from '../src/parts/WhenExpression/WhenExpression.ts'

test('renderSelection returns correct selection command', () => {
  const oldState = createDefaultState()
  const newState = { ...oldState, editingselectionstart: 5, editingselectionend: 10 }

  const result = renderSelection(oldState, newState)
  expect(result).toEqual(['Viewlet.setSelectionByName', 0, '', 5, 10])
})

test('renderSelection works with zero values', () => {
  const oldState = createDefaultState()
  const newState = { ...oldState, editingselectionstart: 0, editingselectionend: 0 }

  const result = renderSelection(oldState, newState)
  expect(result).toEqual(['Viewlet.setSelectionByName', 0, '', 0, 0])
})

test('renderSelection first element is Viewlet.setSelectionByName', () => {
  const oldState = createDefaultState()
  const newState = { ...oldState, editingselectionstart: 1, editingselectionend: 2 }

  const result = renderSelection(oldState, newState)
  expect(result[0]).toBe('Viewlet.setSelectionByName')
})

test('renderSelection uses correct selector when focus is on watch input', () => {
  const oldState = createDefaultState()
  const newState = {
    ...oldState,
    focus: FocusDebugWatchInput,
    editingselectionstart: 1,
    editingselectionend: 2,
  }

  const result = renderSelection(oldState, newState)
  expect(result[1]).toBe(0) // id
  expect(result[2]).toBe(WatchExpressionInput) // selector
  expect(result[3]).toBe(1) // start
  expect(result[4]).toBe(2) // end
})
