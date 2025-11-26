import { RpcId } from '@lvce-editor/rpc-registry'
import { RendererWorker } from '@lvce-editor/rpc-registry'
export const sendMessagePortToEditorWorker = async (port: MessagePort): Promise<void> => {
  // @ts-ignore
  await RendererWorker.sendMessagePortToEditorWorker(port, RpcId.DebugWorker)
}
