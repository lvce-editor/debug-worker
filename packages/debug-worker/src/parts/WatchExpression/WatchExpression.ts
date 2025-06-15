export interface WatchExpression {
  readonly expression: string
  readonly value: string | number | boolean | undefined | null
  readonly isEditing?: boolean
}
