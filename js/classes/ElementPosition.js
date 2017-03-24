var ElementPosition = new Class({
	initialize: function()
	{
		this.defaultPosition = function()
		{
			return {
				'x': 0,
				'y': 0
			}
		}

		this.__setPosition(this.defaultPosition());
	},
	__setPosition: function(pos)
	{
		if (!pos)
		{
			this.position = this.defaultPosition();
		}
		if (pos.x >! -1 || !pos.y >! -1)
		{
			this.position = this.defaultPosition();
		}

		this.position = pos;
	},
	getPosition: function()
	{
		return this.position;
	},
	setPosition: function(pos)
	{
		this.__setPosition(pos);
		return this.getPosition();
	}
});
