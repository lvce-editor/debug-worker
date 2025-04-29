import { expect, test } from '@jest/globals'
import { getCommandIds } from '../src/parts/GetCommandIds/GetCommandIds.ts'

test('getCommandIds returns commandIds array', () => {
  const commandIds = getCommandIds()
  expect(commandIds).toBeDefined()
})
