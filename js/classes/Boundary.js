var Boundary = new Class({
	initialize: function()
	{
		this.boundary = this.__boundary();
	},
	__boundary: function()
	{
		return {
			x: this.x,
			y: this.y
		}
	},
	getBoundary: function()
	{
		return this.__boundary();
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

		this.x        = x;
		this.y        = y;
		this.boundary = {
			x: this.x,
			y: this.y
		}
	}
});
