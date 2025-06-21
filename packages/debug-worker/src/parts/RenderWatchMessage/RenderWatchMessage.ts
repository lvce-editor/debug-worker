import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import { getDebugRowClassName } from '../GetDebugRowClassName/GetDebugRowClassName.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const renderWatchMessage = (row: DebugRow, selectedIndex: number, rowIndex: number): readonly VirtualDomNode[] => {
  const { text } = row
  const isSelected = rowIndex === selectedIndex
  const className = getDebugRowClassName('WatchMessage', isSelected)
  return [
    {
      type: VirtualDomElements.Div,
      className,
      childCount: 1,
    },

    VirtualDomHelpers.text(text),
  ]
}
