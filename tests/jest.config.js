const CI = !!process.env.CI;

module.exports = {
  preset: "jest-puppeteer",
  forceExit: CI,
  testTimeout: CI ? 5000 : 10000
}