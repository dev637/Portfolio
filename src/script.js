"use strict";

require('./scss/style.scss');
require('normalize.css');
require('./app.js');

AOS.init({
	once: 'false',
	anchorPlacement: 'bottom-top'
});
console.log('foo');

if (module.hot) {
	module.hot.accept();
}
