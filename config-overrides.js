/**
 *  This file is used to overwrite the config (Webpack) that is used within react-scripts
 */
const path = require('path');

module.exports = function override(config, env) {
	config.resolve.alias['styled-components'] = path.resolve(
		'node_modules',
		'styled-components'
	);
	config.resolve.alias['react'] = path.resolve('node_modules', 'react');
	config.resolve.alias['react-dom'] = path.resolve('node_modules', 'react-dom');

	return config;
};
