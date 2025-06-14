import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DebugValueType from '../DebugValueType/DebugValueType.ts'

export const getDebugValueClassName = (valueType: string | number): string => {
  switch (valueType) {
    case DebugValueType.Undefined:
      return ClassNames.DebugValueUndefined
    case DebugValueType.Number:
      return ClassNames.DebugValueNumber
    case DebugValueType.Symbol:
      return ClassNames.DebugValueSymbol
    case DebugValueType.Boolean:
      return ClassNames.DebugValueBoolean
    case DebugValueType.String:
      return ClassNames.DebugValueString
    case DebugValueType.Object:
      return ClassNames.DebugValueObject
    case DebugValueType.Function:
      return ClassNames.DebugValueFunction
    case DebugValueType.Getter:
      return ClassNames.DebugValueGetter
    default:
      return ''
  }
}
