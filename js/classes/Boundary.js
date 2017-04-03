var Boundary = new Class({
	initialize: function()
	{
		this.boundary = {
			'x':0,
			'y':0
		}
	},
	getBoundary: function()
	{
		return this.boundary;
	},
	setBoundary: function(x, y)
	{
		x = Math.floor(x);
		y = Math.floor(y);

		if (!x || !y)
		{
			x = 0;
			y = 0;
		}

		this.boundary = {
			'x': x,
			'y': y
		}
	}
});
