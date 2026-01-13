import type { ScopeChainItem } from '../ScopeChainItem/ScopeChainItem.ts'
import * as Debug from '../Debug/Debug.ts'
import * as DebugItemFlags from '../DebugItemFlags/DebugItemFlags.ts'
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
      flags: DebugItemFlags.None,
      indent: indent + 10,
      key: child.name,
      label: '',
      objectId: GetDebugValueObjectId.getDebugValueObjectId(child),
      type: DebugScopeChainType.Property,
      value: valueLabel,
      valueType: GetDebugValueType.getDebugValueType(child),
    })
  }
  return childScopeChain
}
