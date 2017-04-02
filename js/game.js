window.addEvents({
	domready: function()
	{
		var canvas = $('gameScreen');
		window.Game = new SnakeGame(canvas);

		window.Game.start();
	},
	'keydown':function(event)
	{
		if (this.retrieve('pressed') === +event.code)
		{
			return;
		}
		this.store('pressed', +event.code)

		if (+event.code === 37)
		{
			window.Game.moveSnake('left');
		}
		if (+event.code === 38)
		{
			window.Game.moveSnake('up');
		}
		if (+event.code === 39)
		{
			window.Game.moveSnake('right');
		}
		if (+event.code === 40)
		{
			window.Game.moveSnake('down');
		}
	}
});
