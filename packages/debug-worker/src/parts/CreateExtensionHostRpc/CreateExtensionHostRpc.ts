import { type Rpc, MessagePortRpcParent } from '@lvce-editor/rpc'
import { VError } from '@lvce-editor/verror'
import * as GetPortTuple from '../GetPortTuple/GetPortTuple.ts'
import * as ParentRpc from '../Rpc/Rpc.ts'
import * as RpcId from '../RpcId/RpcId.ts'

export const createExtensionHostRpc = async (): Promise<Rpc> => {
  try {
    const { port1, port2 } = GetPortTuple.getPortTuple()
    const command = 'HandleMessagePort.handleMessagePort'
    await ParentRpc.invokeAndTransfer('SendMessagePortToExtensionHostWorker.sendMessagePortToExtensionHostWorker', port2, command, RpcId.DebugWorker)
    port1.start()
    const rpc = await MessagePortRpcParent.create({
      commandMap: {},
      messagePort: port1,
      isMessagePortOpen: false,
    })
    // TODO createMessageportRpcParent should call port start
    return rpc
  } catch (error) {
    throw new VError(error, `Failed to create extension host rpc`)
  }
}
