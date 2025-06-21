import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import type { DebugRow } from '../DebugRow/DebugRow.ts'

export interface DebugRowRenderer {
  (row: DebugRow, selectedIndex: number, rowIndex: number): readonly VirtualDomNode[]
}
