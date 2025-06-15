export const getDescriptionValueLabel = (scope: any): string => {
  if (scope.description) {
    return scope.description
  }
  return 'Exception'
}
