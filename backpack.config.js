module.exports = {
    webpack: (config, options, webpack) => {
        config.entry.main = './server/index.js'
        return config
    },
    // webpack: (config, options, webpack) => {
    //     config.entry.main = './server/test.js'
    //     return config
    // }
};
