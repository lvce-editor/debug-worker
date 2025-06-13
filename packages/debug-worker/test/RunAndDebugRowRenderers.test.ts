import { test, expect } from '@jest/globals'
import * as RunAndDebugRowRenderers from '../src/parts/RunAndDebugRowRenderers/RunAndDebugRowRenderers.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as AriaRoles from '../src/parts/AriaRoles/AriaRoles.ts'
import type { DebugRow } from '../src/parts/DebugRow/DebugRow.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'

test('renderNoop', () => {
  const row: DebugRow = {
    type: 0,
    text: 'test',
    expanded: false,
    key: '',
    value: '',
    indent: 0,
    valueType: '',
    name: '',
  }
  const result = RunAndDebugRowRenderers.renderNoop(row)
  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      childCount: 1,
    },
    'unknown row type',
  ])
})

test('renderMessage', () => {
  const row: DebugRow = {
    type: DebugRowType.Message,
    text: 'test message',
    expanded: false,
    key: '',
    value: '',
    indent: 0,
    valueType: '',
    name: '',
  }
  const result = RunAndDebugRowRenderers.renderMessage(row)
  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: ClassNames.DebugPausedMessage,
      childCount: 1,
    },
    'test message',
  ])
})

test('renderCallStack', () => {
  const row: DebugRow = {
    type: DebugRowType.CallStack,
    text: 'test stack',
    expanded: false,
    key: '',
    value: '',
    indent: 0,
    valueType: '',
    name: '',
  }
  const result = RunAndDebugRowRenderers.renderCallStack(row)
  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: 'DebugRow DebugRowCallStack',
      role: AriaRoles.TreeItem,
      ariaLevel: 2,
      childCount: 1,
    },
    'test stack',
  ])
})

test('renderScope', () => {
  const row: DebugRow = {
    type: DebugRowType.Scope,
    key: 'testScope',
    expanded: true,
    text: '',
    value: '',
    indent: 0,
    valueType: '',
    name: '',
  }
  const result = RunAndDebugRowRenderers.renderScope(row)
  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: ClassNames.DebugRow,
      role: AriaRoles.TreeItem,
      ariaExpanded: true,
      ariaLevel: 2,
      childCount: 2,
      onPointerDown: expect.any(Function),
    },
    expect.any(Object),
    {
      type: VirtualDomElements.Span,
      className: 'DebugValue DebugValueScopeName',
      childCount: 1,
    },
    'testScope',
  ])
})

test('renderValue', () => {
  const row: DebugRow = {
    type: DebugRowType.Value,
    indent: 10,
    key: 'testKey',
    value: 'testValue',
    valueType: 'string',
    expanded: false,
    text: '',
    name: '',
  }
  const result = RunAndDebugRowRenderers.renderValue(row)
  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: ClassNames.DebugRow,
      role: AriaRoles.TreeItem,
      ariaExpanded: false,
      ariaLevel: 3,
      paddingLeft: 10,
      onPointerDown: expect.any(Function),
      childCount: 3,
    },
    {
      type: VirtualDomElements.Span,
      className: 'DebugValue DebugPropertyKey',
      childCount: 1,
    },
    'testKey',
    expect.any(Object),
    {
      type: VirtualDomElements.Span,
      className: 'DebugValue DebugValueString',
      childCount: 1,
    },
    'testValue',
  ])
})
