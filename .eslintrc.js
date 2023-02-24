module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-native/all'
    ],
    env: {
        jest: true
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        sourceType: 'module'
    },
    plugins: ['react', 'react-native', 'eslint-plugin-react-hooks'],
    rules: {
        'comma-dangle': 'off',
        'react/prop-types': 'off',
        'no-unused-vars': 'warn',
        'react-native/no-unused-styles': 'warn',
        'react-native/split-platform-components': 'warn',
        'react-native/no-inline-styles': 'warn',
        'react-native/no-color-literals': 'warn',
        'react-native/no-raw-text': 'warn',
        'react-native/no-single-element-style-arrays': 'warn',
        'react-native/sort-styles': 'off'
    },
    settings: {
        react: {
            version: 'latest'
        }
    }
};
