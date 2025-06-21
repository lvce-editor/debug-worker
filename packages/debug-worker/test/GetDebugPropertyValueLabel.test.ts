import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as GetDebugPropertyValueLabel from '../src/parts/GetDebugPropertyValueLabel/GetDebugPropertyValueLabel.ts'

const mockState = createDefaultState()

test('getDebugPropertyValueLabel = number', () => {
  const value = {
    type: 'number',
    description: '1',
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
    type: 'symbol',
    description: 'Symbol(before)',
  }
  expect(GetDebugPropertyValueLabel.getDebugPropertyValueLabel(value, mockState.maxDescriptionLength)).toBe('Symbol(before)')
})

test('getDebugPropertyValueLabel - object', () => {
  const value = {
    type: 'object',
    description: 'process',
  }
  expect(GetDebugPropertyValueLabel.getDebugPropertyValueLabel(value, mockState.maxDescriptionLength)).toBe('process')
})

test('getDebugPropertyValueLabel - object with preview', () => {
  const value = {
    type: 'object',
    description: 'obj',
    preview: {
      type: 'object',
      description: 'Object',
      overflow: false,
      properties: [
        {
          name: 'message',
          type: 'string',
          value: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
        },
      ],
    },
  }
  expect(GetDebugPropertyValueLabel.getDebugPropertyValueLabel(value, mockState.maxDescriptionLength)).toBe("{message:'🦄🌈✨👋🌎🌍🌏✨🌈🦄'}")
})

test('getDebugPropertyValueLabel - class instance', () => {
  const value = {
    type: 'object',
    description: 'IncomingMessage',
    preview: {
      type: 'object',
      description: 'IncomingMessage',
      overflow: true,
      properties: [
        {
          name: '_readableState',
          type: 'object',
          value: 'ReadableState',
        },
      ],
    },
  }
  expect(GetDebugPropertyValueLabel.getDebugPropertyValueLabel(value, mockState.maxDescriptionLength)).toBe('IncomingMessage {_readableState:ReadableState}')
})

test('getDebugPropertyValueLabel - function', () => {
  const value = {
    type: 'function',
    description: '(req, res) => {}',
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
    type: 'function',
    description: longDescription,
  }
  const truncatedState = { ...mockState, maxDescriptionLength: 50 }
  expect(GetDebugPropertyValueLabel.getDebugPropertyValueLabel(value, truncatedState.maxDescriptionLength)).toBe('a'.repeat(50) + '...')
})

test('getDebugPropertyValueLabel - does not truncate short description', () => {
  const shortDescription = 'short'
  const value = {
    type: 'function',
    description: shortDescription,
  }
  const truncatedState = { ...mockState, maxDescriptionLength: 50 }
  expect(GetDebugPropertyValueLabel.getDebugPropertyValueLabel(value, truncatedState.maxDescriptionLength)).toBe('short')
})

test('getDebugPropertyValueLabel - truncates very long description to default length', () => {
  const veryLongDescription = 'a'.repeat(20_000) // 20k characters
  const value = {
    type: 'function',
    description: veryLongDescription,
  }
  // Use default state with maxDescriptionLength: 100
  const result = GetDebugPropertyValueLabel.getDebugPropertyValueLabel(value, mockState.maxDescriptionLength)
  expect(result).toBe('a'.repeat(100) + '...')
  expect(result.length).toBe(103) // 100 characters + '...'
})
