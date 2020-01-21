const chromedriver = require('chromedriver');

module.exports = {
  src_folders: ["tests"],
  page_objects_path: "tests/pageobjects",
  disable_error_log: true,
  test_settings: {
    default: {
      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        cli_args: [
          '--verbose'
        ],
        port: 9515
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: { 
          args: ['--DNS-prefetch-disable'],
        }
       }
    }
  }
};