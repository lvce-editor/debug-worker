import { test, expect } from '@jest/globals'
import * as AriaRoles from '../src/parts/AriaRoles/AriaRoles.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetRunAndDebugRowSectionHeadingVirtualDom from '../src/parts/GetRunAndDebugRowSectionHeadingVirtualDom/GetRunAndDebugRowSectionHeadingVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('renderSectionHeading - expanded', () => {
  const row = {
    type: 1,
    text: 'Test Section',
    expanded: true,
    key: 'test-key',
    value: 'test-value',
    indent: 0,
    valueType: 'string',
    name: 'test-name',
  }
  const result = GetRunAndDebugRowSectionHeadingVirtualDom.renderSectionHeading(row)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.DebugSectionHeader,
    role: AriaRoles.TreeItem,
    ariaExpanded: true,
    ariaLevel: 1,
    childCount: 2,
    onClick: 'handleClickSectionHeading',
  })
  expect(result[2]).toEqual({
    type: VirtualDomElements.Text,
    text: 'Test Section',
    childCount: 0,
  })
})

test('renderSectionHeading - collapsed', () => {
  const row = {
    type: 1,
    text: 'Test Section',
    expanded: false,
    key: 'test-key',
    value: 'test-value',
    indent: 0,
    valueType: 'string',
    name: 'test-name',
  }
  const result = GetRunAndDebugRowSectionHeadingVirtualDom.renderSectionHeading(row)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.DebugSectionHeader,
    role: AriaRoles.TreeItem,
    ariaExpanded: false,
    ariaLevel: 1,
    childCount: 2,
    onClick: 'handleClickSectionHeading',
  })
  expect(result[2]).toEqual({
    type: VirtualDomElements.Text,
    text: 'Test Section',
    childCount: 0,
  })
})
