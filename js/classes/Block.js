/**
 * Main block Figure
 *
 */
var Block = new Class({
	Implements: Array2D,
	initialize: function(size)
	{
		this.type = 'Block';
		this.set(size);
	},
	getSize: function()
	{
		return this.size;
	},
	getBlock: function()
	{
		return this.array;
	},
	getGraphicBlock: function()
	{
		var block = 'Size: ' + this.size + ' X ' + this.size + '\n\n';

		this.array.forEach(function(xAxis, yAxis){
			block += (yAxis+1) + ' -> ' + xAxis.join('   ') + '\n\n';
		});

		return block;
	}
});
