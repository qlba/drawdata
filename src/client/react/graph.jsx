var React = require('react');
var Chart = require('chart.js');

module.exports = class extends React.Component 
{
	render() 
	{
		return <canvas ref={canvas => this.canvas = canvas} />;
	}

	async componentDidMount() 
	{
		this.chart = new Chart(this.canvas, await (await fetch('/data')).json());
	}

	componentWillUnmount()
	{
		this.chart.destroy();
	}
};
