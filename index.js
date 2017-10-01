const server = require('./src');

const data = [{
	showLine: true,
	lineTension: 0,
	label: 'Scatter Dataset',
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
}];

server(3000, data);
