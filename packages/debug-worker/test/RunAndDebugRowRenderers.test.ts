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
    description: '',
    expanded: false,
    indent: 0,
    index: 0,
    key: '',
    name: '',
    posInset: 1,
    setSize: 1,
    text: 'test',
    type: 0,
    value: '',
    valueType: '',
  }
  const result = RunAndDebugRowRenderers.renderNoop(row, -1, 0)
  expect(result).toEqual([
    {
      childCount: 1,
      className: ClassNames.DebugRow,
      type: VirtualDomElements.Div,
    },
    VirtualDomHelpers.text('unknown row type'),
  ])
})

test('renderMessage', () => {
  const row: DebugRow = {
    description: '',
    expanded: false,
    indent: 0,
    index: 0,
    key: '',
    name: '',
    posInset: 1,
    setSize: 1,
    text: 'test message',
    type: DebugRowType.Message,
    value: '',
    valueType: '',
  }
  const result = RunAndDebugRowRenderers.renderMessage(row, -1, 0)
  expect(result).toEqual([
    {
      childCount: 1,
      className: ClassNames.DebugPausedMessage,
      type: VirtualDomElements.Div,
    },
    VirtualDomHelpers.text('test message'),
  ])
})

test('renderCallStack', () => {
  const row: DebugRow = {
    description: '',
    expanded: false,
    indent: 0,
    index: 0,
    key: '',
    name: '',
    posInset: 1,
    setSize: 1,
    text: 'test stack',
    type: DebugRowType.CallStack,
    value: '',
    valueType: '',
  }
  const result = renderCallStack(row, -1, 0)
  expect(result).toEqual([
    {
      ariaLevel: 2,
      childCount: 2,
      className: 'DebugRow DebugRowCallStack',
      'data-index': 0,
      onClick: DomEventListenerFunctions.HandleClickCallStackItem,
      role: AriaRoles.TreeItem,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: 'CallStackLabel',
      type: 4,
    },
    VirtualDomHelpers.text('test stack'),
    {
      childCount: 1,
      className: 'CallStackDescription',
      type: 4,
    },
    VirtualDomHelpers.text(''),
  ])
})

test('renderScope', () => {
  const row: DebugRow = {
    description: '',
    expanded: true,
    indent: 0,
    index: 5,
    key: 'testScope',
    name: '',
    posInset: 1,
    setSize: 1,
    text: '',
    type: DebugRowType.Scope,
    value: '',
    valueType: '',
  }
  const result = renderScope(row, -1, 0)
  expect(result).toEqual([
    {
      ariaExpanded: true,
      ariaLevel: 2,
      childCount: 2,
      className: ClassNames.DebugRow,
      'data-index': 5,
      'data-name': 'testScope',
      onPointerDown: 'handleClickScopeValue',
      role: AriaRoles.TreeItem,
      type: VirtualDomElements.Div,
    },
    expect.any(Object),
    {
      childCount: 1,
      className: 'DebugValue DebugValueScopeName',
      type: VirtualDomElements.Span,
    },
    VirtualDomHelpers.text('testScope'),
  ])
})

test.skip('renderValue', () => {
  const row: DebugRow = {
    description: '',
    expanded: false,
    indent: 10,
    index: 3,
    key: 'testKey',
    name: '',
    posInset: 1,
    setSize: 1,
    text: '',
    type: DebugRowType.Value,
    value: 'testValue',
    valueType: 'string',
  }
  const result = renderValue(row, -1, 0, false)
  expect(result).toEqual([
    {
      ariaExpanded: false,
      ariaLevel: 3,
      childCount: 3,
      className: ClassNames.DebugRow,
      'data-index': 3,
      onPointerDown: DomEventListenerFunctions.HandleClickScopeValue,
      paddingLeft: 10,
      role: AriaRoles.TreeItem,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: 'DebugValue DebugPropertyKey',
      type: VirtualDomElements.Span,
    },
    VirtualDomHelpers.text('testKey'),
    expect.any(Object),
    {
      childCount: 1,
      children: [{ childCount: 0, text: 'testValue', type: 12 }],
      className: 'DebugValue DebugValueString',
      type: VirtualDomElements.Span,
    },
  ])
})
