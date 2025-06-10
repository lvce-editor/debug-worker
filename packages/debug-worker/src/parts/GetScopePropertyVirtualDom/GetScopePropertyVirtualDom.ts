import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DebugItemFlags from '../DebugItemFlags/DebugItemFlags.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetChevronVirtualDom from '../GetChevronVirtualDom/GetChevronVirtualDom.ts'
import * as GetDebugValueClassName from '../GetDebugValueClassName/GetDebugValueClassName.ts'
import { separator } from '../Separator/Separator.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const debugPropertyKey = {
  type: VirtualDomElements.Span,
  className: ClassNames.DebugValue + ' ' + ClassNames.DebugPropertyKey,
  childCount: 1,
}

export const getScopePropertyVirtualDom = (scope: any): readonly VirtualDomNode[] => {
  const { indent, key, value, valueType, flags } = scope
  const className = GetDebugValueClassName.getDebugValueClassName(valueType)
  const isExpanded = flags & DebugItemFlags.Expanded
  const isCollapsed = flags & DebugItemFlags.Collapsed
  // @ts-ignore
  const isFocused = flags & DebugItemFlags.Focused
  const dom = []
  dom.push({
    type: VirtualDomElements.Div,
    className: ClassNames.DebugRow,
    paddingLeft: indent,
    childCount: 3,
    onPointerDown: DomEventListenerFunctions.HandleClickScopeValue,
  })
  if (isExpanded) {
    dom[0].childCount++
    dom.push(GetChevronVirtualDom.getChevronDownVirtualDom(ClassNames.DebugPropertyChevron))
  } else if (isCollapsed) {
    dom[0].childCount++
    dom.push(GetChevronVirtualDom.getChevronRightVirtualDom(ClassNames.DebugPropertyChevron))
  }
  dom.push(
    debugPropertyKey,
    text(key),
    separator,
    {
      type: VirtualDomElements.Span,
      className: ClassNames.DebugValue + ' ' + className,
      childCount: 1,
    },
    text(value),
  )
  return dom
}
