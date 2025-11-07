// Test if the regex pattern is valid
const pattern = '/:path((?!google).*).html';
console.log('Pattern:', pattern);
console.log('Tests:');
console.log('/about.html matches:', /^\/([^\/]+(?!google).*)\.html$/.test('/about.html'));
console.log('/google857220722364cb08.html matches:', /^\/([^\/]+(?!google).*)\.html$/.test('/google857220722364cb08.html'));
console.log('/google123.html matches:', /^\/([^\/]+(?!google).*)\.html$/.test('/google123.html'));
