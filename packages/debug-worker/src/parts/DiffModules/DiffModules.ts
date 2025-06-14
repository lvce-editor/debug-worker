import * as DiffFocus from '../DiffFocus/DiffFocus.ts'
import * as DiffFocusContext from '../DiffFocusContext/DiffFocusContext.ts'
import * as DiffItems from '../DiffItems/DiffItems.ts'
import * as DiffType from '../DiffType/DiffType.ts'

export const modules = [DiffItems.isEqual, DiffFocusContext.isEqual, DiffFocus.isEqual]

export const numbers = [DiffItems.diffType, DiffType.RenderFocusContext, DiffType.RenderFocus]
