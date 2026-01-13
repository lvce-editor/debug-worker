import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { isEqual } from '../src/parts/DiffValue/DiffValue.ts'
import * as InputSource from '../src/parts/InputSource/InputSource.ts'

test('isEqual returns true when inputSource is not Script', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    editingValue: 'something',
    inputSource: InputSource.User,
  }
  expect(isEqual(oldState, newState)).toBe(true)
})

test('isEqual returns true when inputSource is Script and editingValue is empty', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    editingValue: '',
    inputSource: InputSource.Script,
  }
  expect(isEqual(oldState, newState)).toBe(true)
})

test('isEqual returns false when inputSource is Script and editingValue is not empty', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    editingValue: 'editing',
    inputSource: InputSource.Script,
  }
  expect(isEqual(oldState, newState)).toBe(false)
})
