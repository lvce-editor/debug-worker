import * as Assert from '../Assert/Assert.ts'
import * as Debug from '../Debug/Debug.ts'
import * as ExtensionHostDebug from '../ExtensionHostDebug/ExtensionHostDebug.ts'
import * as GetCallStack from '../GetCallStack/GetCallStack.ts'
import * as GetDebugPausedMessage from '../GetDebugPausedMessage/GetDebugPausedMessage.ts'
import * as GetScopeChain from '../GetScopeChain/GetScopeChain.ts'

export interface PausedInfo2 {
  readonly scopeChain: readonly any[]
  readonly callStack: readonly any[]
  readonly pausedReason: any
  readonly pausedMessage: string
  readonly callFrameId: any
  readonly expandedIds: readonly any[]
}

export const getPausedInfo2 = async (debugId: any): Promise<PausedInfo2> => {
  const callFrames = await ExtensionHostDebug.getCallStack(debugId)
  const callStack = GetCallStack.getCallStack(callFrames)
  const reason = await ExtensionHostDebug.getPausedStatus(debugId)
  const objectId = callFrames[0].scopeChain[0].object.objectId
  const callFrameId = callFrames[0].callFrameId
  const properties = await Debug.getProperties(debugId, objectId)
  const thisObject = callFrames[0].this
  Assert.object(thisObject)
  const params = {} // TODO
  const scopeChain = GetScopeChain.getScopeChain(params, thisObject, callFrames[0].scopeChain, {
    [objectId]: properties,
  })
  const pausedReason = reason
  const pausedMessage = GetDebugPausedMessage.getDebugPausedMessage(reason)
  return {
    scopeChain,
    callStack,
    pausedReason,
    pausedMessage,
    callFrameId,
    expandedIds: [objectId],
  }
}
