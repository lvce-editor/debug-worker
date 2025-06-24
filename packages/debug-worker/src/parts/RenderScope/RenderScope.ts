import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetChevronVirtualDom from '../GetChevronVirtualDom/GetChevronVirtualDom.ts'
import { getDebugRowClassName } from '../GetDebugRowClassName/GetDebugRowClassName.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const renderScope = (row: DebugRow, selectedIndex: number, rowIndex: number): readonly VirtualDomNode[] => {
  const { key, expanded, index } = row
  const isSelected = rowIndex === selectedIndex
  const className = getDebugRowClassName(ClassNames.DebugRow, isSelected)
  return [
    {
      type: VirtualDomElements.Div,
      className,
      role: AriaRoles.TreeItem,
      ariaExpanded: expanded,
      ariaLevel: 2,
      childCount: 2,
      onPointerDown: DomEventListenerFunctions.HandleClickScopeValue,
      'data-name': key,
      'data-index': index,
    },
    expanded ? GetChevronVirtualDom.getChevronDownVirtualDom() : GetChevronVirtualDom.getChevronRightVirtualDom(),
    {
      type: VirtualDomElements.Span,
      className: MergeClassNames.mergeClassNames(ClassNames.DebugValue, ClassNames.DebugValueScopeName),
      childCount: 1,
    },
    VirtualDomHelpers.text(key),
  ]
}
