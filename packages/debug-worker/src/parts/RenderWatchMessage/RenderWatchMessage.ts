import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const renderWatchMessage = (row: DebugRow): readonly VirtualDomNode[] => {
  const { text } = row
  return [
    {
      type: VirtualDomElements.Div,
      className: 'WatchMessage',
      childCount: 1,
    },

    VirtualDomHelpers.text(text),
  ]
}
