import * as ParentRpc from '../Rpc/Rpc.ts'
import * as RpcId from '../RpcId/RpcId.ts'

export const sendMessagePortToExtensionHostWorker = async (port: MessagePort): Promise<void> => {
  const command = 'HandleMessagePort.handleMessagePort2'
  await ParentRpc.invokeAndTransfer('SendMessagePortToExtensionHostWorker.sendMessagePortToExtensionHostWorker', port, command, RpcId.DebugWorker)
}
