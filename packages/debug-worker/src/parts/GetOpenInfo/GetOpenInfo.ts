import type { CallStackItem } from '../CallStackItem/CallStackItem.ts'
import type { OpenInfo } from '../OpenInfo/OpenInfo.ts'
import type { ParsedScriptMap } from '../ParsedScriptMap/ParsedScriptMap.ts'

export const getOpenInfo = (parsedScripts: ParsedScriptMap, item: CallStackItem): OpenInfo => {
  const { location } = item
  const { scriptId, lineNumber, columnNumber } = location
  const script = parsedScripts[scriptId]
  return {
    uri: script.url,
    languageId: script.scriptLanguage,
    rowIndex: lineNumber,
    columnIndex: columnNumber,
  }
}
