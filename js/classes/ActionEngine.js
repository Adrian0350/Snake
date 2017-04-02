var ActionEngine = new Class({
	Implements: ElementPosition,
	initialize: function()
	{
		this.type = 'ActionEngine';
		this.direction = 'left';
	},
	move: function(direction)
	{
		if (direction === 'up')
		{
			this.direction = direction;
			return this.position.x++;
		}
		if (direction === 'left')
		{
			this.direction = direction;
			return this.position.y--;
		}
		if (direction === 'down')
		{
			this.direction = direction;
			return this.position.x--;
		}
		if (direction === 'right')
		{
			this.direction = direction;
			return this.position.y++;
		}
	},
	stop: function()
	{

	}
});
