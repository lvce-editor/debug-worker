import { RpcId } from '@lvce-editor/rpc-registry'
import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

export const sendMessagePortToExtensionHostWorker = async (port: MessagePort): Promise<void> => {
  // @ts-ignore
  await RendererWorker.sendMessagePortToExtensionHostWorker(port, RpcId.DebugWorker)
}
