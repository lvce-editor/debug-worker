import { test, expect } from '@jest/globals'
import type { DebugRowAction } from '../src/parts/DebugRow/DebugRow.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getActionDom } from '../src/parts/GetActionDom/GetActionDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../src/parts/VirtualDomHelpers/VirtualDomHelpers.ts'

test('should return virtual DOM nodes for action', () => {
  const action: DebugRowAction = {
    id: 'test-action',
    title: 'Test Action',
    icon: '⚡',
  }

  const result = getActionDom(action)

  expect(result).toEqual([
    {
      type: VirtualDomElements.Button,
      className: ClassNames.DebugSectionAction,
      title: 'Test Action',
      onClick: DomEventListenerFunctions.HandleClickSectionAction,
      name: 'test-action',
      childCount: 1,
    },
    VirtualDomHelpers.text('⚡'),
  ])
})

test('should handle action with different properties', () => {
  const action: DebugRowAction = {
    id: 'add-watch',
    title: 'Add Watch Expression',
    icon: '+',
  }

  const result = getActionDom(action)

  expect(result).toEqual([
    {
      type: VirtualDomElements.Button,
      className: ClassNames.DebugSectionAction,
      title: 'Add Watch Expression',
      onClick: DomEventListenerFunctions.HandleClickSectionAction,
      name: 'add-watch',
      childCount: 1,
    },
    VirtualDomHelpers.text('+'),
  ])
})

test('should handle action with empty strings', () => {
  const action: DebugRowAction = {
    id: '',
    title: '',
    icon: '',
  }

  const result = getActionDom(action)

  expect(result).toEqual([
    {
      type: VirtualDomElements.Button,
      className: ClassNames.DebugSectionAction,
      title: '',
      onClick: DomEventListenerFunctions.HandleClickSectionAction,
      name: '',
      childCount: 1,
    },
    VirtualDomHelpers.text(''),
  ])
})

test('should handle action with special characters in icon', () => {
  const action: DebugRowAction = {
    id: 'delete-action',
    title: 'Delete Item',
    icon: '🗑️',
  }

  const result = getActionDom(action)

  expect(result).toEqual([
    {
      type: VirtualDomElements.Button,
      className: ClassNames.DebugSectionAction,
      title: 'Delete Item',
      onClick: DomEventListenerFunctions.HandleClickSectionAction,
      name: 'delete-action',
      childCount: 1,
    },
    VirtualDomHelpers.text('🗑️'),
  ])
})
