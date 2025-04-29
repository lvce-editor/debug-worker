import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as Arrays from '../Arrays/Arrays.ts'
import * as Assert from '../Assert/Assert.ts'
import * as Debug from '../Debug/Debug.ts'
import * as DebugPausedReason from '../DebugPausedReason/DebugPausedReason.ts'
import * as DebugState from '../DebugState/DebugState.ts'
import * as ExceptionBreakPoints from '../ExceptionBreakPoints/ExceptionBreakPoints.ts'
import * as Focus from '../Focus/Focus.ts'
import * as GetCallStack from '../GetCallStack/GetCallStack.ts'
import * as GetChildScopeChain from '../GetChildScopeChain/GetChildScopeChain.ts'
import * as GetDebugPausedMessage from '../GetDebugPausedMessage/GetDebugPausedMessage.ts'
import * as GetScopeChain from '../GetScopeChain/GetScopeChain.ts'
import * as InputName from '../InputName/InputName.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const handlePaused = async (state: RunAndDebugState, params: any): Promise<RunAndDebugState> => {
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

export const handleResumed = (state: RunAndDebugState): RunAndDebugState => {
  return {
    ...state,
    debugState: DebugState.Default,
    scopeChain: [],
    callStack: [],
    pausedMessage: '',
    pausedReason: DebugPausedReason.None,
    callFrameId: '',
  }
}

export const handleScriptParsed = (state: RunAndDebugState, parsedScript: any): RunAndDebugState => {
  const { parsedScripts } = state
  return {
    ...state,
    parsedScripts: {
      ...parsedScripts,
      [parsedScript.id]: parsedScript,
    },
  }
}

const getElementIndex = (debugId: any, scopeChain: any, text: string): number => {
  for (let i = 0; i < scopeChain.length; i++) {
    const element = scopeChain[i]
    if (element.key === text) {
      return i
    }
  }
  return -1
}

const getCollapsedScopeChain = (cache: any, scopeChain: any, element: any, index: number): any => {
  const indent = element.indent
  for (let i = index + 1; i < scopeChain.length; i++) {
    if (scopeChain[i].indent <= indent) {
      const newItems = scopeChain.slice(index + 1, i)
      const newCache = {
        ...cache,
        [scopeChain[index].objectId]: newItems,
      }
      return {
        newScopeChain: [...scopeChain.slice(0, index + 1), ...scopeChain.slice(i)],
        newCache,
      }
    }
  }
  return {
    newScopeChain: scopeChain,
    newCache: cache,
  }
}

// TODO maybe store scope chain elements as tree
// TODO when collapsing, store collapsed elements by parent id in cache
// TODO when expanding, retrieve items from cache by parent id first
// if they don't exist, query the actual items

const collapse = (state: RunAndDebugState, expandedIds: readonly any[], scopeChain: any, element: any, index: number): RunAndDebugState => {
  const { cache } = state
  const newExpandedIds = Arrays.removeElement(expandedIds, element.objectId)
  const { newScopeChain, newCache } = getCollapsedScopeChain(cache, scopeChain, element, index)
  return {
    ...state,
    expandedIds: newExpandedIds,
    scopeChain: newScopeChain,
    scopeFocusedIndex: index,
    cache: newCache,
  }
}

const expand = async (
  state: RunAndDebugState,
  expandedIds: any,
  scopeChain: any,
  element: any,
  index: any,
  debugId: any,
): Promise<RunAndDebugState> => {
  const { cache } = state
  const newScopeChain = await GetChildScopeChain.getChildScopeChain(cache, index, debugId, scopeChain)
  const objectId = scopeChain[index].objectId
  const newExpandedIds = [...expandedIds, objectId]
  return {
    ...state,
    scopeChain: newScopeChain,
    expandedIds: newExpandedIds,
    scopeFocusedIndex: index,
  }
}

