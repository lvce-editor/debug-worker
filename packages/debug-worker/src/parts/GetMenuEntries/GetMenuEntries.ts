import { getMenuEntriesWatchExpression } from '../GetMenuEntriesWatchExpression/GetMenuEntriesWatchExpression.ts'
import * as MenuEntryId from '../MenuEntryId/MenuEntryId.ts'

export const getMenuEntries = (): readonly any[] => {
  return [
    {
      entries: getMenuEntriesWatchExpression(),
      id: MenuEntryId.DebugWatchExpression,
    },
  ]
}
