import { expect, test } from '@jest/globals'
import * as GetKeyBindings from '../src/parts/GetKeyBindings/GetKeyBindings.ts'

test('getKeyBindings returns array of key bindings', () => {
  const keyBindings = GetKeyBindings.getKeyBindings()
  expect(keyBindings).toBeDefined()
})