export const handleClickScopeValue = async (state: RunAndDebugState, text: string): Promise<RunAndDebugState> => {
  const { scopeChain, debugId, expandedIds } = state
  Focus.setFocus(WhenExpression.FocusDebugScope)
  const index = getElementIndex(debugId, scopeChain, text)
  const element = scopeChain[index]
  if (expandedIds.includes(element.objectId)) {
    return collapse(state, expandedIds, scopeChain, element, index)
  }
  return expand(state, expandedIds, scopeChain, element, index, debugId)
}

export const resume = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { debugId } = state
  await Debug.resume(debugId)
  return state
}

export const pause = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { debugId } = state
  await Debug.pause(debugId)
  return state
}

export const togglePause = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { debugState } = state
  if (debugState === DebugState.Default) {
    return pause(state)
  }
  return resume(state)
}

export const stepOver = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { debugId } = state
  await Debug.stepOver(debugId)
  return state
}

export const stepInto = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { debugId } = state
  await Debug.stepInto(debugId)
  return state
}

export const stepOut = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { debugId } = state
  await Debug.stepOut(debugId)
  return state
}

export const handleDebugInput = (state: RunAndDebugState, value: any): RunAndDebugState => {
  return {
    ...state,
    debugInputValue: value,
  }
}

export const handleEvaluate = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { debugInputValue, callFrameId, debugId } = state
  const result = await Debug.evaluate(debugId, debugInputValue, callFrameId)
  const actualResult = result.result.result.value
  return {
    ...state,
    debugInputValue: '',
    debugOutputValue: `${actualResult}`,
  }
}

export const handleArrowLeft = (state: RunAndDebugState): RunAndDebugState => {
  const { focusedIndex } = state
  if (focusedIndex === 2) {
    return {
      ...state,
      scopeExpanded: false,
    }
  }
  return state
}

export const handleArrowRight = (state: RunAndDebugState): RunAndDebugState => {
  const { focusedIndex } = state
  if (focusedIndex === 2) {
    return {
      ...state,
      scopeExpanded: true,
    }
  }
  return state
}

export const handleArrowUp = (state: RunAndDebugState): RunAndDebugState => {
  return state
}

export const handleArrowDown = (state: RunAndDebugState): RunAndDebugState => {
  return state
}

export const focusPrevious = (state: RunAndDebugState): RunAndDebugState => {
  return state
}

export const focusNext = (state: RunAndDebugState): RunAndDebugState => {
  return state
}

export const setPauseOnExceptions = async (state: RunAndDebugState, value: any): Promise<RunAndDebugState> => {
  const { debugId } = state
  await Debug.setPauseOnExceptions(debugId, value)
  return {
    ...state,
    exceptionBreakPoints: value,
  }
}

export const handleClickPauseOnExceptions = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { exceptionBreakPoints } = state
  switch (exceptionBreakPoints) {
    case ExceptionBreakPoints.None:
      return setPauseOnExceptions(state, ExceptionBreakPoints.All)
    case ExceptionBreakPoints.Uncaught:
      return setPauseOnExceptions(state, ExceptionBreakPoints.All)
    case ExceptionBreakPoints.All:
      return setPauseOnExceptions(state, ExceptionBreakPoints.None)
    default:
      return state
  }
}

export const handleClickPauseOnUncaughtExceptions = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { exceptionBreakPoints } = state
  switch (exceptionBreakPoints) {
    case ExceptionBreakPoints.None:
      return setPauseOnExceptions(state, ExceptionBreakPoints.Uncaught)
    case ExceptionBreakPoints.Uncaught:
      return setPauseOnExceptions(state, ExceptionBreakPoints.None)
    case ExceptionBreakPoints.All:
      return setPauseOnExceptions(state, ExceptionBreakPoints.None)
    default:
      return state
  }
}

export const handleClickCheckBox = (state: RunAndDebugState, name: string): Promise<RunAndDebugState> => {
  switch (name) {
    case InputName.PauseOnExceptions:
      return handleClickPauseOnExceptions(state)
    case InputName.PauseOnUncaughtExceptions:
      return handleClickPauseOnUncaughtExceptions(state)
    default:
      throw new Error('unknown input name')
  }
}

export const resize = (state: RunAndDebugState, dimensions: any): RunAndDebugState => {
  return { ...state, ...dimensions }
}
