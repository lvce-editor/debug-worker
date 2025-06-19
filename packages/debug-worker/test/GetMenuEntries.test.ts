import { test, expect } from '@jest/globals'
import { getMenuEntries } from '../src/parts/GetMenuEntries/GetMenuEntries.ts'
import { getMenuEntriesWatchExpression } from '../src/parts/GetMenuEntriesWatchExpression/GetMenuEntriesWatchExpression.ts'
import * as MenuEntryId from '../src/parts/MenuEntryId/MenuEntryId.ts'

test.skip('getMenuEntriesWatchExpression should include addWatchExpression and deleteWatchExpression', () => {
  const entries = getMenuEntriesWatchExpression()
  expect(entries).toHaveLength(2)

  const addEntry = entries.find((entry) => entry.id === 'addWatchExpression')
  expect(addEntry).toBeDefined()
  expect(addEntry?.label).toBe('Add Watch Expression')
  expect(addEntry?.command).toBe('RunAndDebug.addWatchExpression')

  const deleteEntry = entries.find((entry) => entry.id === 'deleteWatchExpression')
  expect(deleteEntry).toBeDefined()
  expect(deleteEntry?.label).toBe('Delete Watch Expression')
  expect(deleteEntry?.command).toBe('RunandDebug.deleteWatchExpression')
})

test.skip('getMenuEntries should include DebugWatchExpression menu', () => {
  const menus = getMenuEntries()
  expect(menus).toHaveLength(1)

  const watchMenu = menus.find((menu) => menu.id === MenuEntryId.DebugWatchExpression)
  expect(watchMenu).toBeDefined()
  expect(watchMenu?.entries).toHaveLength(2)
})
