import * as Assert from '../Assert/Assert.ts'
import * as Debug from '../Debug/Debug.ts'
import * as GetCallStack from '../GetCallStack/GetCallStack.ts'
import * as GetDebugPausedMessage from '../GetDebugPausedMessage/GetDebugPausedMessage.ts'
import * as GetScopeChain from '../GetScopeChain/GetScopeChain.ts'

export interface PausedInfo {
  readonly scopeChain: readonly any[]
  readonly callStack: readonly any[]
  readonly pausedReason: any
  readonly pausedMessage: string
  readonly callFrameId: any
  readonly expandedIds: readonly any[]
}

export const getPausedInfo = async (debugId: any, params: any): Promise<PausedInfo> => {
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
    scopeChain,
    callStack,
    pausedReason,
    pausedMessage,
    callFrameId,
    expandedIds: [objectId],
  }
}
