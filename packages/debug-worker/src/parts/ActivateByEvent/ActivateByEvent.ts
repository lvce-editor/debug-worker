import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

export const activateByEvent = (event: string): Promise<void> => {
  return RendererWorker.activateByEvent(event)
}
