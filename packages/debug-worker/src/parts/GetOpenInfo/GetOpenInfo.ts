import type { CallStackItem } from '../CallStackItem/CallStackItem.ts'
import type { OpenInfo } from '../OpenInfo/OpenInfo.ts'
import type { ParsedScriptMap } from '../ParsedScriptMap/ParsedScriptMap.ts'
import { getDebugUri } from '../GetDebugUri/GetDebugUri.ts'
import { isSupportedOpenUri } from '../IsSupportedOpenUri/IsSupportedOpenUri.ts'

export const getOpenInfo = (id: number, parsedScripts: ParsedScriptMap, item: CallStackItem): OpenInfo => {
  const { location } = item
  const { scriptId, lineNumber, columnNumber } = location
  const script = parsedScripts[scriptId]
  const { url, scriptLanguage } = script

  if (isSupportedOpenUri(url)) {
    return {
      uri: url,
      languageId: scriptLanguage,
      rowIndex: lineNumber,
      columnIndex: columnNumber,
    }
  }
  const debugUri = getDebugUri(id, scriptId)
  return {
    uri: debugUri,
    languageId: scriptLanguage,
    rowIndex: lineNumber,
    columnIndex: columnNumber,
  }
}
