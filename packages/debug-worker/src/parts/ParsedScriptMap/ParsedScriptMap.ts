import type { ParsedScript } from '../ParsedScript/ParsedScript.ts'

export interface ParsedScriptMap {
  readonly [key: string]: ParsedScript
}
