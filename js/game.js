window.addEvents({
	domready: function()
	{
		var canvas = $('gameScreen');

		var snakeOptions = {
			scale: 10
		};
		var SNAKE = new Snake(snakeOptions);

		console.log('Depth: ' + SNAKE.getScale());
		console.log('Shape: ' + SNAKE.getGraphicShape());
	}
});
