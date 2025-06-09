import type { ParsedScript } from '../ParsedScript/ParsedScript.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const handleScriptParsed = (state: RunAndDebugState, parsedScript: ParsedScript): RunAndDebugState => {
  const { parsedScripts } = state
  return {
    ...state,
    parsedScripts: {
      ...parsedScripts,
      [parsedScript.scriptId]: parsedScript,
    },
  }
}
