import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import type { DebugButton } from '../DebugButton/DebugButton.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

const DebugButtonClass = ClassNames.IconButton + ' ' + ClassNames.DebugButton

export const getDebugButtonVirtualDom = (button: DebugButton): readonly VirtualDomNode[] => {
  const { fn, icon, title } = button
  return [
    {
      childCount: 1,
      className: MergeClassNames.mergeClassNames(DebugButtonClass, icon),
      name: fn,
      title,
      type: VirtualDomElements.Button,
    },
    {
      childCount: 0,
      className: `MaskIcon MaskIcon${icon}`,
      type: VirtualDomElements.Div,
    },
  ]
}
