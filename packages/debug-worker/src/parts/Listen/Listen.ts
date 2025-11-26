import { WebWorkerRpcClient } from '@lvce-editor/rpc'
import { RendererWorker as Rpc } from '@lvce-editor/rpc-registry'
import * as CommandMap from '../CommandMap/CommandMap.ts'

export const listen = async (): Promise<void> => {
  const rpc = await WebWorkerRpcClient.create({
    commandMap: CommandMap.commandMap,
  })
  Rpc.set(rpc)
}
