import * as DiffFocus from '../DiffFocus/DiffFocus.ts'
import * as DiffFocusContext from '../DiffFocusContext/DiffFocusContext.ts'
import * as DiffItems from '../DiffItems/DiffItems.ts'
import * as DiffPauseOnExceptions from '../DiffPauseOnExceptions/DiffPauseOnExceptions.ts'
import * as DiffSelection from '../DiffSelection/DiffSelection.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import * as DiffValue from '../DiffValue/DiffValue.ts'

export const modules = [DiffItems.isEqual, DiffFocusContext.isEqual, DiffValue.isEqual, DiffFocus.isEqual, DiffSelection.isEqual, DiffPauseOnExceptions.isEqual]

export const numbers = [
  DiffItems.diffType,
  DiffType.RenderFocusContext,
  DiffType.RenderValue,
  DiffType.RenderFocus,
  DiffType.RenderSelection,
  DiffPauseOnExceptions.diffType,
]
