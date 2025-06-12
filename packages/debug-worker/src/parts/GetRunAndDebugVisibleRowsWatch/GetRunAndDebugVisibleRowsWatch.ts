import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugRowName from '../DebugRowName/DebugRowName.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import * as DebugSectionId from '../DebugSectionId/DebugSectionId.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'

export const getRunAndDebugVisibleRowsWatch = (state: RunAndDebugState): readonly DebugRow[] => {
  const { watchExpanded } = state
  return [
    {
      type: DebugRowType.SectionHeading,
      text: DebugStrings.watch(),
      expanded: watchExpanded,
      key: DebugSectionId.Watch,
      value: '',
      indent: 0,
      valueType: '',
      name: DebugRowName.Watch, // TODO i18n
    },
  ]
}
