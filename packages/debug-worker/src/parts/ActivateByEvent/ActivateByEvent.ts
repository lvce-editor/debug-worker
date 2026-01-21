import { RendererWorker } from '@lvce-editor/rpc-registry'

export const activateByEvent = (event: string): Promise<void> => {
  // @ts-ignore
  return RendererWorker.activateByEvent(event)
}
