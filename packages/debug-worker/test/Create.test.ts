import { expect, test } from '@jest/globals'
import { create } from '../src/parts/Create/Create.ts'
import * as RunAndDebugStates from '../src/parts/RunAndDebugStates/RunAndDebugStates.ts'

test('create sets state with correct parameters', () => {
  create(1, 'file:///test.ts', 100, 200, 800, 600)

  const { newState } = RunAndDebugStates.get(1)
  expect(newState).toBeDefined()
})
