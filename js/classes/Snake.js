/**
 * Snake abstraction of a Snake.
 *
 * @property int    size  Size in integer
 * @property string color Color property in Hex string.
 */
var Snake = new Class({
	initialize: function(size, color)
	{
		/**
		 * Snake Size in units
		 */
		this.defaultSize  = 1;

		/**
		 * Snake Color in Hexadecimal
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
