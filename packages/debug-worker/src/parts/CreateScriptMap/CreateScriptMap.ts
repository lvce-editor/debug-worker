import type { ParsedScript } from '../ParsedScript/ParsedScript.ts'
import type { ParsedScriptMap } from '../ParsedScriptMap/ParsedScriptMap.ts'

export const createScriptMap = (scripts: readonly ParsedScript[]): ParsedScriptMap => {
  const parsedScripts = Object.create(null)
  for (const script of scripts) {
    parsedScripts[script.scriptId] = script
  }
  return parsedScripts
}
