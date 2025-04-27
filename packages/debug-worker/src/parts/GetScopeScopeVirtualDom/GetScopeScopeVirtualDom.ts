import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DebugItemFlags from '../DebugItemFlags/DebugItemFlags.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetChevronVirtualDom from '../GetChevronVirtualDom/GetChevronVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getScopeScopeVirtualDom = (scope: any): readonly VirtualDomNode[] => {
  const { key, flags } = scope
  let className = ClassNames.DebugRow
  const isFocused = flags & DebugItemFlags.Focused
  const isExpanded = flags & DebugItemFlags.Expanded
  if (isFocused) {
    className += ' TreeItemActive'
  }
  return [
    {
      type: VirtualDomElements.Div,
      className,
      childCount: 2,
      onPointerDown: DomEventListenerFunctions.HandleClickScopeValue,
      ariaExpanded: isExpanded,
    },
    isExpanded ? GetChevronVirtualDom.getChevronDownVirtualDom() : GetChevronVirtualDom.getChevronRightVirtualDom(),
    {
      type: VirtualDomElements.Span,
      className: 'DebugValue DebugValueScopeName',
      childCount: 1,
    },
    text(key),
  ]
}
