import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DebugSectionId from '../DebugSectionId/DebugSectionId.ts'
import * as ViewletRunAndDebugStrings from '../DebugStrings/DebugStrings.ts'
import * as GetChevronVirtualDom from '../GetChevronVirtualDom/GetChevronVirtualDom.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const textBreakPoints = text(ViewletRunAndDebugStrings.breakPoints())

export const renderBreakPoints = (state: RunAndDebugState): readonly VirtualDomNode[] => {
  const { breakPointsExpanded } = state
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.DebugSectionHeader,
      tabIndex: 0,
      childCount: 2,
      onClick: DomEventListenerFunctions.HandleClickSectionBreakPoints,
      'data-name': DebugSectionId.BreakPoints,
    },
    breakPointsExpanded ? GetChevronVirtualDom.getChevronDownVirtualDom() : GetChevronVirtualDom.getChevronRightVirtualDom(),
    textBreakPoints,
  ]
}
