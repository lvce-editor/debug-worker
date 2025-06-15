// TODO instead of reusing debug row for all different kinds of debug items,
// maybe use separate interfaces for checkboxes, headings, callstacks, values, scopes
export interface DebugRowAction {
  readonly id: string
  readonly title: string
  readonly icon: string
}

export interface DebugRow {
  readonly type: number
  readonly text: string
  readonly expanded: boolean
  readonly key: string
  readonly value: string
  readonly indent: number
  readonly valueType: string | number // TODO convert to number
  readonly name: string
  readonly description: string
  readonly hasArrow?: boolean
  readonly index?: number
  readonly actions?: readonly DebugRowAction[]
}
