import { test, expect } from '@jest/globals'
import type { DebugRow } from '../src/parts/DebugRow/DebugRow.ts'
import * as AriaRoles from '../src/parts/AriaRoles/AriaRoles.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import * as DebugStrings from '../src/parts/DebugStrings/DebugStrings.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as MergeClassNames from '../src/parts/MergeClassNames/MergeClassNames.ts'
import { renderWatchExpression } from '../src/parts/RenderWatchExpression/RenderWatchExpression.ts'
import { separator } from '../src/parts/Separator/Separator.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../src/parts/VirtualDomHelpers/VirtualDomHelpers.ts'

test('should render watch expression', () => {
  const row: DebugRow = {
    description: '',
    expanded: false,
    indent: 0,
    index: 0,
    key: 'testKey',
    name: '',
    posInset: 1,
    setSize: 1,
    text: '',
    type: DebugRowType.WatchExpression,
    value: 'testValue',
    valueType: '',
  }
  const result = renderWatchExpression(row, -1, 0)
  expect(result).toEqual([
    {
      childCount: 4,
      className: ClassNames.DebugRow,
      'data-index': 0,
      onClick: DomEventListenerFunctions.HandleClickWatchExpression,
      onContextMenu: DomEventListenerFunctions.HandleWatchExpressionContextMenu,
      role: AriaRoles.TreeItem,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: ClassNames.DebugValueScopeName,
      type: VirtualDomElements.Span,
    },
    VirtualDomHelpers.text('testKey'),
    separator,
    {
      childCount: 1,
      className: ClassNames.DebugValue,
      type: VirtualDomElements.Span,
    },
    VirtualDomHelpers.text('testValue'),
    {
      childCount: 1,
      className: MergeClassNames.mergeClassNames(ClassNames.IconButton, ClassNames.DebugSectionAction, ClassNames.DeleteWatchExpression),
      'data-index': 0,
      onClick: DomEventListenerFunctions.HandleClickWatchExpressionDelete,
      title: DebugStrings.deleteWatchExpression(),
      type: VirtualDomElements.Button,
    },
    VirtualDomHelpers.text('×'),
  ])
})
