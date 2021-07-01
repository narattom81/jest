const sum = require('./sum')
test('adds', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(-1,2)).toBe(1);
})
