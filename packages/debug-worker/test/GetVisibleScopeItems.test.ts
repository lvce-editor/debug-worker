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
      flags: DebugItemFlags.None,
      indent: 0,
      index: 0,
      key: '',
      label: '',
      objectId: '1',
      type: 0,
      value: '',
      valueType: 'object',
    },
  ]
  const result = GetVisibleScopeItems.getVisibleScopeItems(scopeChain, [], 0)
  expect(result).toEqual([
    {
      flags: 6,
      indent: 0,
      index: 0,
      key: '',
      label: '',
      objectId: '1',
      type: 0,
      value: '',
      valueType: 'object',
    },
  ])
})

test('getVisibleScopeItems - single item expanded', () => {
  const scopeChain = [
    {
      flags: DebugItemFlags.None,
      indent: 0,
      index: 0,
      key: '',
      label: '',
      objectId: '1',
      type: 0,
      value: '',
      valueType: 'object',
    },
  ]
  const result = GetVisibleScopeItems.getVisibleScopeItems(scopeChain, ['1'], 0)
  expect(result).toEqual([
    {
      flags: 5,
      indent: 0,
      index: 0,
      key: '',
      label: '',
      objectId: '1',
      type: 0,
      value: '',
      valueType: 'object',
    },
  ])
})

test('getVisibleScopeItems - multiple items with different states', () => {
  const scopeChain = [
    {
      flags: DebugItemFlags.None,
      indent: 0,
      index: 0,
      key: '',
      label: '',
      objectId: '1',
      type: 0,
      value: '',
      valueType: 'object',
    },
    {
      flags: DebugItemFlags.None,
      indent: 0,
      index: 1,
      key: '',
      label: '',
      objectId: '2',
      type: 0,
      value: '',
      valueType: 'string',
    },
    {
      flags: DebugItemFlags.None,
      indent: 0,
      index: 2,
      key: '',
      label: '',
      objectId: '3',
      type: 0,
      value: '',
      valueType: 'object',
    },
  ]
  const result = GetVisibleScopeItems.getVisibleScopeItems(scopeChain, ['1'], 1)
  expect(result).toEqual([
    {
      flags: DebugItemFlags.Expanded,
      indent: 0,
      index: 0,
      key: '',
      label: '',
      objectId: '1',
      type: 0,
      value: '',
      valueType: 'object',
    },
    {
      flags: DebugItemFlags.Focused,
      indent: 0,
      index: 1,
      key: '',
      label: '',
      objectId: '2',
      type: 0,
      value: '',
      valueType: 'string',
    },
    {
      flags: DebugItemFlags.Collapsed,
      indent: 0,
      index: 2,
      key: '',
      label: '',
      objectId: '3',
      type: 0,
      value: '',
      valueType: 'object',
    },
  ])
})
