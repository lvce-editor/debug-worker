import type { MenuEntry } from '../MenuEntry/MenuEntry.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'
import * as MenuItemFlags from '../MenuItemFlags/MenuItemFlags.ts'

export const getMenuEntriesWatchExpression = (): readonly MenuEntry[] => {
  const addMenuEntry: MenuEntry = {
    command: 'RunAndDebug.addWatchExpression',
    flags: MenuItemFlags.None,
    id: 'addWatchExpression',
    label: DebugStrings.addWatchExpression(),
  }

  const deleteMenuEntry: MenuEntry = {
    command: 'RunAndDebug.deleteWatchExpression',
    flags: MenuItemFlags.None,
    id: 'deleteWatchExpression',
    label: DebugStrings.deleteWatchExpression(),
  }

  const deleteAllMenuEntry: MenuEntry = {
    command: 'RunAndDebug.deleteAllWatchExpressions',
    flags: MenuItemFlags.None,
    id: 'deleteAllWatchExpressions',
    label: DebugStrings.deleteAllWatchExpressions(),
  }

  return [addMenuEntry, deleteMenuEntry, deleteAllMenuEntry]
}
