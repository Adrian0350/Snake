/**
 * Snake abstraction of a Snake.
 *
 * @property int    size  Size in integer
 * @property string color Color property in Hex string.
 */
var Snake = new Class({
	Extends: Shape,
	initialize: function(options)
	{
		this.name = 'Snake';
		this.parent(options);
	}
});
