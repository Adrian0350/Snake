/**
 * Main block Figure
 *
 */
var Block = new Class({
	Extends: Array2D,
	initialize: function(size)
	{
		this.parent.type = 'Block';
		this.defaultSize = function()
		{
			return {
				rows: 2,
				columns: 2
			};
		}

		this.parent(size);
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
		var block = 'Size: ' + this.size.rows + ' X ' + this.size.columns + '\n\n';

		this.array.forEach(function(row, column){
			block += (column+1) + ' -> ' + row.join('   ') + '\n\n';
		});

		return block;
	}
});
