import { EditorWorker, get, RpcId } from '@lvce-editor/rpc-registry'

export const { invoke, set } = EditorWorker

export const dispose = async (): Promise<void> => {
  const rpc = get(RpcId.EditorWorker)
  await rpc.dispose()
}
