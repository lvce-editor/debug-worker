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
    type: DebugRowType.WatchExpression,
    text: '',
    expanded: false,
    key: 'testKey',
    value: 'testValue',
    indent: 0,
    valueType: '',
    name: '',
    description: '',
    index: 0,
  }
  const result = renderWatchExpression(row, -1, 0)
  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: ClassNames.DebugRow,
      role: AriaRoles.TreeItem,
      childCount: 4,
      'data-index': 0,
      onClick: DomEventListenerFunctions.HandleClickWatchExpression,
      onContextMenu: DomEventListenerFunctions.HandleWatchExpressionContextMenu,
    },
    {
      type: VirtualDomElements.Span,
      className: ClassNames.DebugValueScopeName,
      childCount: 1,
    },
    VirtualDomHelpers.text('testKey'),
    separator,
    {
      type: VirtualDomElements.Span,
      className: ClassNames.DebugValue,
      childCount: 1,
    },
    VirtualDomHelpers.text('testValue'),
    {
      type: VirtualDomElements.Button,
      title: DebugStrings.deleteWatchExpression(),
      className: MergeClassNames.mergeClassNames(ClassNames.IconButton, ClassNames.DebugSectionAction, ClassNames.DeleteWatchExpression),
      'data-index': 0,
      onClick: DomEventListenerFunctions.HandleClickWatchExpressionDelete,
      childCount: 1,
    },
    VirtualDomHelpers.text('×'),
  ])
})
