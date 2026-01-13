import type { Renderer } from '../Renderer/Renderer.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import * as RenderFocus from '../RenderFocus/RenderFocus.ts'
import * as RenderFocusContext from '../RenderFocusContext/RenderFocusContext.ts'
import * as RenderInputValue from '../RenderInputValue/RenderInputValue.ts'
import * as RenderItems from '../RenderItems/RenderItems.ts'
import * as RenderPauseOnExceptions from '../RenderPauseOnExceptions/RenderPauseOnExceptions.ts'
import * as RenderSelection from '../RenderSelection/RenderSelection.ts'

export const getRenderer = (diffType: number): Renderer<RunAndDebugState> => {
  switch (diffType) {
    case DiffType.RenderFocus:
      return RenderFocus.renderFocus
    case DiffType.RenderFocusContext:
      return RenderFocusContext.renderFocusContext
    case DiffType.RenderItems:
      return RenderItems.renderItems
    case DiffType.RenderPauseOnExceptions:
      return RenderPauseOnExceptions.renderPauseOnExceptions
    case DiffType.RenderSelection:
      return RenderSelection.renderSelection
    case DiffType.RenderValue:
      return RenderInputValue.renderInputValue
    default:
      throw new Error('unknown renderer')
  }
}
