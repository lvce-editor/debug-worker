// TODO instead of reusing debug row for all different kinds of debug items,
// maybe use separate interfaces for checkboxes, headings, callstacks, values, scopes
export interface DebugRowAction {
  readonly icon: string
  readonly id: string
  readonly title: string
}

export interface DebugRow {
  readonly actions?: readonly DebugRowAction[]
  readonly description: string
  readonly expanded: boolean
  readonly hasArrow?: boolean
  readonly indent: number
  readonly index?: number
  readonly key: string
  readonly name: string
  readonly posInset?: number
  readonly scopeChainIndex?: number
  readonly setSize?: number
  readonly text: string
  readonly tokens?: string[]
  readonly type: number
  readonly value: string
  readonly valueType: string | number // TODO convert to number
}

export interface DebugRowBase {
  readonly type: number
}

export interface DebugRowHeading {
  readonly actions: readonly DebugRowAction[]
  readonly expanded: boolean
  readonly heading: string
}

export interface DebugRowBreakPoints {
  readonly label: string
  readonly name: string
}
