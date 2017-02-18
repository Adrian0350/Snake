/**
 * Game Screen is an abstraction of a screen.
 *
 * @property object canvas              HTML Canvas object
 * @property string canvas_id           Canvas ID
 * @property object  size               Array containing Height and Width
 * @property string background_color    Color property in Hex string.
 */
var Screen = new Class({
	initialize: function(canvas, canvas_id, size, background_color)
	{
		this.default_canvas_id   = "SnakeGameCanvas";
		this.default_canvas_size = {
			height: 500,
			width: 500
		};
		this.default_canvas      = new Element('canvas', {
			'id': this.default_canvas_id,
			'height': this.default_canvas_size.height,
			'width': this.default_canvas_size.width
		});

		this.canvas = this.default_canvas;
		this.size = this.default_canvas_size;

		if (isCanvas(canvas))
		{
			var canvas_id = canvas.getProperty('id');

			if (canvas_id)
			{
				canvas.setProperty('id', this.default_canvas_id);
			}

			this.canvas = canvas;
		}
	},
	getCanvas: function()
	{
		return this.canvas;
	}
});
