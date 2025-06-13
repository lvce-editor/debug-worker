import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugRowName from '../DebugRowName/DebugRowName.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import * as DebugSectionId from '../DebugSectionId/DebugSectionId.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'

export const getRunAndDebugVisibleRowsCallStack = (state: RunAndDebugState): readonly DebugRow[] => {
  const { callStack, callStackExpanded } = state
  const rows: DebugRow[] = []
  if (callStackExpanded) {
    rows.push({
      type: DebugRowType.SectionHeading,
      text: DebugStrings.callStack(),
      expanded: true,
      key: DebugSectionId.CallStack,
      value: '',
      indent: 0,
      valueType: '',
      name: DebugRowName.CallStack,
      description: '',
    })
    if (callStack.length === 0) {
      rows.push({
        type: DebugRowType.Message,
        text: DebugStrings.notPaused(),
        expanded: false,
        key: '',
        value: '',
        indent: 0,
        valueType: '',
        name: '',
        description: '',
      })
    } else {
      for (const item of callStack) {
        rows.push({
          type: DebugRowType.CallStack,
          text: item.functionName,
          expanded: false,
          key: DebugSectionId.CallStack,
          value: '',
          indent: 0,
          valueType: '',
          name: '',
          description: '',
        })
      }
    }
  } else {
    rows.push({
      type: DebugRowType.SectionHeading,
      text: DebugStrings.callStack(),
      expanded: false,
      key: '',
      value: '',
      indent: 0,
      valueType: '',
      name: DebugRowName.CallStack,
      description: '',
    })
  }
  return rows
}
