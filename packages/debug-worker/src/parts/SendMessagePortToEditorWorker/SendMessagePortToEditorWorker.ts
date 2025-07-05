import { RpcId } from '@lvce-editor/rpc-registry'
import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

export const sendMessagePortToEditorWorker = async (port: MessagePort): Promise<void> => {
  // @ts-ignore
  await RendererWorker.sendMessagePortToEditorWorker(port, RpcId.DebugWorker)
}
