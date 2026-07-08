import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as Debug from '../Debug/Debug.ts'
import * as DebugState from '../DebugState/DebugState.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'
import * as ExtensionHostDebug from '../ExtensionHostDebug/ExtensionHostDebug.ts'
import * as IsNoDebugProviderFound from '../IsNoDebugProviderFound/IsNoDebugProviderFound.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'

export const loadContentLater = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { debugId } = state
  try {
    await Debug.start(debugId)
  } catch (error) {
    if (!IsNoDebugProviderFound.isNoDebugProviderFound(error)) {
      throw error
    }
    const debugProviderName = IsNoDebugProviderFound.getDebugProviderName(error)
    const newState: RunAndDebugState = {
      ...state,
      debugProviderMessage: DebugStrings.noDebugProviderFound(debugProviderName),
      debugState: DebugState.MissingProvider,
    }
    return updateVisibleRows(newState)
  }
  const status = await ExtensionHostDebug.getPausedStatus(debugId)
  if (status && status.status === 'unavailable') {
    const newState: RunAndDebugState = {
      ...state,
      debugState: DebugState.Unavailable,
    }
    return updateVisibleRows(newState)
  }
  return state
}
