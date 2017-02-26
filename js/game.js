window.addEvents({
	domready: function()
	{
		var canvas = $('gameScreen');

		var screenOptions = {
			size: {
				height: 600,
				width: 600
			}
		};

		var screen = new Screen(canvas, screenOptions);


		console.log(screen.draw());
		console.log(screen.setSnakeColor('#dedede'));
		console.log(screen.draw());

	}
});
