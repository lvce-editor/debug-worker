import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as ViewletRunAndDebugStrings from '../DebugStrings/DebugStrings.ts'
import * as GetChevronVirtualDom from '../GetChevronVirtualDom/GetChevronVirtualDom.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const textBreakPoints = text(ViewletRunAndDebugStrings.breakPoints())

export const renderBreakPoints = (state: RunAndDebugState): readonly VirtualDomNode[] => {
  const { breakPointsExpanded } = state
  return [
    {
      type: VirtualDomElements.Div,
      className: MergeClassNames.mergeClassNames(ClassNames.DebugSectionHeader, 'DebugSectionHeaderBreakPoints'),
      tabIndex: 0,
      childCount: 2,
      onClick: 'handleClickSectionBreakPoints',
    },
    breakPointsExpanded ? GetChevronVirtualDom.getChevronDownVirtualDom() : GetChevronVirtualDom.getChevronRightVirtualDom(),
    textBreakPoints,
  ]
}
