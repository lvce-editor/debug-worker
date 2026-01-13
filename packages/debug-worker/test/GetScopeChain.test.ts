import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugScopeChainType from '../src/parts/DebugScopeChainType/DebugScopeChainType.ts'
import { getScopeChain } from '../src/parts/GetScopeChain/GetScopeChain.ts'

const mockState = createDefaultState()

test('getScopeChain - basic scope chain', async () => {
  const params = {}
  const thisObject = { type: 'object' }
  const scopeChain = [
    {
      object: { objectId: '1' },
      type: 'local',
    },
  ]
  const knownProperties = {
    '1': {
      result: {
        result: [
          {
            name: 'test',
            value: { type: 'string', value: 'test' },
          },
        ],
      },
    },
  }

  const result = getScopeChain(params, thisObject, scopeChain, knownProperties, mockState.maxDescriptionLength)
  expect(result).toHaveLength(3)
  expect(result[0].type).toBe(DebugScopeChainType.Scope)
  expect(result[1].type).toBe(DebugScopeChainType.This)
  expect(result[2].type).toBe(DebugScopeChainType.Property)
})

test('getScopeChain - with exception', async () => {
  const params = {
    data: {
      description: 'Test error',
    },
    reason: 'exception',
  }
  const thisObject = { type: 'object' }
  const scopeChain = [
    {
      object: { objectId: '1' },
      type: 'local',
    },
  ]
  const knownProperties = {}

  const result = getScopeChain(params, thisObject, scopeChain, knownProperties, mockState.maxDescriptionLength)
  expect(result).toHaveLength(3)
  expect(result[0].type).toBe(DebugScopeChainType.Scope)
  expect(result[1].type).toBe(DebugScopeChainType.Exception)
  expect(result[2].type).toBe(DebugScopeChainType.This)
})
