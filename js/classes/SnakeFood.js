/**
 * Snake food abstraction of snake food.
 *
 * @property int    size  Size in integer
 * @property string color Color property in Hex string.
 */
var SnakeFood = new Class({
	initialize: function(size, color)
	{
		/**
		 * SnakeFood Size in units
		 */
		this.defaultSize  = 1;

		/**
		 * SnakeFood Color in Hexadecimal
		 */
		this.defaultColor = '#FFF';

		this.size  = this.defaultSize;
		this.color = this.defaultColor;

		if (isInt(size))
		{
			this.size = Math.abs(size);
		}
		if (isHexColor(color))
		{
			this.color = color;
		}
	}
});
