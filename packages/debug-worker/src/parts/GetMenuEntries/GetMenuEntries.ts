import type { MenuEntry } from '../MenuEntry/MenuEntry.ts'
import * as MenuItemFlags from '../MenuItemFlags/MenuItemFlags.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'
import * as MenuEntryId from '../MenuEntryId/MenuEntryId.ts'

export const getMenuEntriesWatchExpression = (): readonly MenuEntry[] => {
  const menuEntry: MenuEntry = {
    id: 'deleteWatchExpression',
    label: DebugStrings.deleteWatchExpression(),
    flags: MenuItemFlags.None,
    command: 'RunandDebug.deleteWatchExpression',
  }

  return [menuEntry]
}

export const getMenuEntries = (): readonly any[] => {
  return [
    {
      id: MenuEntryId.DebugWatchExpression,
      entries: getMenuEntriesWatchExpression(),
    },
  ]
}
