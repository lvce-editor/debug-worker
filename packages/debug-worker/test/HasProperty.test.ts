import { test, expect } from '@jest/globals'
import { hasProperty } from '../src/parts/HasProperty/HasProperty.ts'

test('object has own property', () => {
  const obj = { foo: 123 }
  const result = hasProperty(obj, 'foo')
  expect(result).toBe(true)
})

test('object does not have property', () => {
  const obj = { foo: 123 }
  const result = hasProperty(obj, 'bar')
  expect(result).toBe(false)
})

test('null as object', () => {
  const result = hasProperty(null, 'foo')
  expect(result).toBe(false)
})

test('undefined as object', () => {
  const result = hasProperty(undefined, 'foo')
  expect(result).toBe(false)
})

test('primitive as object', () => {
  expect(hasProperty(42, 'foo')).toBe(false)
  expect(hasProperty('bar', 'foo')).toBe(false)
  expect(hasProperty(true, 'foo')).toBe(false)
})

test('inherited property', () => {
  const proto = { foo: 1 }
  const obj = Object.create(proto)
  const result = hasProperty(obj, 'foo')
  expect(result).toBe(true)
})
