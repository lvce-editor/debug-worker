import type { ScopeChainItem } from '../ScopeChainItem/ScopeChainItem.ts'
import * as Debug from '../Debug/Debug.ts'
import * as DebugScopeChainType from '../DebugScopeChainType/DebugScopeChainType.ts'
import * as GetDebugPropertyValueLabel from '../GetDebugPropertyValueLabel/GetDebugPropertyValueLabel.ts'
import * as GetDebugValueObjectId from '../GetDebugValueObjectId/GetDebugValueObjectId.ts'
import * as GetDebugValueType from '../GetDebugValueType/GetDebugValueType.ts'

export const getInnerChildScopeChain = async (
  cache: any,
  debugId: any,
  objectId: any,
  indent: number,
  maxDescriptionLength: number,
): Promise<readonly ScopeChainItem[]> => {
  if (cache[objectId]) {
    return cache[objectId]
  }
  const childScopes = await Debug.getProperties(debugId, objectId)
  const childScopeChain: ScopeChainItem[] = []
  for (const child of childScopes.result.result) {
    const valueLabel = GetDebugPropertyValueLabel.getDebugPropertyValueLabel(child.value || child.get || {}, maxDescriptionLength)
    childScopeChain.push({
      type: DebugScopeChainType.Property,
      key: child.name,
      value: valueLabel,
      valueType: GetDebugValueType.getDebugValueType(child),
      objectId: GetDebugValueObjectId.getDebugValueObjectId(child),
      indent: indent + 10,
      label: '',
    })
  }
  return childScopeChain
}
