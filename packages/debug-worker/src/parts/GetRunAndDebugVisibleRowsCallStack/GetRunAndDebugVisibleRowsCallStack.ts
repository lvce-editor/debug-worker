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

export const getRunAndDebugVisibleRowsCallStack = (state: RunAndDebugState): readonly DebugRow[] => {
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
        const { scriptId, lineNumber, columnNumber } = item.location
        const script = parsedScripts[scriptId] || unknownScript
        const description = formatLocation(script.url, lineNumber, columnNumber)
        const hasArrow = item === callStack[0]
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
          index: callStack.indexOf(item), // TODO use for loop
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
    })
  }
  return rows
}
