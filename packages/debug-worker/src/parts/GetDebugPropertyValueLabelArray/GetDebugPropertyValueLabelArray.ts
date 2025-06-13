const RE_ARRAY_DESCRIPTION = /\((\d+)\)/

const parseLength = (description: string): string => {
  const match = RE_ARRAY_DESCRIPTION.exec(description)
  if (match) {
    return match[1]
  }
  return ''
}

const getArrayPropertyPreview = (item: any): string => {
  return `"${item.value}"`
}

const getArrayPropertiesPreview = (properties: any): string => {
  const formattedItems = properties.map(getArrayPropertyPreview)
  return formattedItems.join(', ')
}

export const getDebugPropertyValueLabelArray = (property: any): string => {
  if (property.preview) {
    const innerLabel = getArrayPropertiesPreview(property.preview.properties)
    const lengthPreview = parseLength(property.description)
    return `(${lengthPreview}) [` + innerLabel + ']'
  }
  return property.description
}
