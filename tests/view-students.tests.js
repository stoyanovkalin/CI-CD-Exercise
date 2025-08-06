const assert = require('assert');

suite('View Students page', function() {
  test('Page title', async function() {
    const fetch = (await import('node-fetch')).default;
    let res = await fetch("http://localhost:8888/students");
    let body = await res.text();
    assert.ok(body.includes("<h1>Registered Students</h1>"));
  });
  
  test('Students list', async function() {
    const fetch = (await import('node-fetch')).default;
    let res = await fetch("http://localhost:8888/students");
    let body = await res.text();
    assert.ok(body.includes("<ul><li>Steve (steve@gmail.com)</li><li>Tina (tina@yahoo.com)</li></ul>"));
  });
});

function getUserData(users, id) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      return users[i];
    }
  }
  return null;
}
