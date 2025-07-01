import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

export const getDebugRowClassName = (baseClassName: string, isSelected: boolean): string => {
  return isSelected ? MergeClassNames.mergeClassNames(baseClassName, ClassNames.DebugRowSelected) : baseClassName
}
