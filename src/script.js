"use strict";

require('./scss/style.scss');
require('normalize.css');
require('./app.js');

AOS.init({
	once: 'false',
	duration: 200,
	anchorPlacement: 'top-top'
});
console.log('foo');

if (module.hot) {
	module.hot.accept();
}
