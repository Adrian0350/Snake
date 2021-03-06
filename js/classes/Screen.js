/**
 * Game Screen is an abstraction of a screen.
 */
var Screen = new Class({
	Extends: Boundary,
	initialize: function(canvas, options)
	{
		this.type = 'Screen';

		var DEFAULT_CANVAS_ID    = 'SnakeGameCanvas';
		var DEFAULT_CANVAS_CLASS = '';
		var DEFAULT_CANVAS_SIZE  = 200;


		this.__defaultScreenCanvas = function()
		{
			return new Element('canvas', {
				'id':     DEFAULT_CANVAS_ID,
				'class':  DEFAULT_CANVAS_CLASS,
				'height': DEFAULT_CANVAS_SIZE,
				'width':  DEFAULT_CANVAS_SIZE
			});
		}
		this.__defaultScreenSize = function()
		{
			return {
				'square': true,
				'height': DEFAULT_CANVAS_SIZE,
				'width':  DEFAULT_CANVAS_SIZE
			};
		}
		this.__defaultScreenSnake = function()
		{
			var snakeOptions = {
				size: DEFAULT_CANVAS_SIZE * 0.30, // 10%
				color: '#dedede'
			};

			return new Snake(snakeOptions);
		}
		this.__setDefaults = function()
		{
			this.size   = this.__defaultScreenSize();
			this.canvas = this.__defaultScreenCanvas();
			this.Snake  = this.__defaultScreenSnake();
		}

		if (isCanvas(canvas))
		{
			this.canvas = canvas;
		}
		else
		{
			this.canvas = this.__defaultScreenCanvas();
			console.warn('Invalid canvas, setting default');
		}

		this.setBoundary();
		this.Context = this.canvas.getContext('2d');
	},
	draw: function(draw)
	{
		this.__prepareDrawing();

		this.Context.fillStyle = draw.color;
		this.Context.fillRect(draw.x, draw.y, draw.height, draw.width);
	},
	__prepareDrawing: function()
	{
		this.Context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
	setBoundary: function()
	{
		this.parent(this.canvas.height, this.canvas.width);
	},
	outOfBoundary: function()
	{

	}
});
