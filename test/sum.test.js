// sum.js
function sum(a, b) {
    return a + b;
  }

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 3 + 5 to equal 8', () => {
    expect(sum(3, 5)).toBe(8);
});

test('adds 3 + 10 to equal 13', () => {
    expect(sum(3, 10)).toBe(13);
});