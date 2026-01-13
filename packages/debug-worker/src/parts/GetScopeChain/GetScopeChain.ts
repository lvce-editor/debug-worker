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

export const getScopeChain = (params: any, thisObject: any, scopeChain: any, knownProperties: any, descriptionLength: number): any => {
  const elements = []
  for (const scope of scopeChain) {
    const label = DebugDisplay.getScopeLabel(scope)
    elements.push({
      indent: 10,
      key: label,
      label,
      objectId: scope.object.objectId,
      type: DebugScopeChainType.Scope,
      value: '',
      valueType: '',
    })
    // if(params.reason)
    if (scope.type === DebugScopeType.Local) {
      if (params.reason === DebugPausedReason.Exception) {
        const value = getDescriptionValueLabel(params)
        elements.push({
          indent: 20,
          key: 'Exception',
          objectId: scope.object.objectId,
          type: DebugScopeChainType.Exception,
          value,
          valueType: '',
        })
      }
      const valueLabel = GetDebugPropertyValueLabel.getDebugPropertyValueLabel(thisObject, descriptionLength)
      elements.push({
        indent: 20,
        key: 'this',
        objectId: '',
        type: DebugScopeChainType.This,
        value: valueLabel,
        valueType: thisObject.type,
      })
    }
    const children = knownProperties[scope.object.objectId]
    if (children) {
      for (const child of children.result.result) {
        const valueLabel = GetDebugPropertyValueLabel.getDebugPropertyValueLabel(child.value, descriptionLength)
        elements.push({
          indent: 20,
          key: child.name,
          objectId: GetDebugValueObjectId.getDebugValueObjectId(child),
          type: DebugScopeChainType.Property,
          value: valueLabel,
          valueType: GetDebugValueType.getDebugValueType(child),
        })
      }
    }
  }
  return elements
}
