import { test, expect } from '@jest/globals'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DebugValueType from '../src/parts/DebugValueType/DebugValueType.ts'
import { getDebugValueClassName } from '../src/parts/GetDebugValueClassName/GetDebugValueClassName.ts'

test('getDebugValueClassName returns correct class for undefined', () => {
  const result = getDebugValueClassName(DebugValueType.Undefined)
  expect(result).toBe(ClassNames.DebugValueUndefined)
})

test('getDebugValueClassName returns correct class for number', () => {
  const result = getDebugValueClassName(DebugValueType.Number)
  expect(result).toBe(ClassNames.DebugValueNumber)
})

test('getDebugValueClassName returns correct class for symbol', () => {
  const result = getDebugValueClassName(DebugValueType.Symbol)
  expect(result).toBe(ClassNames.DebugValueSymbol)
})

test('getDebugValueClassName returns correct class for boolean', () => {
  const result = getDebugValueClassName(DebugValueType.Boolean)
  expect(result).toBe(ClassNames.DebugValueBoolean)
})

test('getDebugValueClassName returns correct class for string', () => {
  const result = getDebugValueClassName(DebugValueType.String)
  expect(result).toBe(ClassNames.DebugValueString)
})

test('getDebugValueClassName returns correct class for object', () => {
  const result = getDebugValueClassName(DebugValueType.Object)
  expect(result).toBe(ClassNames.DebugValueObject)
})

test('getDebugValueClassName returns correct class for function', () => {
  const result = getDebugValueClassName(DebugValueType.Function)
  expect(result).toBe(ClassNames.DebugValueFunction)
})

test('getDebugValueClassName returns correct class for getter', () => {
  const result = getDebugValueClassName(DebugValueType.Getter)
  expect(result).toBe(ClassNames.DebugValueGetter)
})

test('getDebugValueClassName returns empty string for unknown type', () => {
  const result = getDebugValueClassName('unknown')
  expect(result).toBe('')
})
