export interface WatchExpression {
  readonly expression: string
  readonly isEditing: boolean
  readonly value: string | number | boolean | undefined | null
}
