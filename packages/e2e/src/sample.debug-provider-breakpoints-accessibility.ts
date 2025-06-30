import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'sample.debug-provider-paused-on-exception'

export const test: Test = async ({ FileSystem, Workspace, Extension, SideBar, Locator, expect }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await Workspace.setPath(tmpDir)
  await Extension.addWebExtension(new URL(`../fixtures/${name}`, import.meta.url).toString())

  // act
  await SideBar.open('Run And Debug')

  // assert
  const debugButtonOne = Locator('.DebugButton').nth(0)
  await expect(debugButtonOne).toHaveAttribute('title', 'Resume')
  const rows = Locator('.DebugRow')
  await expect(rows).toHaveCount(11)
  await expect(rows.nth(0)).toHaveText('Watch')
  await expect(rows.nth(1)).toHaveText('BreakPoints')
  await expect(rows.nth(1)).toHaveAttribute('aria-setsize', '4')
  await expect(rows.nth(1)).toHaveAttribute('aria-posinset', '2')
  // TODO test sub rows accessibility
}
