import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getDebugRowClassName } from '../GetDebugRowClassName/GetDebugRowClassName.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const renderNoop = (row: DebugRow, selectedIndex: number, rowIndex: number): readonly VirtualDomNode[] => {
  const isSelected = rowIndex === selectedIndex
  const className = getDebugRowClassName(ClassNames.DebugRow, isSelected)
  return [
    {
      type: VirtualDomElements.Div,
      className,
      childCount: 1,
    },
    VirtualDomHelpers.text('unknown row type'),
  ]
}

export const renderMessage = (row: DebugRow, selectedIndex: number, rowIndex: number): readonly VirtualDomNode[] => {
  const isSelected = rowIndex === selectedIndex
  const className = getDebugRowClassName('DebugPausedMessage', isSelected)
  return [
    {
      type: VirtualDomElements.Div,
      className,
      childCount: 1,
    },
    VirtualDomHelpers.text(row.text),
  ]
}
