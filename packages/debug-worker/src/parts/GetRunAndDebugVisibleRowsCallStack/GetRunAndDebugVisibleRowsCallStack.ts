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

export const getRunAndDebugVisibleRowsCallStack = (state: RunAndDebugState, startingIndex: number, topLevelCount: number, topLevelIndex: number): readonly DebugRow[] => {
  const { callStack, callStackExpanded, callStackVisible, parsedScripts } = state

  if (!callStackVisible) {
    return []
  }

  const rows: DebugRow[] = []
  if (callStackExpanded) {
    rows.push({
      description: '',
      expanded: true,
      indent: 0,
      index: startingIndex,
      key: DebugSectionId.CallStack,
      name: DebugRowName.CallStack,
      posInset: topLevelIndex + 1,
      setSize: topLevelCount,
      text: DebugStrings.callStack(),
      type: DebugRowType.SectionHeading,
      value: '',
      valueType: '',
    })
    if (callStack.length === 0) {
      rows.push({
        description: '',
        expanded: false,
        indent: 0,
        index: startingIndex + 1,
        key: '',
        name: '',
        posInset: 2,
        setSize: 1,
        text: DebugStrings.notPaused(),
        type: DebugRowType.Message,
        value: '',
        valueType: '',
      })
    } else {
      const setSize = callStack.length + 1

      for (let i = 0; i < callStack.length; i++) {
        const item = callStack[i]
        const { columnNumber, lineNumber, scriptId } = item.location
        const script = parsedScripts[scriptId] || unknownScript
        const description = formatLocation(script.url, lineNumber, columnNumber)
        const hasArrow = i === 0
        rows.push({
          description,
          expanded: false,
          hasArrow,
          indent: 0,
          index: startingIndex + i + 1,
          key: DebugSectionId.CallStack,
          name: '',
          posInset: i + 2,
          setSize: setSize,
          text: item.functionName,
          type: DebugRowType.CallStack,
          value: '',
          valueType: '',
        })
      }
    }
  } else {
    rows.push({
      description: '',
      expanded: false,
      indent: 0,
      index: startingIndex,
      key: DebugSectionId.CallStack,
      name: DebugRowName.CallStack,
      posInset: 1,
      setSize: 1,
      text: DebugStrings.callStack(),
      type: DebugRowType.SectionHeading,
      value: '',
      valueType: '',
    })
  }
  return rows
}
