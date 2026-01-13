interface Location {
  readonly columnNumber: number
  readonly lineNumber: number
  readonly scriptId: string
}

export interface CallStackItem {
  readonly functionLocation: Location
  readonly functionName: string
  readonly location: Location
}
