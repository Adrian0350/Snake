var Action = new Class({
	Implements: Position,
	initialize: function()
	{
		this.type      = 'Action';
		this.direction = 'left';
		this.moveBy    = 1;
	},
	move: function(direction)
	{
		if (!direction)
		{
			direction = this.direction;
		}

		if (direction === 'up')
		{
			this.direction = direction;
			return this.position.y -= this.moveBy;
		}
		if (direction === 'left')
		{
			this.direction = direction;
			return this.position.x -= this.moveBy;
		}
		if (direction === 'right')
		{
			this.direction = direction;
			return this.position.x += this.moveBy;
		}
		if (direction === 'down')
		{
			this.direction = direction;
			return this.position.y += this.moveBy;
		}
	}
});
