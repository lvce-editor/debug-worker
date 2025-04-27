export interface Renderer<T> {
  (oldState: T, newState: T): readonly any[]
}
