import type { PausedInfo2 } from '../PausedInfo2/PausedInfo2.ts'
import * as Assert from '../Assert/Assert.ts'
import { createScriptMap } from '../CreateScriptMap/CreateScriptMap.ts'
import * as Debug from '../Debug/Debug.ts'
import * as ExtensionHostDebug from '../ExtensionHostDebug/ExtensionHostDebug.ts'
import * as GetCallStack from '../GetCallStack/GetCallStack.ts'
import * as GetDebugPausedMessage from '../GetDebugPausedMessage/GetDebugPausedMessage.ts'
import * as GetScopeChain from '../GetScopeChain/GetScopeChain.ts'

export const getPausedInfo2 = async (debugId: any, maxDescriptionLength: number): Promise<PausedInfo2> => {
  const callFrames = await ExtensionHostDebug.getCallStack(debugId)
  const callStack = GetCallStack.getCallStack(callFrames)
  const { data, reason } = await ExtensionHostDebug.getPausedStatus(debugId)
  const scripts = await ExtensionHostDebug.getScripts(debugId)
  const scriptMap = createScriptMap(scripts)
  const { objectId } = callFrames[0].scopeChain[0].object
  const { callFrameId } = callFrames[0]
  const properties = await Debug.getProperties(debugId, objectId)
  const thisObject = callFrames[0].this
  Assert.object(thisObject)
  const params = {
    data,
    reason,
  }
  const scopeChain = GetScopeChain.getScopeChain(
    params,
    thisObject,
    callFrames[0].scopeChain,
    {
      [objectId]: properties,
    },
    maxDescriptionLength,
  )
  const pausedReason = reason
  const pausedMessage = GetDebugPausedMessage.getDebugPausedMessage(reason)
  return {
    callFrameId,
    callStack,
    expandedIds: [objectId],
    pausedMessage,
    pausedReason,
    scopeChain,
    scriptMap,
  }
}
