import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { getOpenInfo } from '../GetOpenInfo/GetOpenInfo.ts'
import * as OpenUri from '../OpenUri/OpenUri.ts'

export const handleClickCallstackItem = async (state: RunAndDebugState, dataIndex: string): Promise<RunAndDebugState> => {
  const index = Number.parseInt(dataIndex)
  const { callStack, parsedScripts } = state
  const item = callStack[index]
  if (!item) {
    return state
  }
  const { uri, languageId, rowIndex, columnIndex } = getOpenInfo(parsedScripts, item)
  await OpenUri.openUri(uri, languageId, rowIndex, columnIndex)
  return state
}
