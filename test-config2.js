// Test negative lookahead properly
const tests = [
  '/about.html',
  '/google857220722364cb08.html',
  '/google123.html',
  '/services.html'
];

// The correct negative lookahead pattern
const pattern = /^\/(?!google).*\.html$/;

tests.forEach(test => {
  console.log(`${test}: ${pattern.test(test) ? 'MATCH (will redirect)' : 'NO MATCH (will not redirect)'}`);
});
