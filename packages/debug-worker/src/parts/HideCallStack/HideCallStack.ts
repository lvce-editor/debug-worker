import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { hideSection } from '../HideSection/HideSection.ts'

export const hideCallStack = (state: RunAndDebugState): RunAndDebugState => {
  return hideSection(state, 'callStackVisible')
}
