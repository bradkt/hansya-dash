// Karma configuration
// Generated on Wed Dec 07 2016 14:33:14 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',                             // angular
      'bower_components/angular-route/angular-route.js',                 // router
      'bower_components/angular-mocks/angular-mocks.js',              // loads our modules for tests
      './services/users/users.js',                                 // our Users factory
      'src/app/app.js',
      'test/*.js',

      // '**/*.js',
      // '**/!(jquery).js',
      // '**/!(gulpfile).js',
      // '**/!(karma.config).js',


      // 'bower_components/jquery/dist/jquery.js',
      // 'bower_components/angular-route/angular-route.js',
      // 'bower_components/angular-mocks/angular-mocks.js',
      // 'src/app/pages/components/mail/mail.module.js',
      // 'src/app/pages/components/timeline/timeline.module.js',
      // 'src/app/pages/components/tree/tree.module.js',
      // 'src/app/pages/dashboard/dashboard.module.js',
      // 'src/app/pages/form/form.module.js',
      // 'src/app/pages/maps/maps.module.js',
      // 'src/app/pages/profile/profile.module.js',
      // 'src/app/pages/tables/tables.module.js',
      //
      // 'src/app/pages/ui/ui.module.js',
      // 'src/app/pages/ui/alerts/alerts.module.js',
      // 'src/app/pages/ui/buttons/buttons.module.js',
      // 'src/app/pages/ui/grid/grid.module.js',
      // 'src/app/pages/ui/icons/icons.module.js',
      // 'src/app/pages/ui/modals/modals.module.js',
      // 'src/app/pages/ui/notifications/notifications.module.js',
      // 'src/app/pages/ui/panels/panels.module.js',
      // 'src/app/pages/ui/progressBars/progressBars.module.js',
      // 'src/app/pages/ui/slider/slider.module.js',
      // 'src/app/pages/ui/tabs/tabs.module.js',
      // 'src/app/pages/ui/typography/typography.module.js',
      // 'src/app/theme/theme.module.js',
      // 'src/app/theme/components/components.module.js',
      'src/app/app.js',
      // 'src/**/**/**/*.js',
      // 'src/**/**/**/**/*.js',
      // 'src/**/*.js',
      // 'spec/*.js',
      // 'bower_components/angular/angular.js',

    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
