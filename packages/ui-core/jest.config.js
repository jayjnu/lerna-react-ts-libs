const esModules = ['@material-ui'].join('|');

module.exports = {
    transform: {
        "^.+\\.[t|j]sx?$":  ['babel-jest', {rootMode: "upward"}]
    },
    rootDir: '.',
    transformIgnorePatterns: [
        // Change MODULE_NAME_HERE to your module that isn't being compiled
        `<rootDir>/node_modules/(?!(${esModules}))`
    ]
}
