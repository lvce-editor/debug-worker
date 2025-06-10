import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'
import { separator } from '../Separator/Separator.ts'

const debugRow3 = {
  type: VirtualDomElements.Div,
  className: ClassNames.DebugRow,
  childCount: 3,
  onPointerDown: DomEventListenerFunctions.HandleClickScopeValue,
}

export const getScopeExceptionVirtualDom = (scope: any): readonly VirtualDomNode[] => {
  const { key, value } = scope
  return [
    debugRow3,
    {
      type: VirtualDomElements.Span,
      childCount: 1,
    },
    text(key),
    separator,

    {
      type: VirtualDomElements.Span,
      childCount: 1,
    },
    text(value),
  ]
}
