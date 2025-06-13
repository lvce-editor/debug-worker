import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderItems } from '../src/parts/RenderItems/RenderItems.ts'

test('renderItems', () => {
  const oldState = createDefaultState()
  const newState = { ...createDefaultState(), id: 1 }

  const result = renderItems(oldState, newState)

  expect(result).toEqual(['Viewlet.setDom2', 1, expect.anything()])
})
