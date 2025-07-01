import { expect, test } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { dispose } from '../src/parts/Dispose/Dispose.ts'
import * as RunAndDebugStates from '../src/parts/RunAndDebugStates/RunAndDebugStates.ts'

test('dispose', async () => {
  const uid = 123
  const state: RunAndDebugState = createDefaultState()
  RunAndDebugStates.set(uid, state, state)
  await dispose(uid)
  expect(RunAndDebugStates.get(uid)).toBeUndefined()
})
