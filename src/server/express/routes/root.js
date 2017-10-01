module.exports.bind = function(server, data) {
		server.get('/', function(req, res) {
				res.render('index');
		});

		server.get('/data', function(req, res) {
				res.json(data);
		});
};
