module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
        'eslint-config-prettier',
        'plugin:styled-components-a11y/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier', 'styled-components-a11y'],
    rules: {
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx'],
            },
        ],
        'react/prop-types': 0,
        'no-unused-vars': 1,
        camelcase: 1,
        'import/no-named-as-default': 0,
        semi: 0,
        'react/jsx-props-no-spreading': 0,
    },
}
