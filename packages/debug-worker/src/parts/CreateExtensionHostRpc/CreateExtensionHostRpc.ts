import type { Rpc } from '@lvce-editor/rpc'

export const createExtensionHostRpc = async (): Promise<Rpc> => {
  // TODO
  // 1. create messageport
  // 2. send messageport to renderer worker
  // 3. renderer worker sends message port to extension host worker
  // 4. direct connection is now established
  return {} as any
}
