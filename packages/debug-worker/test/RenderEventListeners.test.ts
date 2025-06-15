import { test, expect } from '@jest/globals'
import { renderEventListeners } from '../src/parts/RenderEventListeners/RenderEventListeners.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'

test('renderEventListeners', () => {
  const eventListeners = renderEventListeners()
  expect(eventListeners).toContainEqual({
    name: DomEventListenerFunctions.HandleClickContinue,
    params: ['handleClickContinue'],
  })
  expect(eventListeners).toContainEqual({
    name: DomEventListenerFunctions.HandleInputFieldChange,
    params: ['handleInputFieldChange', 'event.target.name', 'event.target.value'],
  })
})
