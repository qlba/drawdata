const express = require('./express');
const http = require('http');

const rootAsync = require('./utils/root_async');

module.exports = function(port, data) {
		rootAsync(async function()
		{
				const server = http.createServer(await express(data)).listen(port, function(err) {
						if(!err)
								console.log('Server listening on port ' + server.address().port);
						else
								throw err;
				});
		});
};
