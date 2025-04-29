import { type Rpc, MessagePortRpcParent } from '@lvce-editor/rpc'
import * as GetPortTuple from '../GetPortTuple/GetPortTuple.ts'
import * as ParentRpc from '../Rpc/Rpc.ts'

export const createExtensionHostRpc = async (): Promise<Rpc> => {
  const { port1, port2 } = GetPortTuple.getPortTuple()
  await ParentRpc.invokeAndTransfer('SendMessagePortToExtensionHostWorker.sendMessagePortToExtensionHostWorker', port2)
  const rpc = await MessagePortRpcParent.create({
    commandMap: {},
    messagePort: port1,
    isMessagePortOpen: true,
  })

  return rpc
}
