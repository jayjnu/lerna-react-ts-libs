module.exports = {
    'presets': [
        [
            '@babel/preset-env',
            {
                'targets': {
                    'esmodules': true
                }
            }
        ],
        '@babel/preset-react',
        '@babel/preset-typescript'
    ],
    'plugins': [
        '@babel/plugin-proposal-class-properties',
        [
            'babel-plugin-import',
            {
                'libraryName': '@material-ui/core',
                'libraryDirectory': 'esm',
                'camel2DashComponentName': false
            },
            'core'
        ],
        [
            'babel-plugin-import',
            {
                'libraryName': '@material-ui/icons',
                'libraryDirectory': 'esm',
                'camel2DashComponentName': false
            },
            'icons'
        ],
    ],
    babelrcRoots: [
        '.',
        'packages/*'
    ]
}
