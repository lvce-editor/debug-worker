import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import * as GetRenderer from '../GetRenderer/GetRenderer.ts'

export const applyRender = (oldState: RunAndDebugState, newState: RunAndDebugState, diffResult: readonly number[]): readonly any[] => {
  const commands = []
  for (const item of diffResult) {
    if (item === DiffType.RenderPauseOnExceptions) {
      // TODO support this in the future
      continue
    }
    const fn = GetRenderer.getRenderer(item)
    commands.push(fn(oldState, newState))
  }
  return commands
}
