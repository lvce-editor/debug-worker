import { RpcId } from '@lvce-editor/rpc-registry'
import { RendererWorker } from '@lvce-editor/rpc-registry'
export const sendMessagePortToExtensionHostWorker = async (port: MessagePort): Promise<void> => {
  // @ts-ignore
  await RendererWorker.sendMessagePortToExtensionHostWorker(port, RpcId.DebugWorker)
}
