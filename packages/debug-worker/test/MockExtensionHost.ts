import { MockRpc } from '@lvce-editor/rpc'
import * as ExtensionHost from '../src/parts/ExtensionHost/ExtensionHost.ts'

type Invoke = (method: string, ...params: readonly any[]) => any

export const createExtensionHostProviderMock = (invokeProvider: Invoke): ReturnType<typeof MockRpc.create> => {
  return MockRpc.create({
    commandMap: {},
    invoke: async (method: string, ...params: readonly any[]) => {
      if (method !== 'Extensions.executeProvidersByEvent') {
        throw new Error(`unexpected method ${method}`)
      }
      const [, providerMethod, ...providerParams] = params
      const result = await invokeProvider(providerMethod, ...providerParams)
      return [result]
    },
  })
}

export const setExtensionHostProviderMock = (invokeProvider: Invoke): void => {
  ExtensionHost.set(createExtensionHostProviderMock(invokeProvider))
}
