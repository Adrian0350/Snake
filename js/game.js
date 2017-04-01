window.addEvents({
	domready: function()
	{
		var canvas = $('gameScreen');
		var Game = new SnakeGame(canvas);

		Game.start();
	}
});
