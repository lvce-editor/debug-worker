import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getArrowNodes = (hasArrow: boolean | undefined): readonly VirtualDomNode[] => {
  if (!hasArrow) {
    return []
  }

  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.CallStackArrow,
      childCount: 0,
    },
  ]
}
