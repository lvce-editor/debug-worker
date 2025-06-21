import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import type { DebugRow } from '../DebugRow/DebugRow.ts'
import * as GetRunAndDebugRowRenderer from '../GetRunAndDebugRowRenderer/GetRunAndDebugRowRenderer.ts'

export const getRunAndDebugRowVirtualDom = (row: DebugRow, selectedIndex: number, rowIndex: number): readonly VirtualDomNode[] => {
  const renderer = GetRunAndDebugRowRenderer.getRowRenderer(row.type)
  return renderer(row, selectedIndex, rowIndex)
}
