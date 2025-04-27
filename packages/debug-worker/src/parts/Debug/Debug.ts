export const create = (debugId: any): any => {
  return {
    debugId,
  }
}

export const start = async (id: any): Promise<any> => {
  // TODO
}

export const listProcesses = async (id: any): Promise<any> => {
  // TODO
}

export const resume = async (id: any): Promise<any> => {
  // TODO
}

export const pause = async (id: any): Promise<any> => {
  // TODO
}

export const stepOver = async (id: any): Promise<any> => {
  // TODO
}

export const stepInto = async (id: any): Promise<any> => {
  // TODO
}

export const stepOut = async (id: any): Promise<any> => {
  // TODO
}

export const step = async (id: any): Promise<any> => {
  // TODO
}

export const setPauseOnExceptions = async (id: any, value: any): Promise<any> => {
  // TODO
  return {}
}

export const getProperties = async (id: any, objectId: any): Promise<any> => {
  // TODO
  return {}
}

export const evaluate = async (id: any, expression: any, callFrameId: any): Promise<any> => {
  // TODO
  return {}
}

export const scriptParsed = (script: any): void => {
  // TODO
}

export const paused = (params: any): void => {
  // TODO
}

export const resumed = (params: any): void => {
  // TODO
}
