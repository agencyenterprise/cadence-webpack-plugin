beforeAll(async () => {
  await page.goto('http://localhost:3000/');
});

describe('Cadence', () => {

  test('FCL can load Cadence query example at browser', async () => {
    await page.waitForSelector('button');
    await page.click('button');
    await page.waitForSelector('[data-acknowledged]');
    const element = await page.$('[data-acknowledged]');
    expect(element).toBeTruthy();
  });

});