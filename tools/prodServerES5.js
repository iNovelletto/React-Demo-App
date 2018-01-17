'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _open = require('open');

var _open2 = _interopRequireDefault(_open);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */

var port = 4000;
var host = '0.0.0.0';
var testHost = 'http://localhost';
var app = (0, _express2.default)();

app.use((0, _compression2.default)());
//const staticPath = path.join(__dirname, 'dist')
//app.use(_express2.default.static('dist'));
app.use('/', _express2.default.static(__dirname + '/'));

// app.get('*', function(req, res) {
//   res.sendFile(path.join( __dirname, '../dist/index.html'));
// });

app.listen(port, host, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
// app.listen(port, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     open(`${testHost}:${port}`);
//   }
// });
