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
			return 2;
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
		var size = Math.floor(options.size);

		if (options.size >= 2)
		{
			this.size = size;
		}
		else
		{
			this.size = this.defaultSize();
			console.warn('Options size is not a valid value.\n Setting default value: ' + this.size);
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
		var node = 1;
		this.body = [];

		while (node <= this.size)
		{
			this.body.push(this.Node.array);
			node++;
		}
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
			this.options.size += size;
		}
		else
		{
			console.warn("Snake can't grow that - " + size + " - much!");
		}

		this.set(this.options);
	},
	setColor: function(color)
	{
		this.set({'color': color});
	}
});
