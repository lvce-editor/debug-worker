export const getDebugValueObjectId = (child: any): string => {
  return child.object?.objectId || child.value?.objectId || ''
}
