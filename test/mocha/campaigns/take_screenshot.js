scenario('Test mocha with puppeteer', client => {
  test('should open the browser', async () => {
    await client.open();
    await client.startTracing('take_screenshot');
  });
  test('should go to the Back office', () => client.accessToBO());
  test('should login successfully in the Back office', () => client.signInBO());
  test('should take a screenshot', async () => {
    await client.screenshot();
    await client.stopTracing();
  });
}, 'common_client', true);