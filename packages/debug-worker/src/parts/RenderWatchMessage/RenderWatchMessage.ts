import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import { getDebugRowClassName } from '../GetDebugRowClassName/GetDebugRowClassName.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const renderWatchMessage = (row: DebugRow, selectedIndex: number, rowIndex: number): readonly VirtualDomNode[] => {
  const { index, posInset, setSize, text } = row
  const isSelected = rowIndex === selectedIndex
  const className = getDebugRowClassName('DebugRow WatchMessage', isSelected)
  return [
    {
      ariaPosInSet: posInset,
      ariaSetSize: setSize,
      childCount: 1,
      className,
      'data-index': index,
      type: VirtualDomElements.Div,
    },

    VirtualDomHelpers.text(text),
  ]
}
