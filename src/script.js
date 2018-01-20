"use strict";

require('./style.scss');
require('../index.html');
require('./app.js');

console.log('foo');

if (module.hot) {
	module.hot.accept();
}