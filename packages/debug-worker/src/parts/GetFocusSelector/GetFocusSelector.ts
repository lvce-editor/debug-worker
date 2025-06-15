import * as InputName from '../InputName/InputName.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const getFocusSelector = (focusId: number): string => {
  switch (focusId) {
    case WhenExpression.FocusDebugWatchInput:
      return InputName.AddWatchExpression
    default:
      return ''
  }
}
