import { test, expect } from '@jest/globals'
import { getDebugPropertyValueLabelArray } from '../src/parts/GetDebugPropertyValueLabelArray/GetDebugPropertyValueLabelArray.ts'

test('getDebugPropertyValueLabelArray formats array with preview', () => {
  const property = {
    description: 'Array(3)',
    preview: {
      properties: [{ value: 'item1' }, { value: 'item2' }, { value: 'item3' }],
    },
  }
  const result = getDebugPropertyValueLabelArray(property)
  expect(result).toBe('(3) ["item1", "item2", "item3"]')
})

test('getDebugPropertyValueLabelArray handles empty array', () => {
  const property = {
    description: 'Array(0)',
    preview: {
      properties: [],
    },
  }
  const result = getDebugPropertyValueLabelArray(property)
  expect(result).toBe('(0) []')
})

test('getDebugPropertyValueLabelArray returns description when no preview', () => {
  const property = {
    description: 'Array(3)',
  }
  const result = getDebugPropertyValueLabelArray(property)
  expect(result).toBe('Array(3)')
})

test('getDebugPropertyValueLabelArray handles array with single item', () => {
  const property = {
    description: 'Array(1)',
    preview: {
      properties: [{ value: 'single' }],
    },
  }
  const result = getDebugPropertyValueLabelArray(property)
  expect(result).toBe('(1) ["single"]')
})

test('getDebugPropertyValueLabelArray handles invalid array description format', () => {
  const property = {
    description: 'Invalid Format',
    preview: {
      properties: [{ value: 'item1' }, { value: 'item2' }],
    },
  }
  const result = getDebugPropertyValueLabelArray(property)
  expect(result).toBe('() ["item1", "item2"]')
})
