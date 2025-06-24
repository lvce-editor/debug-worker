import { test, expect } from '@jest/globals'
import * as DebugItemFlags from '../src/parts/DebugItemFlags/DebugItemFlags.ts'
import * as GetVisibleScopeItems from '../src/parts/GetVisibleScopeItems/GetVisibleScopeItems.ts'

test('getVisibleScopeItems - empty scope chain', () => {
  const result = GetVisibleScopeItems.getVisibleScopeItems([], [], 0)
  expect(result).toEqual([])
})

test('getVisibleScopeItems - single item not expanded', () => {
  const scopeChain = [
    {
      objectId: '1',
      valueType: 'object',
      indent: 0,
      key: '',
      label: '',
      type: 0,
      value: '',
      flags: DebugItemFlags.None,
    },
  ]
  const result = GetVisibleScopeItems.getVisibleScopeItems(scopeChain, [], 0)
  expect(result).toEqual([
    {
      objectId: '1',
      valueType: 'object',
      indent: 0,
      key: '',
      label: '',
      type: 0,
      value: '',
      flags: 6,
    },
  ])
})

test('getVisibleScopeItems - single item expanded', () => {
  const scopeChain = [
    {
      objectId: '1',
      valueType: 'object',
      indent: 0,
      key: '',
      label: '',
      type: 0,
      value: '',
      flags: DebugItemFlags.None,
    },
  ]
  const result = GetVisibleScopeItems.getVisibleScopeItems(scopeChain, ['1'], 0)
  expect(result).toEqual([
    {
      objectId: '1',
      valueType: 'object',
      indent: 0,
      key: '',
      label: '',
      type: 0,
      value: '',
      flags: 5,
    },
  ])
})

test('getVisibleScopeItems - multiple items with different states', () => {
  const scopeChain = [
    {
      objectId: '1',
      valueType: 'object',
      indent: 0,
      key: '',
      label: '',
      type: 0,
      value: '',
      flags: DebugItemFlags.None,
    },
    {
      objectId: '2',
      valueType: 'string',
      indent: 0,
      key: '',
      label: '',
      type: 0,
      value: '',
      flags: DebugItemFlags.None,
    },
    {
      objectId: '3',
      valueType: 'object',
      indent: 0,
      key: '',
      label: '',
      type: 0,
      value: '',
      flags: DebugItemFlags.None,
    },
  ]
  const result = GetVisibleScopeItems.getVisibleScopeItems(scopeChain, ['1'], 1)
  expect(result).toEqual([
    {
      objectId: '1',
      valueType: 'object',
      indent: 0,
      key: '',
      label: '',
      type: 0,
      value: '',
      flags: DebugItemFlags.Expanded,
    },
    {
      objectId: '2',
      valueType: 'string',
      indent: 0,
      key: '',
      label: '',
      type: 0,
      value: '',
      flags: DebugItemFlags.Focused,
    },
    {
      objectId: '3',
      valueType: 'object',
      indent: 0,
      key: '',
      label: '',
      type: 0,
      value: '',
      flags: DebugItemFlags.Collapsed,
    },
  ])
})
