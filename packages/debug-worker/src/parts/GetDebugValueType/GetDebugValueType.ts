import * as DebugValueType from '../DebugValueType/DebugValueType.ts'

export const getDebugValueType = (child: any): any => {
  if (!child) {
    return DebugValueType.None
  }
  if (child.value && child.value.type) {
    return child.value.type
  }
  if (child.get) {
    return DebugValueType.Getter
  }
  return DebugValueType.None
}
