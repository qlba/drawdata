var React = require('react');
var Chart = require('chart.js');

module.exports = class extends React.Component {

	render() {
		return (
			<canvas width="500px" ref={canvas => this.canvas = canvas} />
		);
	}

	async componentDidMount() {
		var data = await fetch('/data');

		var options = {
			type: 'scatter',
			data: {
				datasets: await data.json()
			}
		};

		this.graph = new Chart(this.canvas, options);
	}
};
