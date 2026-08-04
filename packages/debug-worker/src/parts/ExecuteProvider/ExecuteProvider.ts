import * as ExtensionHost from '../ExtensionHost/ExtensionHost.ts'

export const executeProvider = async ({ event, method, params }: { event: string; method: string; params: readonly any[] }): Promise<any> => {
  // @ts-ignore
  const results = await ExtensionHost.invoke('Extensions.executeProvidersByEvent', event, method, ...params)
  if (results.length === 0) {
    throw new Error(`Failed to execute debug provider: no debug provider "${params[0]}" found`)
  }
  return results[0]
}
