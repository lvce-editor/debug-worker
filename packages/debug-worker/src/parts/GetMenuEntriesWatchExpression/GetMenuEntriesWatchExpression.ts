import type { MenuEntry } from '../MenuEntry/MenuEntry.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'
import * as MenuItemFlags from '../MenuItemFlags/MenuItemFlags.ts'

export const getMenuEntriesWatchExpression = (): readonly MenuEntry[] => {
  const addMenuEntry: MenuEntry = {
    id: 'addWatchExpression',
    label: DebugStrings.addWatchExpression(),
    flags: MenuItemFlags.None,
    command: 'RunAndDebug.addWatchExpression',
  }

  const deleteMenuEntry: MenuEntry = {
    id: 'deleteWatchExpression',
    label: DebugStrings.deleteWatchExpression(),
    flags: MenuItemFlags.None,
    command: 'RunAndDebug.deleteWatchExpression',
  }

  const deleteAllMenuEntry: MenuEntry = {
    id: 'deleteAllWatchExpressions',
    label: DebugStrings.deleteAllWatchExpressions(),
    flags: MenuItemFlags.None,
    command: 'RunAndDebug.deleteAllWatchExpressions',
  }

  return [addMenuEntry, deleteMenuEntry, deleteAllMenuEntry]
}
