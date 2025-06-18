import type { Renderer } from '../Renderer/Renderer.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import * as RenderFocus from '../RenderFocus/RenderFocus.ts'
import * as RenderFocusContext from '../RenderFocusContext/RenderFocusContext.ts'
import * as RenderInputValue from '../RenderInputValue/RenderInputValue.ts'
import * as RenderItems from '../RenderItems/RenderItems.ts'
import * as RenderSelection from '../RenderSelection/RenderSelection.ts'

export const getRenderer = (diffType: number): Renderer<RunAndDebugState> => {
  switch (diffType) {
    case DiffType.RenderItems:
      return RenderItems.renderItems
    case DiffType.RenderFocusContext:
      return RenderFocusContext.renderFocusContext
    case DiffType.RenderFocus:
      return RenderFocus.renderFocus
    case DiffType.RenderValue:
      return RenderInputValue.renderInputValue
    case DiffType.RenderSelection:
      return RenderSelection.renderSelection
    default:
      throw new Error('unknown renderer')
  }
}
