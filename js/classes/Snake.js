/**
 * Snake abstraction of a Snake. — 3Dimentional [Array3D]
 *
 * @property int    size  Size in integer
 * @property string color Color property in Hex string.
 */
var Snake = new Class({
	initialize: function(options)
	{
		this.type = 'Snake';

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

			console.warn('Snake Options where not defined \n Predefined: ' + JSON.stringify(options));
		}
		var size = {
			rows: Math.floor(options.size.rows),
			columns: Math.floor(options.size.columns)
		};

		if (size.rows < 2)
		{
			console.warn('Number of rows is not valid. Default set 2.');
			this.size.rows = 2;
		}

		if (size.columns < 2)
		{
			console.warn('Number of columns is not valid. Default set 2.');
			this.size.columns = 2;
		}

		if (size.rows >= 2 && size.columns >= 2)
		{
			this.size = size;
		}
		else
		{
			this.size = this.defaultSize();
			console.warn('Options size is not a valid value.\n Setting default value: ' + JSON.stringify(this.size));
		}

		if (isHexColor(options.color))
		{
			this.color = options.color;
		}
		else
		{
			this.color = this.defaultColor();
			console.warn('Options color is not a valid hex color value.\n Setting default value: ' + this.color);
		}

		this.options = {
			size: this.size,
			color: this.color
		}


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
			console.warn("Snake can't grow that - " + size + " - much!");
		}

		this.set(this.options);
	},
	setColor: function(color)
	{
		this.options.color = color;
		this.set(this.options);
	}
});
