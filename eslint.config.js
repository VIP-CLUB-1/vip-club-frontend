import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    files: ['*/.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {}, // Suporte para imports de TypeScript
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: reactPlugin,
      import: importPlugin,
    },
    rules: {
      'react/jsx-uses-react': 'off', // Para React 17+
      'react/react-in-jsx-scope': 'off', // Para React 17+
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'import/no-unresolved': 'error', // Alerta para imports não resolvidos
      'import/named': 'error', // Alerta para imports nomeados incorretos
      'import/default': 'error', // Alerta para imports padrão incorretos
      'import/no-duplicates': 'error', // Alerta para imports duplicados
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
];
