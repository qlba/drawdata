const react = require('react');
const reactDOM = require('react-dom');

const graph = require('./react/graph.jsx');

reactDOM.render(
				react.createElement(graph, {}, 'string form react'),
				document.getElementById('reactRoot')
);

