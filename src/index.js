const webpack = require('webpack');
const config = require('./client/webpack.config.js');

module.exports = function(port, data) 
{
	webpack(config, function(err, stats) 
	{
		if(err || stats.hasErrors()) 
		{
			throw err || stats;
		}

		require('./server')(port, data);
	});
};
