import type { CallStackItem } from '../CallStackItem/CallStackItem.ts'
import type { OpenInfo } from '../OpenInfo/OpenInfo.ts'
import type { ParsedScriptMap } from '../ParsedScriptMap/ParsedScriptMap.ts'
import { getDebugUri } from '../GetDebugUri/GetDebugUri.ts'
import { isSupportedOpenUri } from '../IsSupportedOpenUri/IsSupportedOpenUri.ts'

export const getOpenInfo = (id: number, parsedScripts: ParsedScriptMap, item: CallStackItem): OpenInfo => {
  const { location } = item
  const { columnNumber, lineNumber, scriptId } = location
  const script = parsedScripts[scriptId]
  const { scriptLanguage, url } = script

  if (isSupportedOpenUri(url)) {
    return {
      columnIndex: columnNumber,
      languageId: scriptLanguage,
      rowIndex: lineNumber,
      uri: url,
    }
  }
  const debugUri = getDebugUri(id, scriptId)
  return {
    columnIndex: columnNumber,
    languageId: scriptLanguage,
    rowIndex: lineNumber,
    uri: debugUri,
  }
}
