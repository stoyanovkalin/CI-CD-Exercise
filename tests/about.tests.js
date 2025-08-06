const assert = require('assert');

suite('About page', function() {
  test('Page title', async function() {
    const fetch = (await import('node-fetch')).default;
    let res = await fetch("http://localhost:8888/about");
    let body = await res.text();
    assert.ok(body.includes("<title>About</title>"));
    assert.ok(body.includes("<h1>About</h1>"));
  });
});
