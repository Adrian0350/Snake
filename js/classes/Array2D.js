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
 * 3 X 6 Rectangle:
 *    Y --------------
 *	X 0  0  0  0  0  0
 *	| 0  0  0  0  0  0
 *	| 0  0  0  0  0  0
 *
 */
var Array2D = new Class({
	initialize: function(size)
	{
		// Defaults:
		this.type        = 'Array2D';
		this.defaultSize = function()
		{
			return {
				rows: 2,
				columns: 2
			};
		}

		this.set(size);
	},
	set: function(size)
	{
		if (size === undefined)
		{
			console.warn('Size object given is not a valid size object. \n size: ' + size);

			size = this.defaultSize();

			console.warn('Size has been set to default: ' + JSON.stringify(size));
		}

		size.rows    = Math.floor(size.rows);
		size.columns = Math.floor(size.columns);

		if (size.rows < 1 && size.rows < 1)
		{
			console.warn('Number of rows and columns are invalid.');
			size = this.defaultSize();
		}
		if (size.rows < 1)
		{
			console.warn('Number of rows is invalid: ' + size.rows);
			size.rows = 1
		}
		if (size.columns < 1)
		{
			console.warn('Number of columns is invalid: ' + size.columns);
			size.columns = 1;
		}

		this.__setSize(size);
	},
	__setSize: function(size)
	{
		this.size = size;
		this.__setRows();
	},
	__setRows: function()
	{
		this.rows = this.size.rows;
		this.__setColumns();
	},
	__setColumns: function()
	{
		this.columns = this.size.columns;
		this.__setArray();
	},
	__setArray: function()
	{
		var array   = [];
		var rows    = this.rows;
		var columns = this.columns;

		for (var row = 0; row < rows; row++)
		{
			array[row] = Array();

			for (var column = 0; column < columns; column++)
			{
				array[row][column] = 0;
			}
		}

		this.array = array;
	}
});
