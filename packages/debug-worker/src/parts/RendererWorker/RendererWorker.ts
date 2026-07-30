import { RendererWorker } from '@lvce-editor/rpc-registry'

export const openExtensions = async (): Promise<void> => {
  await RendererWorker.invoke('SideBar.show', 'Extensions')
}
