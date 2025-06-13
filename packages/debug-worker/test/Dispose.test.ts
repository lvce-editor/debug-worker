import { expect, jest, test } from '@jest/globals'
import { dispose } from '../src/parts/Dispose/Dispose.ts'
import * as RunAndDebugStates from '../src/parts/RunAndDebugStates/RunAndDebugStates.ts'

test('dispose', async () => {
  const mockDispose = jest.spyOn(RunAndDebugStates, 'dispose')
  const uid = 123
  await dispose(uid)
  expect(mockDispose).toHaveBeenCalledWith(uid)
})
