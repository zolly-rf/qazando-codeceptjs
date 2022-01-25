exports.config = {
  output: './output',
  helpers: {
    Appium: {
      app: 'C:\\Users\\roger\\Downloads\\appsqazando\\app-release.apk',
      platform: 'Android',
      desiredCapabilities: {
        appPackage: 'com.qazandoapp',
        appActivity: 'MainActivity',
        deviceName: 'pixel',
        platformVersion: '9'
      },
      device: 'pixel'
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/login.js',
    homePage: './pages/home.js'
  },
  mocha: {},
  timeout: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './tests/*_test.js',
  name: 'CursoAppiumCodecept'
}