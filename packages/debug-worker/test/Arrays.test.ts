import { test, expect } from '@jest/globals'
import { removeElement } from '../src/parts/Arrays/Arrays.ts'

test('removeElement removes element from array', () => {
  const array = [1, 2, 3, 4]
  expect(removeElement(array, 3)).toEqual([1, 2, 4])
})

test('removeElement returns same array if element not found', () => {
  const array = [1, 2, 3, 4]
  expect(removeElement(array, 5)).toEqual([1, 2, 3, 4])
})

test('removeElement handles empty array', () => {
  const array: readonly number[] = []
  expect(removeElement(array, 1)).toEqual([])
})

test('removeElement handles multiple occurrences', () => {
  const array = [1, 2, 2, 3]
  expect(removeElement(array, 2)).toEqual([1, 2, 3])
})

test('removeElement handles different types', () => {
  const array = [1, '2', true, { a: 1 }]
  expect(removeElement(array, '2')).toEqual([1, true, { a: 1 }])
})

test('removeElement with string arrays', () => {
  const array = ['apple', 'banana', 'cherry']
  expect(removeElement(array, 'banana')).toEqual(['apple', 'cherry'])
})

test('removeElement with boolean arrays', () => {
  const array = [true, false, true]
  expect(removeElement(array, true)).toEqual([false, true])
})

test('removeElement with object arrays', () => {
  const obj1 = { id: 1, name: 'Alice' }
  const obj2 = { id: 2, name: 'Bob' }
  const obj3 = { id: 3, name: 'Charlie' }
  const array = [obj1, obj2, obj3]
  expect(removeElement(array, obj2)).toEqual([obj1, obj3])
})

test('removeElement with readonly arrays', () => {
  const array: readonly number[] = [1, 2, 3, 4]
  const result = removeElement(array, 2)
  expect(result).toEqual([1, 3, 4])
  expect(result).not.toBe(array) // Should return new array
})

test('removeElement preserves array immutability', () => {
  const original = [1, 2, 3, 4]
  const result = removeElement(original, 2)
  expect(result).toEqual([1, 3, 4])
  expect(original).toEqual([1, 2, 3, 4]) // Original should be unchanged
})

test('removeElement with mixed type arrays', () => {
  const array: readonly (string | number | boolean)[] = ['hello', 42, true, 'world']
  expect(removeElement(array, 42)).toEqual(['hello', true, 'world'])
  expect(removeElement(array, 'hello')).toEqual([42, true, 'world'])
  expect(removeElement(array, true)).toEqual(['hello', 42, 'world'])
})
