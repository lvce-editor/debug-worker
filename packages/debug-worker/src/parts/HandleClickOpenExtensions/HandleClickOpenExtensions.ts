import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

export const handleClickOpenExtensions = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  await RendererWorker.openExtensions()
  return state
}
