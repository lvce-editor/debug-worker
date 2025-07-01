export interface ScopeChainItem {
  readonly flags: number
  readonly indent: number
  readonly index?: number
  readonly key: string
  readonly label: string
  readonly objectId: string
  readonly type: number
  readonly value: string
  readonly valueType: string
}
