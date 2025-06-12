import * as Character from '../Character/Character.ts'
import * as DebugDisplay from '../DebugDisplay/DebugDisplay.ts'
import * as DebugPausedReason from '../DebugPausedReason/DebugPausedReason.ts'
import * as DebugScopeChainType from '../DebugScopeChainType/DebugScopeChainType.ts'
import * as DebugScopeType from '../DebugScopeType/DebugScopeType.ts'
import * as GetDebugPropertyValueLabel from '../GetDebugPropertyValueLabel/GetDebugPropertyValueLabel.ts'
import * as GetDebugValueObjectId from '../GetDebugValueObjectId/GetDebugValueObjectId.ts'
import * as GetDebugValueType from '../GetDebugValueType/GetDebugValueType.ts'

const getDescriptionValueLabel = (params: any): string => {
  if (params.data && params.data.description) {
    return params.data.description.replaceAll(Character.NewLine, Character.Space)
  }
  return `${params.data.value}`
}

export const getScopeChain = (params: any, thisObject: any, scopeChain: any, knownProperties: any): any => {
  const elements = []
  for (const scope of scopeChain) {
    const label = DebugDisplay.getScopeLabel(scope)
    elements.push({
      type: DebugScopeChainType.Scope,
      key: label,
      value: '',
      valueType: '',
      label,
      objectId: scope.object.objectId,
      indent: 10,
    })
    // if(params.reason)
    if (scope.type === DebugScopeType.Local) {
      if (params.reason === DebugPausedReason.Exception) {
        const value = getDescriptionValueLabel(params)
        elements.push({
          type: DebugScopeChainType.Exception,
          key: 'Exception',
          value,
          valueType: '',
          objectId: scope.object.objectId,
          indent: 20,
        })
      }
      const valueLabel = GetDebugPropertyValueLabel.getDebugPropertyValueLabel(thisObject)
      elements.push({
        type: DebugScopeChainType.This,
        key: 'this',
        value: valueLabel,
        valueType: thisObject.type,
        objectId: '',
        indent: 20,
      })
    }
    const children = knownProperties[scope.object.objectId]
    if (children) {
      for (const child of children.result.result) {
        const valueLabel = GetDebugPropertyValueLabel.getDebugPropertyValueLabel(child.value)
        elements.push({
          type: DebugScopeChainType.Property,
          key: child.name,
          value: valueLabel,
          valueType: GetDebugValueType.getDebugValueType(child),
          objectId: GetDebugValueObjectId.getDebugValueObjectId(child),
          indent: 20,
        })
      }
    }
  }
  return elements
}
