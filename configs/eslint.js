module.exports = {
  env: {
    // We reference process everywhere
    node: true,
  },

  globals: {
    ga: 'readonly',
  },

  rules: {
    'class-methods-use-this': 'off',

    // This seems to fail for string props also...
    'react/jsx-no-literals': 'off',

    // Disabled until we migrate to hooks
    'react/no-did-update-set-state': 'off',
    'react/prefer-stateless-function': 'off',

    // Fix upstream
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/unbound-method': 'off',
  },

  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx', '*.story.tsx'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-no-literals': 'off',
      },
    },
    {
      files: ['*.story.tsx'],
      rules: {
        'max-classes-per-file': 'off',

        // Webpack alias imports
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
      },
    },
  ],
};