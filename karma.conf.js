module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
        '.public/src/services/articles/articles.spec.js'
    ],
    exclude: [        
    ],
    preprocessors: {      
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome','PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}