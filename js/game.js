window.addEvents({
	domready: function()
	{
		var canvas = $('gameScreen');
		window.Game = new SnakeGame(canvas);

		Game.start();
	},
	'keydown':function(event)
	{
		if (+event.code === 37)
		{
			console.log('left');
			window.Game.Snake.move('left');
		}
		if (+event.code === 38)
		{
			console.log('up');
			window.Game.Snake.move('up');
		}
		if (+event.code === 39)
		{
			console.log('right');
			window.Game.Snake.move('right');
		}
		if (+event.code === 40)
		{
			console.log('down');
			window.Game.Snake.move('down');
		}
	}
});
