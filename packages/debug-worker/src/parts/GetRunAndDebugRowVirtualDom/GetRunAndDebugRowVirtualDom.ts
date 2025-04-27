import * as GetRunAndDebugRowRenderer from '../GetRunAndDebugRowRenderer/GetRunAndDebugRowRenderer.ts'

export const getRunAndDebugRowVirtualDom = (row: any): any => {
  const renderer = GetRunAndDebugRowRenderer.getRowRenderer(row.type)
  return renderer(row)
}
