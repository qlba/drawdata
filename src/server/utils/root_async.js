module.exports = function(rootAsync) {
		rootAsync().catch(function(err) {
				setImmediate(function() {
						throw err;
				});
		});
};
