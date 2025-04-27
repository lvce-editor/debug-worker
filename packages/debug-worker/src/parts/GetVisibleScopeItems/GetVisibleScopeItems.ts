import * as DebugItemFlags from '../DebugItemFlags/DebugItemFlags.ts'

const getExpandable = (valueType: any): boolean => {
  if (valueType === 'object') {
    return true
  }
  return false
}

const getFlags = (isExpanded: boolean, isExpandable: boolean, isFocused: boolean): number => {
  let flags = DebugItemFlags.None
  if (isExpanded) {
    flags |= DebugItemFlags.Expanded
  } else if (isExpandable) {
    flags |= DebugItemFlags.Collapsed
  }
  if (isFocused) {
    flags |= DebugItemFlags.Focused
  }
  return flags
}

export const getVisibleScopeItems = (scopeChain: any, expandedIds: any, focusedIndex: any): readonly any[] => {
  const minLineY = 0
  const maxLineY = scopeChain.length
  const visible = []
  for (let i = minLineY; i < maxLineY; i++) {
    const element = scopeChain[i]
    const isExpanded = expandedIds.includes(element.objectId)
    const isExpandable = getExpandable(element.valueType)
    const isFocused = i === focusedIndex
    const flags = getFlags(isExpanded, isExpandable, isFocused)
    visible.push({
      ...element,
      flags,
    })
  }
  return visible
}
