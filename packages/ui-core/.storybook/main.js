module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    addons: [
        '@storybook/addon-actions/register',
        '@storybook/addon-knobs/register',
        '@storybook/addon-notes/register',
    ],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('babel-loader'),
                    options: {
                        presets: [['react-app', { flow: false, typescript: true }]],
                        rootMode: 'upward'
                    }
                },
                {
                    loader: require.resolve("react-docgen-typescript-loader"),
                    options: {
                        // Provide the path to your tsconfig.json so that your stories can
                        // display types from outside each individual story.
                        tsconfigPath: require.resolve("../tsconfig.json"),
                    },
                }
            ],
        });

        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
};
