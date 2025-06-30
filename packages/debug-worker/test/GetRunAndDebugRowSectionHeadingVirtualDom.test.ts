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
    type: DebugRowType.SectionHeading,
    text: 'test heading',
    expanded: true,
    key: 'test-key',
    value: '',
    indent: 0,
    valueType: '',
    name: '',
    description: '',
    index: 0,
    setSize: 1,
    posInset: 1,
  }
  const result = GetRunAndDebugRowSectionHeadingVirtualDom.renderSectionHeading(row, -1, 0)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: 'DebugSectionHeader',
    role: AriaRoles.TreeItem,
    ariaExpanded: true,
    ariaLevel: 1,
    childCount: 2,
    onClick: DomEventListenerFunctions.HandleClickSectionHeading,
    onContextMenu: DomEventListenerFunctions.HandleSectionHeaderContextMenu,
    'data-index': 0,
    'data-name': 'test-key',
  })
  expect(result[1]).toEqual(GetChevronVirtualDom.getChevronDownVirtualDom())
  expect(result[2]).toEqual(VirtualDomHelpers.text('test heading'))
})

test('renderSectionHeading - collapsed', () => {
  const row: DebugRow = {
    type: DebugRowType.SectionHeading,
    text: 'test heading',
    expanded: false,
    key: 'test-key',
    value: '',
    indent: 0,
    valueType: '',
    name: '',
    description: '',
    index: 0,
    setSize: 1,
    posInset: 1,
  }
  const result = GetRunAndDebugRowSectionHeadingVirtualDom.renderSectionHeading(row, -1, 0)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: 'DebugSectionHeader',
    role: AriaRoles.TreeItem,
    ariaExpanded: false,
    ariaLevel: 1,
    childCount: 2,
    onClick: DomEventListenerFunctions.HandleClickSectionHeading,
    onContextMenu: DomEventListenerFunctions.HandleSectionHeaderContextMenu,
    'data-index': 0,
    'data-name': 'test-key',
  })
  expect(result[1]).toEqual(GetChevronVirtualDom.getChevronRightVirtualDom())
  expect(result[2]).toEqual(VirtualDomHelpers.text('test heading'))
})
