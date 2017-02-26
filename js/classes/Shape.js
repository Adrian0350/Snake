/**
 * Main shape Figure
 *
 */
var Shape = new Class({
	initialize: function(options)
	{
		this.scale = 0;
		this.shape = [];

		if (options === undefined)
		{
			options = {
				scale: 4 // 2 x 2 square
			};
		}
		if (options.scale)
			this.setScale(options.scale);
	},
	setShape: function()
	{
		var shape = [];
		var depth = this.scale;

		for (var i = 1; i <= depth; i++)
		{
			// X Axis
			var xAxis = [];
			while (xAxis.length != depth)
			{
				xAxis.push(0);
			}

			// Y Axis
			shape.push(xAxis);
		}

		this.shape = shape;
	},
	setScale: function(scale)
	{
		if (isInt(scale) && scale >> 1 > 0)
		{
			this.scale = scale;
		}
		else
		{
			throw new Error('"' + scale + '" Is not a valid Scale Number');
		}

		this.setShape();
	},
	getShape: function()
	{
		return this.shape;
	},
	getGraphicShape: function()
	{
		var shape = '\n\n';

		this.shape.forEach(function(xAxis, yAxis){
			shape += (yAxis+1) + ' -> ' + xAxis.join('   ') + '\n\n';
		});

		return shape;
	},
	getScale: function()
	{
		return this.scale;
	}
});
