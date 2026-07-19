import * as config from '@lvce-editor/eslint-config'
import * as actions from '@lvce-editor/eslint-plugin-github-actions'

export default [
  ...config.default,
  ...config.recommendedVirtualDom,
  ...actions.default,

  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'prefer-destructuring': 'off',
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/ban-tslint-comment': 'error',
      '@typescript-eslint/class-literal-property-style': 'error',
      'dot-notation': 'off',
      '@typescript-eslint/dot-notation': 'error',
      '@typescript-eslint/no-confusing-non-null-assertion': 'error',
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/prefer-find': 'error',
      '@typescript-eslint/prefer-includes': 'error',
      '@typescript-eslint/prefer-string-starts-ends-with': 'error',

      // disabled
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/prefer-function-type': 'off',
      '@typescript-eslint/prefer-optional-chain': 'off',
      '@typescript-eslint/prefer-regexp-exec': 'off',

      '@typescript-eslint/prefer-readonly-parameter-types': 'off',
      'unicorn/no-immediate-mutation': 'off',
      'sonarjs/cognitive-complexity': 'off',
      'sonarjs/concise-regex': 'off',
      'sonarjs/function-return-type': 'off',
      'sonarjs/no-duplicated-branches': 'off',
      'sonarjs/no-selector-parameter': 'off',
      'unicorn/no-confusing-array-splice': 'off',
      'unicorn/no-duplicate-if-branches': 'off',
      'unicorn/no-unsafe-string-replacement': 'off',
      'unicorn/no-useless-template-literals': 'off',
      'unicorn/prefer-includes-over-repeated-comparisons': 'off',
      '@typescript-eslint/prefer-for-of': 'off',
    },
  },
  {
    files: ['**/*.test.ts'],
    rules: {
      '@typescript-eslint/no-empty-function': 'off',
      'jest/expect-expect': 'off',
      'jest/no-disabled-tests': 'off',
      'sonarjs/assertions-in-tests': 'off',
      'sonarjs/no-redundant-jump': 'off',
      'sonarjs/prefer-specific-assertions': 'off',
      'virtual-dom/no-inline-event-handlers': 'off',
      'virtual-dom/no-inline-style': 'off',
      'virtual-dom/no-object-attribute-values': 'off',
      'virtual-dom/prefer-constants': 'off',
      'virtual-dom/prefer-merge-class-names': 'off',
      'virtual-dom/prefer-state-destructuring': 'off',
    },
  },
  {
    files: ['packages/e2e/**/*.ts'],
    rules: {
      'e2e/no-direct-click': 'off',
      'e2e/no-inline-nth-in-expect': 'off',
    },
  },
  {
    rules: {
      '@cspell/spellchecker': 'off',
    },
  },
  {
    files: ['packages/debug-worker/src/parts/RenderDebugValue/RenderDebugValue.ts'],
    rules: {
      'virtual-dom/no-object-attribute-values': 'off',
    },
  },
  {
    files: ['packages/debug-worker/src/parts/RenderMissingDebugProvider/RenderMissingDebugProvider.ts'],
    rules: {
      'virtual-dom/no-inline-style': 'off',
    },
  },
]
