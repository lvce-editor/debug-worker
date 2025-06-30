import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { ParsedScript } from '../ParsedScript/ParsedScript.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugRowName from '../DebugRowName/DebugRowName.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import * as DebugSectionId from '../DebugSectionId/DebugSectionId.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'
import { formatLocation } from '../FormatLocation/FormatLocation.ts'

const unknownScript: ParsedScript = {
  scriptId: '',
  scriptLanguage: '',
  url: 'unknown',
}

export const getRunAndDebugVisibleRowsCallStack = (state: RunAndDebugState, startingIndex: number): readonly DebugRow[] => {
  const { callStack, callStackExpanded, parsedScripts, callStackVisible } = state

  if (!callStackVisible) {
    return []
  }

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
      index: startingIndex,
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
        index: startingIndex + 1,
      })
    } else {
      for (let i = 0; i < callStack.length; i++) {
        const item = callStack[i]
        const { scriptId, lineNumber, columnNumber } = item.location
        const script = parsedScripts[scriptId] || unknownScript
        const description = formatLocation(script.url, lineNumber, columnNumber)
        const hasArrow = i === 0
        rows.push({
          type: DebugRowType.CallStack,
          text: item.functionName,
          expanded: false,
          key: DebugSectionId.CallStack,
          value: '',
          indent: 0,
          valueType: '',
          name: '',
          description,
          hasArrow,
          index: startingIndex + i + 1,
        })
      }
    }
  } else {
    rows.push({
      type: DebugRowType.SectionHeading,
      text: DebugStrings.callStack(),
      expanded: false,
      key: DebugSectionId.CallStack,
      value: '',
      indent: 0,
      valueType: '',
      name: DebugRowName.CallStack,
      description: '',
      index: startingIndex,
    })
  }
  return rows
}
