import { expect, test } from '@jest/globals'
import * as DebugScopeChainType from '../src/parts/DebugScopeChainType/DebugScopeChainType.ts'
import { getScopeChain } from '../src/parts/GetScopeChain/GetScopeChain.ts'

test('getScopeChain - basic scope chain', async () => {
  const params = {}
  const thisObject = { type: 'object' }
  const scopeChain = [
    {
      type: 'local',
      object: { objectId: '1' },
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

  const result = getScopeChain(params, thisObject, scopeChain, knownProperties)
  expect(result).toHaveLength(3)
  expect(result[0].type).toBe(DebugScopeChainType.Scope)
  expect(result[1].type).toBe(DebugScopeChainType.This)
  expect(result[2].type).toBe(DebugScopeChainType.Property)
})

test('getScopeChain - with exception', async () => {
  const params = {
    reason: 'exception',
    data: {
      description: 'Test error',
    },
  }
  const thisObject = { type: 'object' }
  const scopeChain = [
    {
      type: 'local',
      object: { objectId: '1' },
    },
  ]
  const knownProperties = {}

  const result = getScopeChain(params, thisObject, scopeChain, knownProperties)
  expect(result).toHaveLength(3)
  expect(result[0].type).toBe(DebugScopeChainType.Scope)
  expect(result[1].type).toBe(DebugScopeChainType.Exception)
  expect(result[2].type).toBe(DebugScopeChainType.This)
})
