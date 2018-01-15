"use strict";

require('./style.scss');
require('../index.html');

console.log('foo');

if (module.hot) {
	module.hot.accept();
}