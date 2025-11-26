import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { getOpenInfo } from '../GetOpenInfo/GetOpenInfo.ts'
import * as OpenUri from '../OpenUri/OpenUri.ts'
import { parseIndex } from '../ParseIndex/ParseIndex.ts'

export const handleClickCallstackItem = async (state: RunAndDebugState, dataIndex: string): Promise<RunAndDebugState> => {
  const index = parseIndex(dataIndex)
  const { callStack, parsedScripts, uid: id } = state
  const item = callStack[index]
  if (!item) {
    return state
  }
  const { uri, languageId, rowIndex, columnIndex } = getOpenInfo(id, parsedScripts, item)
  await OpenUri.openUri(uri, languageId, rowIndex, columnIndex)
  return state
}
