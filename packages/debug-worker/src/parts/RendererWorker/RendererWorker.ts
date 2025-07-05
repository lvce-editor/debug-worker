import { RendererWorker } from '@lvce-editor/rpc-registry'

export const {
  activateByEvent,
  handleDebugChange,
  handleDebugPaused,
  handleDebugResumed,
  handleDebugScriptParsed,
  invoke,
  sendMessagePortToExtensionHostWorker,
  set,
  showContextMenu,
  invokeAndTransfer,
  showErrorDialog,
  openUri,
} = RendererWorker
