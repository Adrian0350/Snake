/**
 * ElementPosition -> The foundation for self reference.
 */
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
		pos.x = Math.floor(Math.abs(pos.x));
		pos.y = Math.floor(Math.abs(pos.y));

		if ((pos.x < 0 || pos.y < 0))
		{
			pos = this.defaultPosition();
			console.warn('Position not valid, setting default: ' + JSON.stringify(pos));
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
