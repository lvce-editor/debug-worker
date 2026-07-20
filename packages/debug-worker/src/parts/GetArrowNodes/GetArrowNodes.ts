import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

const callStackArrowNode: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.CallStackArrow,
  type: VirtualDomElements.Div,
}

export const getArrowNodes = (hasArrow: boolean | undefined): readonly VirtualDomNode[] => {
  if (!hasArrow) {
    return []
  }

  return [
    callStackArrowNode,
    {
      childCount: 0,
      className: MergeClassNames.mergeClassNames('MaskIcon', 'MaskIconArrowRight'),
      type: VirtualDomElements.Div,
    },
  ]
}
