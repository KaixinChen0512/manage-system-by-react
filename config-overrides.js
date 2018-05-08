const {
    injectBabelPlugin
} = require('react-app-rewired');

module.exports = function override(config, env) {
    
    config = injectBabelPlugin(['import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
        "proxy":"http://localhost:3000"
    }], config);
    return config;
};