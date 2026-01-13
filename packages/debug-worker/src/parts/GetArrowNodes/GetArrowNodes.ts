import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getArrowNodes = (hasArrow: boolean | undefined): readonly VirtualDomNode[] => {
  if (!hasArrow) {
    return []
  }

  return [
    {
      childCount: 1,
      className: ClassNames.CallStackArrow,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      className: 'MaskIcon MaskIconArrowRight',
      type: VirtualDomElements.Div,
    },
  ]
}
