import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as GetDebugPropertyValueLabel from '../src/parts/GetDebugPropertyValueLabel/GetDebugPropertyValueLabel.ts'

const mockState = createDefaultState()

test('getDebugPropertyValueLabel = number', () => {
  const value = {
    description: '1',
    type: 'number',
  }
  expect(GetDebugPropertyValueLabel.getDebugPropertyValueLabel(value, mockState.maxDescriptionLength)).toBe('1')
})

test('getDebugPropertyValueLabel - boolean', () => {
  const value = {
    type: 'boolean',
    value: true,
  }
  expect(GetDebugPropertyValueLabel.getDebugPropertyValueLabel(value, mockState.maxDescriptionLength)).toBe('true')
})

test('getDebugPropertyValueLabel - undefined', () => {
  const value = {
    type: 'undefined',
  }
  expect(GetDebugPropertyValueLabel.getDebugPropertyValueLabel(value, mockState.maxDescriptionLength)).toBe('undefined')
})

test('getDebugPropertyValueLabel - symbol', () => {
  const value = {
    description: 'Symbol(before)',
    type: 'symbol',
  }
  expect(GetDebugPropertyValueLabel.getDebugPropertyValueLabel(value, mockState.maxDescriptionLength)).toBe('Symbol(before)')
})

test('getDebugPropertyValueLabel - object', () => {
  const value = {
    description: 'process',
    type: 'object',
  }
  expect(GetDebugPropertyValueLabel.getDebugPropertyValueLabel(value, mockState.maxDescriptionLength)).toBe('process')
})

test('getDebugPropertyValueLabel - object with preview', () => {
  const value = {
    description: 'obj',
    preview: {
      description: 'Object',
      overflow: false,
      properties: [
        {
          name: 'message',
          type: 'string',
          value: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
        },
      ],
      type: 'object',
    },
    type: 'object',
  }
  expect(GetDebugPropertyValueLabel.getDebugPropertyValueLabel(value, mockState.maxDescriptionLength)).toBe("{message:'🦄🌈✨👋🌎🌍🌏✨🌈🦄'}")
})

test('getDebugPropertyValueLabel - class instance', () => {
  const value = {
    description: 'IncomingMessage',
    preview: {
      description: 'IncomingMessage',
      overflow: true,
      properties: [
        {
          name: '_readableState',
          type: 'object',
          value: 'ReadableState',
        },
      ],
      type: 'object',
    },
    type: 'object',
  }
  expect(GetDebugPropertyValueLabel.getDebugPropertyValueLabel(value, mockState.maxDescriptionLength)).toBe('IncomingMessage {_readableState:ReadableState}')
})

test('getDebugPropertyValueLabel - function', () => {
  const value = {
    description: '(req, res) => {}',
    type: 'function',
  }
  expect(GetDebugPropertyValueLabel.getDebugPropertyValueLabel(value, mockState.maxDescriptionLength)).toBe('(req, res) => {}')
})

test('getDebugPropertyValueLabel - string', () => {
  const value = {
    type: 'string',
    value: '/',
  }
  expect(GetDebugPropertyValueLabel.getDebugPropertyValueLabel(value, mockState.maxDescriptionLength)).toBe('"/"')
})

test('getDebugPropertyValueLabel - other', () => {
  const value = {}
  expect(GetDebugPropertyValueLabel.getDebugPropertyValueLabel(value, mockState.maxDescriptionLength)).toBe('{}')
})

test('getDebugPropertyValueLabel - truncates long description', () => {
  const longDescription = 'a'.repeat(150)
  const value = {
    description: longDescription,
    type: 'function',
  }
  const truncatedState = { ...mockState, maxDescriptionLength: 50 }
  expect(GetDebugPropertyValueLabel.getDebugPropertyValueLabel(value, truncatedState.maxDescriptionLength)).toBe('a'.repeat(50) + '...')
})

test('getDebugPropertyValueLabel - does not truncate short description', () => {
  const shortDescription = 'short'
  const value = {
    description: shortDescription,
    type: 'function',
  }
  const truncatedState = { ...mockState, maxDescriptionLength: 50 }
  expect(GetDebugPropertyValueLabel.getDebugPropertyValueLabel(value, truncatedState.maxDescriptionLength)).toBe('short')
})

test('getDebugPropertyValueLabel - truncates very long description to default length', () => {
  const veryLongDescription = 'a'.repeat(20_000) // 20k characters
  const value = {
    description: veryLongDescription,
    type: 'function',
  }
  // Use default state with maxDescriptionLength: 100
  const result = GetDebugPropertyValueLabel.getDebugPropertyValueLabel(value, mockState.maxDescriptionLength)
  expect(result).toBe('a'.repeat(100) + '...')
  expect(result.length).toBe(103) // 100 characters + '...'
})
