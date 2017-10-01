const {join} = require('path');

module.exports = {
				entry: join(__dirname, 'index.js'),
				output: {
								filename: join('src', 'server', 'express', 'static', 'bundle.js')
				},
				module: {
								rules: [
												{test: /\.jsx$/, use: ['jsx-loader']},
												{test: /\.css$/, use: ['style-loader', 'css-loader']},
												{test: /\.png$/, use: ['file-loader']}
								]
				}
};
