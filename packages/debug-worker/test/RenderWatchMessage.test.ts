import { test, expect } from '@jest/globals'
import type { DebugRow } from '../src/parts/DebugRow/DebugRow.ts'
import { renderWatchMessage } from '../src/parts/RenderWatchMessage/RenderWatchMessage.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('renderWatchMessage', () => {
  const row: DebugRow = {
    type: 0,
    text: 'test message',
    expanded: false,
    key: 'test',
    value: '',
    indent: 0,
    valueType: '',
    name: '',
    description: '',
  }
  const result = renderWatchMessage(row)
  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: 'WatchMessage',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: 'test message',
      childCount: 0,
    },
  ])
})
