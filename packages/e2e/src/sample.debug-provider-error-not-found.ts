import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = true

export const name = 'sample.debug-provider-error-not-found'

export const test: Test = async ({ expect, Extension, FileSystem, Locator, SideBar, Workspace }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await Workspace.setPath(tmpDir)
  await Extension.addWebExtension(new URL(`../fixtures/${name}`, import.meta.url).href)

  // act
  await SideBar.open('Run And Debug')

  // assert
  const message = Locator('#SideBar .MissingDebugProviderText')
  await expect(message).toHaveText('No debug provider "test-debug" found.')
  const openExtensionsButton = Locator('#SideBar .MissingDebugProviderButton')
  await openExtensionsButton.click()
  const extensionsView = Locator('#SideBar .Extensions')
  await expect(extensionsView).toBeVisible()
}
