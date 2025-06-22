import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import type { ViewletCommand } from '../ViewletCommand/ViewletCommand.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import * as GetRenderer from '../GetRenderer/GetRenderer.ts'

export const applyRender = (oldState: RunAndDebugState, newState: RunAndDebugState, diffResult: readonly number[]): readonly ViewletCommand[] => {
  const commands: ViewletCommand[] = []
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
