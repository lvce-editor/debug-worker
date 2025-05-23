import * as Debug from '../Debug/Debug.ts'
import * as DebugScopeChainType from '../DebugScopeChainType/DebugScopeChainType.ts'
import * as GetDebugPropertyValueLabel from '../GetDebugPropertyValueLabel/GetDebugPropertyValueLabel.ts'
import * as GetDebugValueObjectId from '../GetDebugValueObjectId/GetDebugValueObjectId.ts'
import * as GetDebugValueType from '../GetDebugValueType/GetDebugValueType.ts'

export const getInnerChildScopeChain = async (cache: any, debugId: any, objectId: any, indent: number): Promise<readonly any[]> => {
  if (cache[objectId]) {
    return cache[objectId]
  }
  const childScopes = await Debug.getProperties(debugId, objectId)
  const childScopeChain = []
  for (const child of childScopes.result.result) {
    const valueLabel = GetDebugPropertyValueLabel.getDebugPropertyValueLabel(child.value || child.get || {})
    childScopeChain.push({
      type: DebugScopeChainType.Property,
      key: child.name,
      value: valueLabel,
      valueType: GetDebugValueType.getDebugValueType(child),
      objectId: GetDebugValueObjectId.getDebugValueObjectId(child),
      indent: indent + 10,
    })
  }
  return childScopeChain
}
