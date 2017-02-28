window.addEvents({
	domready: function()
	{
		var canvas = $('gameScreen');

		var snakeOptions = {
			size: {
				rows: 10,
				columns: 2
			},
			color: '#dedede'
		};
		var screenOptions = {
			size: {
				height: 600,
				width: 600
			}
		};

		var snake = new Snake(snakeOptions);
		var ticker = new Tick(64);
		ticker.start();
		ticker.watch(function(status){
			console.log(status.ticks);
		});
	}
});
