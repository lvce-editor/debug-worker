import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const handleScriptParsed = (state: RunAndDebugState, parsedScript: any): RunAndDebugState => {
  const { parsedScripts } = state
  return {
    ...state,
    parsedScripts: {
      ...parsedScripts,
      [parsedScript.id]: parsedScript,
    },
  }
}
