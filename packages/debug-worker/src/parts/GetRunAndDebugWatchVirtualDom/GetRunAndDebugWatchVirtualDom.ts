import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as ViewletRunAndDebugStrings from '../DebugStrings/DebugStrings.ts'
import * as GetChevronVirtualDom from '../GetChevronVirtualDom/GetChevronVirtualDom.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const watchHeader: VirtualDomNode = {
  type: VirtualDomElements.Div,
  className: ClassNames.DebugSectionHeader,
  tabIndex: 0,
  childCount: 2,
}

export const renderWatch = (state: RunAndDebugState): readonly VirtualDomNode[] => {
  return [watchHeader, GetChevronVirtualDom.getChevronRightVirtualDom(), text(ViewletRunAndDebugStrings.watch())]
}
