import { test, expect } from '@jest/globals'
import { renderEventListeners } from '../src/parts/RenderEventListeners/RenderEventListeners.ts'

test('renderEventListeners', () => {
  const eventListeners = renderEventListeners()
  expect(eventListeners).toHaveLength(14)
  expect(eventListeners[0]).toMatchObject({
    name: expect.any(String),
    params: ['handleClickContinue'],
  })
})
