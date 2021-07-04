module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        'babel-plugin-styled-components',
        [
            'babel-plugin-root-import',
            {
                rootPathPrefix: '$',
                rootPathSuffix: 'app',
            },
            {
                rootPathPrefix: '$context',
                rootPathSuffix: 'app/context/index.js',
            },
            {
                rootPathPrefix: '$utils',
                rootPathSuffix: 'app/utils',
            },
            {
                rootPathPrefix: '$screens',
                rootPathSuffix: 'app/screens',
            },
        ],
    ],
}
