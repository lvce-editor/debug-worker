import { jest, test, expect } from '@jest/globals'
import { renderItems } from '../src/parts/RenderItems/RenderItems.ts'
import * as GetRunAndDebugVisibleRows from '../src/parts/GetRunAndDebugVisibleRows/GetRunAndDebugVisibleRows.ts'
import * as GetRunAndDebugVirtualDom2 from '../src/parts/GetRunAndDebugVirtualDom2/GetRunAndDebugVirtualDom2.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import type { DebugRow } from '../src/parts/DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../src/parts/VirtualDomNode/VirtualDomNode.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'
import * as AriaRoles from '../src/parts/AriaRoles/AriaRoles.ts'

test('renderItems', () => {
  const mockRows: readonly DebugRow[] = [
    {
      type: 1,
      text: 'test',
      expanded: false,
      key: '1',
      value: 'value',
      indent: 0,
      valueType: 'string',
      name: 'test',
    },
  ]

  const mockDom: readonly VirtualDomNode[] = [
    {
      type: VirtualDomElements.Div,
      className: 'Viewlet RunAndDebug',
      tabIndex: 0,
      childCount: 1,
      role: AriaRoles.Tree,
    },
  ]

  const oldState = createDefaultState()
  const newState = { ...createDefaultState(), id: 1 }

  const result = renderItems(oldState, newState)

  expect(result).toEqual(['Viewlet.setDom2', 1, expect.anything()])
})
