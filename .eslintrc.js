// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'react/prop-types': ['error', { skipUndeclared:true }],
        'no-multi-spaces': ['error'],
        'no-trailing-spaces': ['error', { ignoreComments: true }],
        'func-call-spacing': ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],
        'array-bracket-spacing': ['error', 'never'],
        'space-in-parens': ['error', 'never'],
        'no-unused-vars': 'off',
        'no-case-declarations': 'off',
        'no-undef': 'off'
    },
    settings: {
        react: {
            'version': 'detect'
        }
    }
};