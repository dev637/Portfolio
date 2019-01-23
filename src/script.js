"use strict";

require('./scss/style.scss');
require('normalize.css');
require('../index.html');
require('./app.js');

console.log('foo');

if (module.hot) {
	module.hot.accept();
}
