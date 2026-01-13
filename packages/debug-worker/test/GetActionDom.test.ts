import { test, expect } from '@jest/globals'
import type { DebugRowAction } from '../src/parts/DebugRow/DebugRow.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getActionDom } from '../src/parts/GetActionDom/GetActionDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../src/parts/VirtualDomHelpers/VirtualDomHelpers.ts'

test('should return virtual DOM nodes for action', () => {
  const action: DebugRowAction = {
    icon: '⚡',
    id: 'test-action',
    title: 'Test Action',
  }

  const result = getActionDom(action)

  expect(result).toEqual([
    {
      childCount: 1,
      className: ClassNames.DebugSectionAction,
      name: 'test-action',
      onClick: DomEventListenerFunctions.HandleClickSectionAction,
      title: 'Test Action',
      type: VirtualDomElements.Button,
    },
    VirtualDomHelpers.text('⚡'),
  ])
})

test('should handle action with different properties', () => {
  const action: DebugRowAction = {
    icon: '+',
    id: 'add-watch',
    title: 'Add Watch Expression',
  }

  const result = getActionDom(action)

  expect(result).toEqual([
    {
      childCount: 1,
      className: ClassNames.DebugSectionAction,
      name: 'add-watch',
      onClick: DomEventListenerFunctions.HandleClickSectionAction,
      title: 'Add Watch Expression',
      type: VirtualDomElements.Button,
    },
    VirtualDomHelpers.text('+'),
  ])
})

test('should handle action with empty strings', () => {
  const action: DebugRowAction = {
    icon: '',
    id: '',
    title: '',
  }

  const result = getActionDom(action)

  expect(result).toEqual([
    {
      childCount: 1,
      className: ClassNames.DebugSectionAction,
      name: '',
      onClick: DomEventListenerFunctions.HandleClickSectionAction,
      title: '',
      type: VirtualDomElements.Button,
    },
    VirtualDomHelpers.text(''),
  ])
})

test('should handle action with special characters in icon', () => {
  const action: DebugRowAction = {
    icon: '🗑️',
    id: 'delete-action',
    title: 'Delete Item',
  }

  const result = getActionDom(action)

  expect(result).toEqual([
    {
      childCount: 1,
      className: ClassNames.DebugSectionAction,
      name: 'delete-action',
      onClick: DomEventListenerFunctions.HandleClickSectionAction,
      title: 'Delete Item',
      type: VirtualDomElements.Button,
    },
    VirtualDomHelpers.text('🗑️'),
  ])
})
