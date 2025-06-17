export const hasProperty = <K extends string>(object: unknown, key: K): object is Record<K, unknown> => {
  return Boolean(object && typeof object === 'object' && key in object)
}
