import { getArrayPropertiesPreview } from '../GetArrayPropertiesPreview/GetArrayPropertiesPreview.ts'

const RE_ARRAY_DESCRIPTION = /\((\d+)\)/

const parseLength = (description: string): string => {
  const match = RE_ARRAY_DESCRIPTION.exec(description)
  if (match) {
    return match[1]
  }
  return ''
}

export const getDebugPropertyValueLabelArray = (property: any): string => {
  if (property.preview) {
    const innerLabel = getArrayPropertiesPreview(property.preview.properties)
    const lengthPreview = parseLength(property.description)
    return `(${lengthPreview}) [` + innerLabel + ']'
  }
  return property.description
}
