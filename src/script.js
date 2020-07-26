"use strict";

require('./scss/style.scss');
require('normalize.css');
require('./app.js');
require('./progressive_image.js');
require('../img/index');
require('../img/skill_icons/index');

AOS.init({
	once: 'false',
	duration: 200,
	anchorPlacement: 'top-top'
});
console.log('foo');

if (module.hot) {
	module.hot.accept();
}
