const config = require('./protractor.conf').config;
const { SpecReporter } = require('jasmine-spec-reporter');
const PUPPETEER_CHROME_PATH = require('puppeteer').executablePath();

config.capabilities = {
    browserName: 'chrome',
    chromeOptions: {
        // the "binary" option" is not documented on Protractor doc, but found it while spelunking into the ChromeDriver's one :-P
        binary: PUPPETEER_CHROME_PATH,
        args: ['--headless', '--no-sandbox', '--disable-gpu', '--window-size=1280,1024']
    }
};

exports.config = config;
