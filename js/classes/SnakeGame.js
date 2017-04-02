var SnakeGame = new Class({
	Extends: Tick,
	initialize: function(canvas, ticks)
	{
		this.type = 'SnakeGame';

		this.snakeOptions = {
			size: {
				rows: 5,
				columns: 5
			},
			color: '#dedede'
		};
		this.screenOptions = {
			size: {
				height: 600,
				width: 600
			}
		};
		if (!ticks)
		{
			ticks = 1;
		}

		this.parent(ticks);
		this.set(canvas);
	},
	set: function(canvas)
	{
		this.Screen = new Screen(canvas, this.screenOptions);
		this.Snake  = new Snake(this.snakeOptions);
	},
	start: function()
	{
		this.__start();
	},
	stop: function()
	{
		this.parent();
	},
	__start: function()
	{
		var self = this;
		this.watch(function(status){
			self.__draw();
		});

		this.parent();
	},
	__draw: function()
	{
		var snakeSize  = this.Snake.getSize();
		var snakeColor = this.Snake.getColor();
		var snakePos   = this.Snake.position;
		var draw       = {
			x: snakePos.x,
			y: snakePos.y,
			height: snakeSize.rows,
			width: snakeSize.columns,
			color: snakeColor
		}

		this.Screen.draw(draw);
		this.Snake.move();
	},
	moveSnake: function(direction)
	{
		this.Snake.move(direction);
	}
});
