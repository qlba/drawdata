module.exports.bind = function(server, config) 
{
	server.get('/', function(req, res) 
	{
		res.render('index');
	});

	server.get('/data', function(req, res) 
	{
		res.json(config);
	});
};
