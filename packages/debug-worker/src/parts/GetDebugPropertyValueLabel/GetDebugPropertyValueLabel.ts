import * as DebugValueType from '../DebugValueType/DebugValueType.ts'
import * as GetDebugPropertyValueLabelBoolean from '../GetDebugPropertyValueLabelBoolean/GetDebugPropertyValueLabelBoolean.ts'
import * as GetDebugPropertyValueLabelCommon from '../GetDebugPropertyValueLabelCommon/GetDebugPropertyValueLabelCommon.ts'
import * as GetDebugPropertyValueLabelObject from '../GetDebugPropertyValueLabelObject/GetDebugPropertyValueLabelObject.ts'
import * as GetDebugPropertyValueLabelString from '../GetDebugPropertyValueLabelString/GetDebugPropertyValueLabelString.ts'
import * as GetDebugPropertyValueLabelUndefined from '../GetDebugPropertyValueLabelUndefined/GetDebugPropertyValueLabelUndefined.ts'

export const getDebugPropertyValueLabel = (property: any, maxDescriptionLength: number): string => {
  if (!property) {
    return 'n/a'
  }
  switch (property.type) {
    case DebugValueType.Number:
    case DebugValueType.Symbol:
    case DebugValueType.Function:
      return GetDebugPropertyValueLabelCommon.getDebugPropertyValueLabelCommon(property, maxDescriptionLength)
    case DebugValueType.Object:
      return GetDebugPropertyValueLabelObject.getDebugPropertyValueLabelObject(property)
    case DebugValueType.Undefined:
      return GetDebugPropertyValueLabelUndefined.getDebugPropertyValueLabelString(property)
    case DebugValueType.String:
      return GetDebugPropertyValueLabelString.getDebugPropertyValueLabelString(property)
    case DebugValueType.Boolean:
      return GetDebugPropertyValueLabelBoolean.getDebugPropertyValueLabelBoolean(property)
    default:
      return `${JSON.stringify(property)}`
  }
}
