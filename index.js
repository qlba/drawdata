const server = require('./src');

const config = {
	port: 27017,
	type: 'scatter',
	data: {
		datasets: [{
			label: 'f(x)',
			showLine: true,
			lineTension: 0,
			data: [{
				x: -10,
				y: 0
			}, {
				x: 0,
				y: 10
			}, {
				x: 10,
				y: 5
			}]
		}]
	}
};

server(config);
