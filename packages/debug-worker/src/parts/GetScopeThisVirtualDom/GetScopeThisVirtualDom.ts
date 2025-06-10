import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetDebugValueClassName from '../GetDebugValueClassName/GetDebugValueClassName.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'
import { separator } from '../Separator/Separator.ts'

export const getScopeThisVirtualDom = (scope: any): readonly VirtualDomNode[] => {
  const { indent, key, value, valueType } = scope
  const className = GetDebugValueClassName.getDebugValueClassName(valueType)
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.DebugRow,
      paddingLeft: indent,
      childCount: 3,
      onPointerDown: DomEventListenerFunctions.HandleClickScopeValue,
    },
    {
      type: VirtualDomElements.Span,
      className: 'DebugValue DebugPropertyKey',
      childCount: 1,
    },
    text(key),
    separator,
    {
      type: VirtualDomElements.Span,
      className: 'DebugValue ' + className,
      childCount: 1,
    },
    text(value),
  ]
}
