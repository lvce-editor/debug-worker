import * as InitializeExtensionHost from '../InitializeExtensionHost/InitializeExtensionHost.ts'

export const initialize = async (): Promise<void> => {
  await InitializeExtensionHost.initializeExtensionHost()
}
