import { RendererWorker } from '@lvce-editor/rpc-registry'

export const {
  activateByEvent,
  handleDebugChange,
  handleDebugPaused,
  handleDebugResumed,
  handleDebugScriptParsed,
  openUri,
  sendMessagePortToEditorWorker,
  sendMessagePortToExtensionHostWorker,
  set,
  showContextMenu,
  showErrorDialog,
} = RendererWorker

export const openExtensions = async (): Promise<void> => {
  await RendererWorker.invoke('SideBar.show', 'Extensions')
}
