import * as Assert from '../Assert/Assert.ts'

export const getCallStack = (callFrames: readonly any[]): any[] => {
  Assert.array(callFrames)
  const callStack = []
  for (const callFrame of callFrames) {
    callStack.push({
      functionLocation: callFrame.functionLocation,
      functionName: callFrame.functionName || '(anonymous)',
      location: callFrame.location,
    })
  }
  return callStack
}
