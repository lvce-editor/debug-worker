import type { CallStackItem } from '../CallStackItem/CallStackItem.ts'
import type { ParsedScriptMap } from '../ParsedScriptMap/ParsedScriptMap.ts'

export interface OpenInfo {
  readonly uri: string
  readonly languageId: string
  readonly rowIndex: number
  readonly columnIndex: number
}

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
