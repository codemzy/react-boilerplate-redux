var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        hostname: process.env.IP,
        port: process.env.PORT,
        singleRun: true,
        frameworks: ['mocha'],
        files: ['node_modules/jquery/dist/jquery.js', 'app/tests/**/*.test.js'],
        preprocessors: {
            'app/tests/**/*.test.js': ['webpack', 'sourcemap']
        },
        reporters: ['mocha'],
        client: {
            mocha: {
                timeout: '5000'
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};