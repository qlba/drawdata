const express = require('express');
const {join} = require('path');

const routes = require('./routes');

module.exports = async function(config)
{
	const server = express();

	server.set('view engine', 'pug');
	server.set('views', join(__dirname, 'views'));

	server.use(express.static(join(__dirname, 'static')));
	routes.bind(server, config);

	return Promise.resolve(server);
};

