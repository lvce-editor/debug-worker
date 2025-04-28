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
  const array: readonly any[] = []
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
