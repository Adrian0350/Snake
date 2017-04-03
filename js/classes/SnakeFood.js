/**
 * SnakeFood food abstraction of snake food.
 *
 * @property int    size  Size in integer
 * @property string color Color property in Hex string.
 */
var SnakeFoodFood = new Class({
	Implements: Position,
	initialize: function(options)
	{
		this.type = 'SnakeFood';

		this.defaultSize = function()
		{
			return {
				rows: 2,
				columns: 2
			};
		}
		this.defaultColor = function()
		{
			return '#FFFFFF';
		}


		this.set(options);
	},
	set: function(options)
	{
		if (options === undefined)
		{
			options = {
				size: this.defaultSize(),
				color: this.defaultColor()
			};
			this.options = options;

			console.warn('SnakeFood Options where not defined \n Predefined: ' + JSON.stringify(options));
		}
		var size = {
			rows: Math.floor(options.size.rows),
			columns: Math.floor(options.size.columns)
		};

		if (size.rows == size.columns && size.rows >= 2)
		{
			options.size = size;
		}
		else
		{
			options.size = this.defaultSize();
			console.warn('Options size is not a valid value.\n Setting default value: ' + JSON.stringify(this.size));
		}
		if (!isHexColor(options.color))
		{
			options.color = this.defaultColor();
			console.warn('Options color is not a valid hex color value.');
			console.warn('Setting default value: ' + options.color);
		}

		this.__setOptions(options);
	},
	__setOptions: function()
	{
		this.options = options;
		this.__setBlock();
	},
	__setBlock: function()
	{
		this.Node = new Block(this.size);
		this.__setBody();
	},
	__setBody: function()
	{
		this.body = this.Node.array;
	},
	getBody: function()
	{
		return this.body;
	},
	getSize: function()
	{
		return this.size;
	},
	getColor: function()
	{
		return this.color;
	},
	grow: function(size)
	{
		size = Math.floor(size);

		if (isInt(size))
		{
			this.options.size.rows += size;
		}
		else
		{
			console.warn("SnakeFood can't grow that - " + size + " - much!");
		}

		this.set(this.options);
	},
	setColor: function(color)
	{
		this.options.color = color;
		this.set(this.options);
	}
});
