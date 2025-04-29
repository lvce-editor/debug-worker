import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetChevronVirtualDom from '../GetChevronVirtualDom/GetChevronVirtualDom.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const renderSectionHeading = (row: DebugRow): readonly VirtualDomNode[] => {
  const { expanded, text } = row
  return [
    {
      type: VirtualDomElements.Div,
      className: MergeClassNames.mergeClassNames(ClassNames.DebugSectionHeader, `DebugSectionHeader${text}`),
      role: AriaRoles.TreeItem,
      ariaExpanded: expanded,
      ariaLevel: 1,
      childCount: 2,
      onClick: DomEventListenerFunctions.HandleClickSectionHeading,
    },
    expanded ? GetChevronVirtualDom.getChevronDownVirtualDom() : GetChevronVirtualDom.getChevronRightVirtualDom(),
    VirtualDomHelpers.text(row.text),
  ]
}
