import { get, RpcId } from '@lvce-editor/rpc-registry'
import { ExtensionHost } from '@lvce-editor/rpc-registry'

export const { invoke, set } = ExtensionHost

export const dispose = async (): Promise<void> => {
  const rpc = get(RpcId.ExtensionHostWorker)
  await rpc.dispose()
}
