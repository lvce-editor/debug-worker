import { test, expect } from '@jest/globals'
import type { DebugRow } from '../src/parts/DebugRow/DebugRow.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import { renderWatchMessage } from '../src/parts/RenderWatchMessage/RenderWatchMessage.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../src/parts/VirtualDomHelpers/VirtualDomHelpers.ts'

test('renderWatchMessage', () => {
  const row: DebugRow = {
    type: DebugRowType.WatchMessage,
    text: 'test message',
    expanded: false,
    key: '',
    value: '',
    indent: 0,
    valueType: '',
    name: '',
    description: '',
    index: 0,
    setSize: 1,
    posInset: 1,
  }
  const result = renderWatchMessage(row, -1, 0)
  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: 'DebugRow WatchMessage',
      childCount: 1,
      'data-index': 0,
      ariaPosInset: 1,
      ariaSetSize: 1,
    },

    VirtualDomHelpers.text('test message'),
  ])
})
