var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('public/www', {'index': ['index.html', 'index.htm']})).listen(8080);