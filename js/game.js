window.addEvents({
	domready: function()
	{
		var canvas = $('gameScreen');

		var SnakeBodyBlock = new Block(10);

		console.log(SnakeBodyBlock);
		console.log(SnakeBodyBlock.getGraphicBlock());
	}
});
