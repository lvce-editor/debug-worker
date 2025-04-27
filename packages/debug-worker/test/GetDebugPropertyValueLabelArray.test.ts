import { test, expect } from '@jest/globals'
import { getDebugPropertyValueLabelArray } from '../src/parts/GetDebugPropertyValueLabelArray/GetDebugPropertyValueLabelArray.js'

test('should format array property with preview', () => {
  const property = {
    preview: {
      properties: [{ value: 'item1' }, { value: 'item2' }, { value: 'item3' }],
    },
    description: 'Array(3)',
  }

  const result = getDebugPropertyValueLabelArray(property)
  expect(result).toBe('(3) ["item1", "item2", "item3"]')
})

test('should handle empty array', () => {
  const property = {
    preview: {
      properties: [],
    },
    description: 'Array(0)',
  }

  const result = getDebugPropertyValueLabelArray(property)
  expect(result).toBe('(0) []')
})

test('should return description when no preview', () => {
  const property = {
    description: 'Array(3)',
  }

  const result = getDebugPropertyValueLabelArray(property)
  expect(result).toBe('Array(3)')
})

test('should handle array with single item', () => {
  const property = {
    preview: {
      properties: [{ value: 'single' }],
    },
    description: 'Array(1)',
  }

  const result = getDebugPropertyValueLabelArray(property)
  expect(result).toBe('(1) ["single"]')
})
