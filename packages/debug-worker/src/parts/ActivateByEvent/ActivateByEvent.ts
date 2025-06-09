import * as Rpc from '../RendererWorker/RendererWorker.ts'

export const activateByEvent = (event: string): Promise<void> => {
  return Rpc.invoke('ExtensionHostManagement.activateByEvent', event)
}
