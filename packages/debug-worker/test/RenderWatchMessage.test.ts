import { test, expect } from '@jest/globals'
import type { DebugRow } from '../src/parts/DebugRow/DebugRow.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import { renderWatchMessage } from '../src/parts/RenderWatchMessage/RenderWatchMessage.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../src/parts/VirtualDomHelpers/VirtualDomHelpers.ts'

test('renderWatchMessage', () => {
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
    type: DebugRowType.WatchMessage,
    value: '',
    valueType: '',
  }
  const result = renderWatchMessage(row, -1, 0)
  expect(result).toEqual([
    {
      ariaPosInSet: 1,
      ariaSetSize: 1,
      childCount: 1,
      className: 'DebugRow WatchMessage',
      'data-index': 0,
      type: VirtualDomElements.Div,
    },

    VirtualDomHelpers.text('test message'),
  ])
})
