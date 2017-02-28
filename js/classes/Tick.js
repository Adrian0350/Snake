/**
 * Tick will be the game's life changer (literally).
 */
var Tick = new Class({
	initialize: function(fps)
	{
		var DEFAULT_TICKS_PER_SECOND = 10; // FOR LATER
		var DEFAULT_FPS_PER_SECOND = 1; // 1 Per second
		var TIME_SECOND = 1000;             // 1 Second.

		this.type         = 'Ticker';
		this.refresh_rate = DEFAULT_FPS_PER_SECOND * TIME_SECOND;
		this.fps          = DEFAULT_FPS_PER_SECOND;
		this.paused       = false;
		this.delegate     = null;

		console.log(this.refresh_rate);
		this.refreshRate = function()
		{
			return this.refresh_rate;
		}
		this.iteration = function()
		{
			return TIME_SECOND;
		}
		this.nextTick = function()
		{
			return Date.now() + (this.iteration() / this.fps);
		}
		this.status = function()
		{
			var status = {
				'time': Date.now(),
				'fps': this.fps,
				'paused': this.paused,
			};

			return status;
		}
		this.callBack = function(delegate)
		{
			this.delegate = delegate;
		}

		fps = Math.floor(fps);
		if (!fps || fps < 0)
		{
			console.warn('Ticks must be in the range of 1-60.\n  Set to default: ' + DEFAULT_FPS_PER_SECOND);
			this.fps = DEFAULT_FPS_PER_SECOND;
		}
		else
		{
			this.fps = fps;
		}

		var self = this;
		this.refresh = function()
		{
			self.status();

			self.delegate(self.status());
		}
	},
	start: function()
	{
		if (!this.interval)
		{
			this.__start();
		}
	},
	stop: function()
	{
		clearInterval(this.interval);
		this.interval = null;
	},
	pause: function()
	{

	},
	unpause: function()
	{

	},
	watch: function(delegate)
	{
		if (typeof delegate == undefined)
		{
			this.__noDelegateError();
		}
		if (typeof delegate !== 'function')
		{
			this.__wrongDelegateError();
		}

		this.callBack(delegate);
	},
	__start: function()
	{
		this.interval = this.refresh.periodical(this.refreshRate());
	},
	__paused: function()
	{
		return this.paused
	},
	__getCurrentTime: function()
	{
		return Date.now()
	},
	__noDelegateError: function()
	{
		throw 'Error: Callback was not defined.'
	},
	__wrongDelegateError: function()
	{
		throw 'Error: Callback must be a function.'
	},
});
