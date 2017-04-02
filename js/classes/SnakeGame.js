var SnakeGame = new Class({
	initialize: function(canvas)
	{
		this.type = 'SnakeGame';

		this.snakeOptions = {
			size: {
				rows: 10,
				columns: 2
			},
			color: '#dedede'
		};
		this.screenOptions = {
			size: {
				height: 600,
				width: 600
			}
		};

		this.set(5, canvas);
	},
	set: function(ticks, canvas)
	{
		this.Tick   = new Tick(ticks);
		this.Screen = new Screen(canvas, this.screenOptions);
		this.Snake  = this.Screen.__defaultScreenSnake();
	},
	start: function()
	{
		this.__start();
	},
	stop: function()
	{
		this.Tick.stop();
	},
	__start: function()
	{
		var self = this;
		this.Tick.watch(function(status){
			self.__draw();
		});

		this.Tick.start();
	},
	__draw: function()
	{
		var snakeSize  = this.Snake.getSize();
		var snakePos   = this.Snake.position;
		var snakeColor = this.Snake.getColor();
		var draw       = {
			x: snakePos.x,
			y: snakePos.y,
			height: snakeSize.rows,
			width: snakeSize.columns,
			color: snakeColor
		}

		this.Snake.move();
		this.Screen.draw(draw);
	},
	moveSnake: function(direction)
	{
		this.Snake.move(direction);
	}
});
