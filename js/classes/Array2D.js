/**
 * Array abstraction of a Block.
 *
 * Where Block is a 2 dimentional array representing
 * a square shape.
 *
 * 2 X 2 Square (minimal size):
 *    Y --
 *	X 0  0
 *	| 0  0
 *
 * 3 X 3 Square:
 *    Y -----
 *	X 0  0  0
 *	| 0  0  0
 *	| 0  0  0
 *
 */
var Array2D = new Class({
	initialize: function(size)
	{
		// Defaults:
		this.type        = 'Array2D';
		this.defaultSize = function()
		{
			return 2;
		}
		this.defaultArray = function()
		{
			return [
				[0, 0],
				[0, 0]
			];
		}

		if (size === undefined)
		{
			size = this.defaultSize();
		}

		// Self set()
		this.set(size);
	},
	set: function(size)
	{
		this.__setSize(size);
	},
	__setSize: function(size)
	{
		size = Math.floor(size);

		if (size && size >= 2)
		{
			this.size = size
		}
		else
		{
			this.size = this.defaultSize();

			if (!(size > 1))
				console.warn('Variable given is not a valid size number. \n size : ' + size);
			console.warn('Size has been set to default: ' + this.size);
		}

		this.__setRows();
	},
	__setRows: function()
	{
		this.rows = this.size;
		this.__setColumns();
	},
	__setColumns: function()
	{
		this.columns = this.size;
		this.__setArray();
	},
	__setArray: function()
	{
		var array = [];
		var depth = this.size;

		for (var i = 1; i <= depth; i++)
		{
			// X Axis
			var xAxis = [];
			while (xAxis.length != depth)
			{
				xAxis.push(0);
			}

			// Y Axis
			array.push(xAxis);
		}

		this.array = array;
	}
});
