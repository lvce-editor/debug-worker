import * as RendererWorker from '../RendererWorker/RendererWorker.ts'
import * as RpcId from '../RpcId/RpcId.ts'

export const sendMessagePortToEditorWorker = async (port: MessagePort): Promise<void> => {
  const command = 'HandleMessagePort.handleMessagePort'
  // @ts-ignore
  await RendererWorker.invokeAndTransfer('SendMessagePortToExtensionHostWorker.sendMessagePortToEditorWorker', port, command, RpcId.DebugWorker)
}
