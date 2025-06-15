import { test, expect } from '@jest/globals'
import { text } from '@lvce-editor/virtual-dom-worker'
import type { DebugRow } from '../src/parts/DebugRow/DebugRow.ts'
import * as AriaRoles from '../src/parts/AriaRoles/AriaRoles.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { renderWatchExpression } from '../src/parts/RenderWatchExpression/RenderWatchExpression.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('should render watch expression', () => {
  const row: DebugRow = {
    key: 'x + y',
    value: '42',
    text: '',
    type: 0,
    description: '',
    expanded: false,
    indent: 0,
    name: '',
    valueType: '',
  }
  const result = renderWatchExpression(row)
  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: ClassNames.DebugRow,
      role: AriaRoles.TreeItem,
      childCount: 2,
    },
    {
      type: VirtualDomElements.Span,
      className: ClassNames.DebugValueScopeName,
      childCount: 1,
    },
    text('x + y'),
    {
      type: VirtualDomElements.Span,
      className: ClassNames.DebugValue,
      childCount: 1,
    },
    text('42'),
  ])
})
