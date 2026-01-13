import { test, expect } from '@jest/globals'
import type { DebugRow } from '../src/parts/DebugRow/DebugRow.ts'
import * as AriaRoles from '../src/parts/AriaRoles/AriaRoles.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetChevronVirtualDom from '../src/parts/GetChevronVirtualDom/GetChevronVirtualDom.ts'
import * as GetRunAndDebugRowSectionHeadingVirtualDom from '../src/parts/GetRunAndDebugRowSectionHeadingVirtualDom/GetRunAndDebugRowSectionHeadingVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../src/parts/VirtualDomHelpers/VirtualDomHelpers.ts'

test('renderSectionHeading - expanded', () => {
  const row: DebugRow = {
    description: '',
    expanded: true,
    indent: 0,
    index: 0,
    key: 'test-key',
    name: '',
    posInset: 1,
    setSize: 1,
    text: 'test heading',
    type: DebugRowType.SectionHeading,
    value: '',
    valueType: '',
  }
  const result = GetRunAndDebugRowSectionHeadingVirtualDom.renderSectionHeading(row, -1, 0)
  expect(result[0]).toEqual({
    ariaExpanded: true,
    ariaLevel: 1,
    ariaPosInSet: 1,
    ariaSetSize: 1,
    childCount: 2,
    className: 'DebugSectionHeader DebugRow',
    'data-index': 0,
    'data-name': 'test-key',
    onClick: DomEventListenerFunctions.HandleClickSectionHeading,
    onContextMenu: DomEventListenerFunctions.HandleSectionHeaderContextMenu,
    role: AriaRoles.TreeItem,
    type: VirtualDomElements.Div,
  })
  expect(result[1]).toEqual(GetChevronVirtualDom.getChevronDownVirtualDom())
  expect(result[2]).toEqual(VirtualDomHelpers.text('test heading'))
})

test('renderSectionHeading - collapsed', () => {
  const row: DebugRow = {
    description: '',
    expanded: false,
    indent: 0,
    index: 0,
    key: 'test-key',
    name: '',
    posInset: 1,
    setSize: 1,
    text: 'test heading',
    type: DebugRowType.SectionHeading,
    value: '',
    valueType: '',
  }
  const result = GetRunAndDebugRowSectionHeadingVirtualDom.renderSectionHeading(row, -1, 0)
  expect(result[0]).toEqual({
    ariaExpanded: false,
    ariaLevel: 1,
    ariaPosInSet: 1,
    ariaSetSize: 1,
    childCount: 2,
    className: 'DebugSectionHeader DebugRow',
    'data-index': 0,
    'data-name': 'test-key',
    onClick: DomEventListenerFunctions.HandleClickSectionHeading,
    onContextMenu: DomEventListenerFunctions.HandleSectionHeaderContextMenu,
    role: AriaRoles.TreeItem,
    type: VirtualDomElements.Div,
  })
  expect(result[1]).toEqual(GetChevronVirtualDom.getChevronRightVirtualDom())
  expect(result[2]).toEqual(VirtualDomHelpers.text('test heading'))
})
