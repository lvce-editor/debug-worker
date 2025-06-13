import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as Assert from '../Assert/Assert.ts'
import * as Debug from '../Debug/Debug.ts'
import * as DebugState from '../DebugState/DebugState.ts'
import * as GetCallStack from '../GetCallStack/GetCallStack.ts'
import * as GetDebugPausedMessage from '../GetDebugPausedMessage/GetDebugPausedMessage.ts'
import * as GetScopeChain from '../GetScopeChain/GetScopeChain.ts'


const handlePaused = async (state: RunAndDebugState, params: any): Promise<RunAndDebugState> => {
  const { debugId } = state
  const callStack = GetCallStack.getCallStack(params.callFrames)
  const objectId = params.callFrames[0].scopeChain[0].object.objectId
  const callFrameId = params.callFrames[0].callFrameId
  const properties = await Debug.getProperties(debugId, objectId)
  const thisObject = params.callFrames[0].this
  Assert.object(thisObject)
  const scopeChain = GetScopeChain.getScopeChain(params, thisObject, params.callFrames[0].scopeChain, {
    [objectId]: properties,
  })
  const pausedReason = params.reason
  const pausedMessage = GetDebugPausedMessage.getDebugPausedMessage(params.reason)
  return {
    ...state,
    debugState: DebugState.Paused,
    scopeChain,
    scopeExpanded: true,
    callStack,
    pausedReason,
    pausedMessage,
    callFrameId,
    expandedIds: [objectId],
  }
}

export { handlePaused,       }

export { resume, pause, togglePause, stepOver, stepInto, stepOut } from '../DebugControl/DebugControl.ts'
export { handleDebugInput, handleEvaluate } from '../DebugInput/DebugInput.ts'
export { handleArrowLeft, handleArrowRight, handleArrowUp, handleArrowDown, focusPrevious, focusNext, resize } from '../DebugNavigation/DebugNavigation.ts'

export {handleClickScopeValue} from '../ScopeChain/ScopeChain.ts'