import { expect, test } from '@jest/globals'
import * as DebugValueType from '../src/parts/DebugValueType/DebugValueType.ts'
import { getDebugValueType } from '../src/parts/GetDebugValueType/GetDebugValueType.ts'

test('returns value type when child has value with type', () => {
  const child = {
    value: {
      type: 'testType',
    },
  }
  const result = getDebugValueType(child)
  expect(result).toBe('testType')
})

test('returns Getter when child has get method', () => {
  const child = {
    get: () => {},
  }
  const result = getDebugValueType(child)
  expect(result).toBe(DebugValueType.Getter)
})

test('returns None when child has no value type or get method', () => {
  const child = {}
  const result = getDebugValueType(child)
  expect(result).toBe(DebugValueType.None)
})

test('returns None when child is null', () => {
  const child = null
  const result = getDebugValueType(child)
  expect(result).toBe(DebugValueType.None)
})

test('returns None when child is undefined', () => {
  const child = undefined
  const result = getDebugValueType(child)
  expect(result).toBe(DebugValueType.None)
})
