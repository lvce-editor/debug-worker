import { test, expect } from '@jest/globals'
import type { DebugRow } from '../src/parts/DebugRow/DebugRow.ts'
import * as AriaRoles from '../src/parts/AriaRoles/AriaRoles.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { renderCallStack } from '../src/parts/RenderCallStack/RenderCallStack.ts'
import { renderValue } from '../src/parts/RenderDebugValue/RenderDebugValue.ts'
import { renderScope } from '../src/parts/RenderScope/RenderScope.ts'
import * as RunAndDebugRowRenderers from '../src/parts/RunAndDebugRowRenderers/RunAndDebugRowRenderers.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../src/parts/VirtualDomHelpers/VirtualDomHelpers.ts'

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
    description: '',
    index: 0,
    setSize: 1,
    posInset: 1,
  }
  const result = RunAndDebugRowRenderers.renderNoop(row, -1, 0)
  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: ClassNames.DebugRow,
      childCount: 1,
    },
    VirtualDomHelpers.text('unknown row type'),
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
    description: '',
    index: 0,
    setSize: 1,
    posInset: 1,
  }
  const result = RunAndDebugRowRenderers.renderMessage(row, -1, 0)
  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: ClassNames.DebugPausedMessage,
      childCount: 1,
    },
    VirtualDomHelpers.text('test message'),
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
    description: '',
    index: 0,
    setSize: 1,
    posInset: 1,
  }
  const result = renderCallStack(row, -1, 0)
  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: 'DebugRow DebugRowCallStack',
      role: AriaRoles.TreeItem,
      ariaLevel: 2,
      childCount: 2,
      onClick: DomEventListenerFunctions.HandleClickCallStackItem,
      'data-index': 0,
    },
    {
      className: 'CallStackLabel',
      type: 4,
      childCount: 1,
    },
    VirtualDomHelpers.text('test stack'),
    {
      className: 'CallStackDescription',
      type: 4,
      childCount: 1,
    },
    VirtualDomHelpers.text(''),
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
    description: '',
    index: 5,
    setSize: 1,
    posInset: 1,
  }
  const result = renderScope(row, -1, 0)
  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: ClassNames.DebugRow,
      role: AriaRoles.TreeItem,
      ariaExpanded: true,
      ariaLevel: 2,
      childCount: 2,
      onPointerDown: 'handleClickScopeValue',
      'data-index': 5,
      'data-name': 'testScope',
    },
    expect.any(Object),
    {
      type: VirtualDomElements.Span,
      className: 'DebugValue DebugValueScopeName',
      childCount: 1,
    },
    VirtualDomHelpers.text('testScope'),
  ])
})

test.skip('renderValue', () => {
  const row: DebugRow = {
    type: DebugRowType.Value,
    text: '',
    expanded: false,
    key: 'testKey',
    value: 'testValue',
    indent: 10,
    valueType: 'string',
    name: '',
    description: '',
    index: 3,
    setSize: 1,
    posInset: 1,
  }
  const result = renderValue(row, -1, 0, false)
  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: ClassNames.DebugRow,
      role: AriaRoles.TreeItem,
      ariaExpanded: false,
      ariaLevel: 3,
      paddingLeft: 10,
      onPointerDown: DomEventListenerFunctions.HandleClickScopeValue,
      childCount: 3,
      'data-index': 3,
    },
    {
      type: VirtualDomElements.Span,
      className: 'DebugValue DebugPropertyKey',
      childCount: 1,
    },
    VirtualDomHelpers.text('testKey'),
    expect.any(Object),
    {
      type: VirtualDomElements.Span,
      className: 'DebugValue DebugValueString',
      childCount: 1,
      children: [{ type: 12, text: 'testValue', childCount: 0 }],
    },
  ])
})
