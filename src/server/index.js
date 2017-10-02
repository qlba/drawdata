const express = require('./express');
const http = require('http');

const rootAsync = require('./utils/root_async');

module.exports = function(config) 
{
	rootAsync(async function()
	{
		const port = config.port || 3000;

		delete config.port;

		const server = http.createServer(await express(config)).listen(port, function(err) 
		{
			if(!err)
				console.log('http://' + server.address().address + ':' + server.address().port + '/');
			else
				throw err;
		});
	});
};
