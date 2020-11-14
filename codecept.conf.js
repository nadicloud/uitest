const {
  setHeadlessWhen
} = require('@codeceptjs/configure');
require('dotenv').config({
  path: '.env'
});

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  output: './output',
  helpers: {
    MyHelper: {
      require: "./src/utils/helper.js"
    },
    Puppeteer: {
      windowSize: '1536 x 826',
      url: 'http://localhost:8080',
      show: false,
      chrome: {
        args: ['--headless','--no-sandbox', '--window-size=1536,826'],
      },
      waitForNavigation: ["domcontentloaded", "networkidle0"],
      waitForTimeout: 60000,
      waitForAction: 2000,
     
    },
    FileSystem: {},
    AssertWrapper: {
      require: "codeceptjs-assert"
    },
    ChaiWrapper: {
      require: "codeceptjs-chai"
    }
  },
  include: {
    I: './src/utils/steps_file.js',
    env: './credentials.js',
    homePage: './src/pages/home.page.js',
    loginPage: './src/pages/login.page.js',
    analyticsPage: './src/pages/analytics.page.js',
    filedropPage: './src/pages/file-drop.page.js',
    passwordResetPage: './src/pages/password-reset.page.js',
    policyPage: './src/pages/policy.page.js',
    requesthistoryPage: './src/pages/request-history.page.js',
    usersPage: './src/pages/users.page.js'
  },
  bootstrap: null,
  gherkin: {
    features: './specs/features/*.feature',
    steps: './specs/step_definitions/*.steps.js'
  },
  mocha: {},
  name: 'icap-management-ui-tests',
  plugins: {
    allure: {
      outputDir: './allure-results'
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: false
    },
    customLocator: {
      enabled: true,
      attribute: 'data-test-id'  
    },
    customLocator: {
      enabled: true,
      attribute: 'data-range-key'
    },
    
    screenshotOnFail: {
      enabled: true
    },
    autoDelay: {
      enabled: true,
      // delayBefore: 300,
      // delayAfter: 200
    },

  }
}
