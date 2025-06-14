import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as OpenUri from '../OpenUri/OpenUri.ts'
import { getOpenInfo } from '../GetOpenInfo/GetOpenInfo.ts'

export const handleClickCallstackItem = async (state: RunAndDebugState, index: number): Promise<RunAndDebugState> => {
  const { callStack, parsedScripts } = state
  const item = callStack[index]
  const { uri, languageId, rowIndex, columnIndex } = getOpenInfo(parsedScripts, item)
  await OpenUri.openUri(uri, languageId, rowIndex, columnIndex)
  return state
}
