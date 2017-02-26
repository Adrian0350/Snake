/**
 * Game Screen is an abstraction of a screen.
 *
 * @property object canvas              HTML Canvas object
 * @property string canvas_id           Canvas ID
 * @property object  size               Array containing Height and Width
 * @property string background_color    Color property in Hex string.
 */
var Screen = new Class({
	initialize: function(canvas, options)
	{
		var DEFAULT_CANVAS_ID = 'SnakeGameCanvas';
		var DEFAULT_CANVAS_CLASS = '';

		this.type = 'Screen';
		this.defaultCanvas = function()
		{
			return new Element('canvas', {
				id: DEFAULT_CANVAS_ID,
				class: DEFAULT_CANVAS_CLASS
			});
		}
		this.defaultSize = function()
		{
			return {
				height: 200,
				width: 200
			};
		}
		this.defaultColor = function()
		{
			return '#701A0A';
		}

		this.set(canvas, options);

		var snakeOptions = {
			size: 20,
			color: '#fff'
		};
		this.elements = {
			'Snake': new Snake(snakeOptions),
			'SnakeFood': new Block(5)
		};
	},
	set: function(canvas, options)
	{
		if (!isCanvas(canvas))
		{
			this.canvas = this.defaultCanvas();
			console.warn('Invalid screen canvas -> ' + canvas);
		}
		if (options === undefined)
		{
			this.options = {
				size: this.defaultSize(),
				color: this.defaultColor()
			};

			console.warn('Snake Options where not defined \n Predefined: ' + JSON.stringify(this.options));
		}

		this.canvas  = canvas;
		this.options = options;

		var color = this.options.color;

		if (!isHexColor(color))
		{
			console.warn('Not a valid color: ' + color);
			this.options.color = this.defaultColor();
		}

		this.__setScreen();
	},
	__setScreen: function()
	{
		this.size  = this.options.size;
		this.color = this.options.color;

		this.__setContext();
	},
	__setContext: function()
	{
		this.context = this.canvas.getContext('2d');
		this.__setCanvas();
	},
	__setCanvas: function()
	{
		this.canvas.setStyles({
			background: this.color,
			height: this.size.height,
			width: this.size.width
		});
	},
	draw: function()
	{
		var position = {
			x: 10,
			y: 10
		};
		for (element in this.elements)
		{
			var e = this.elements[element];
			position.x = position.x + 5;
			position.y = position.y + 5;

			this.context.fillStyle = e.color;
			this.context.fillRect(position.x, position.y, e.size, e.size);

			console.log(this.elements[element]);
		}
	},
	setSnakeColor: function(color)
	{
		this.elements.Snake.setColor(color);
	}
});
