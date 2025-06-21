import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

export const getDebugRowClassName = (baseClassName: string, isSelected: boolean): string => {
  return isSelected ? MergeClassNames.mergeClassNames(baseClassName, 'DebugRowSelected') : baseClassName
}
