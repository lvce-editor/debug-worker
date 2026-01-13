import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getChevronDownVirtualDom = (extraClassName = ''): VirtualDomNode => {
  return {
    childCount: 0,
    className: `${ClassNames.Chevron} MaskIconChevronDown ${extraClassName}`,
    type: VirtualDomElements.Div,
  }
}

export const getChevronRightVirtualDom = (extraClassName = ''): VirtualDomNode => {
  return {
    childCount: 0,
    className: `${ClassNames.Chevron} MaskIconChevronRight ${extraClassName}`,
    type: VirtualDomElements.Div,
  }
}
