import * as RunAndDebugStates from '../RunAndDebugStates/RunAndDebugStates.ts'

export const dispose = async (uid: number): Promise<void> => {
  RunAndDebugStates.dispose(uid)
}
