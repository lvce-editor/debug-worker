export const getDebugPropertyValueLabelCommon = (property: any, maxDescriptionLength: number): string => {
  const description = property.description
  if (description && description.length > maxDescriptionLength) {
    return description.slice(0, Math.max(0, maxDescriptionLength)) + '...'
  }
  return description
}
