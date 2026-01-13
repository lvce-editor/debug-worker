import type { DebugRowAction } from '../DebugRow/DebugRow.ts'
import * as InputName from '../InputName/InputName.ts'

export const getWatchActions = (watchExpanded: boolean): readonly DebugRowAction[] => {
  if (!watchExpanded) {
    return []
  }
  return [
    {
      icon: '+',
      id: InputName.AddWatchExpression,
      title: 'Add new watch expression',
    },
    {
      icon: '↻',
      id: InputName.RefreshWatchExpressions,
      title: 'Refresh watch expressions',
    },
  ]
}
