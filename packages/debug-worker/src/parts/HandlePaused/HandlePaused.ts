import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as Arrays from '../Arrays/Arrays.ts'
import * as Debug from '../Debug/Debug.ts'
import * as DebugState from '../DebugState/DebugState.ts'
import * as Focus from '../Focus/Focus.ts'
import * as GetChildScopeChain from '../GetChildScopeChain/GetChildScopeChain.ts'
import { getPausedInfo } from '../GetPausedInfo/GetPausedInfo.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const handlePaused = async (state: RunAndDebugState, params: any): Promise<RunAndDebugState> => {
  const { debugId } = state
  const { scopeChain, callFrameId, pausedReason, pausedMessage, callStack, expandedIds } = await getPausedInfo(debugId, params)
  console.log({ callStack })
  return {
    ...state,
    debugState: DebugState.Paused,
    scopeChain,
    scopeExpanded: true,
    callStack,
    pausedReason,
    pausedMessage,
    callFrameId,
    expandedIds,
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

const expand = async (state: RunAndDebugState, expandedIds: any, scopeChain: any, element: any, index: any, debugId: any): Promise<RunAndDebugState> => {
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

export const resize = (state: RunAndDebugState, dimensions: any): RunAndDebugState => {
  return { ...state, ...dimensions }
}
