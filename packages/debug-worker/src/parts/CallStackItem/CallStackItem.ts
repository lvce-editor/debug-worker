interface Location {
  readonly scriptId: string
  readonly lineNumber: number
  readonly columnNumber: number
}

export interface CallStackItem {
  readonly functionLocation: Location
  readonly functionName: string
  readonly location: Location
}
