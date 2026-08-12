import path from 'path'
import { fileURLToPath } from 'url'

import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'
import pluginReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefreshPlugin from 'eslint-plugin-react-refresh'
import globals from 'globals'
import { configs, parser as tsParser } from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * 모바일 청첩장 프로젝트 ESLint 설정
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export default [
  js.configs.recommended,
  eslintConfigPrettier,
  ...configs.recommended,
  reactHooks.configs.flat['recommended-latest'],
  {
    ...pluginReact.configs.flat.recommended,
    ...pluginReact.configs.flat['jsx-runtime'],
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.browser,
      },
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  {
    rules: {
      ...importPlugin.configs.recommended.rules,
      'react-refresh/only-export-components': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'type',
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'unknown',
          ],
          pathGroups: [
            {
              pattern: 'react*',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@hooks/*',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@sections/*',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@components/*',
              group: 'internal',
              position: 'after',
            },
          ],
          alphabetize: {
            order: 'asc',
          },
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
    },
  },
  {
    plugins: {
      import: importPlugin,
      'react-refresh': reactRefreshPlugin,
      prettier: prettierPlugin,
    },
  },
  {
    ignores: ['dist/**'],
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          // references 를 가진 루트 tsconfig 하나만 지정 (다중 project 경고 방지)
          project: path.resolve(__dirname, './tsconfig.json'),
          alwaysTryTypes: true,
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
    },
  },
]
