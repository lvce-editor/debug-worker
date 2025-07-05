import { RendererWorker } from '@lvce-editor/rpc-registry'

export const {
  activateByEvent,
  handleDebugChange,
  handleDebugPaused,
  handleDebugResumed,
  handleDebugScriptParsed,
  sendMessagePortToExtensionHostWorker,
  set,
  showContextMenu,
  showErrorDialog,
  openUri,
  sendMessagePortToEditorWorker,
} = RendererWorker
