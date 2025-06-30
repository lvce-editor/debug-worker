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
      index: 0,
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
      index: 0,
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
      index: 0,
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
      index: 0,
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
      index: 0,
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
      index: 1,
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
      index: 2,
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
      index: 0,
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
      index: 1,
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
      index: 2,
    },
  ])
})
