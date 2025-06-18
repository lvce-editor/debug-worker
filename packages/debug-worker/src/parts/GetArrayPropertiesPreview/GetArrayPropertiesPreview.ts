const getArrayPropertyPreview = (item: any): string => {
  return `"${item.value}"`
}

export const getArrayPropertiesPreview = (properties: any): string => {
  const formattedItems = properties.map(getArrayPropertyPreview)
  return formattedItems.join(', ')
}
