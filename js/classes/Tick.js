/**
 * Tick will be the game's life changer (literally).
 */
var Tick = new Class({
	initialize: function(ticks)
	{
		var DEFAULT_TICKS_PER_SECOND = 1; // FOR LATER
		var TIME_SECOND = 1000;             // 1 Second.

		this.type         = 'Ticker';
		this.ticks        = TIME_SECOND / DEFAULT_TICKS_PER_SECOND;
		this.paused       = false;
		this.delegate     = null;

		this.refreshRate = function()
		{
			return TIME_SECOND / this.ticks;
		}
		this.iteration = function()
		{
			return TIME_SECOND;
		}
		this.status = function()
		{
			var status = {
				'time': Date.now(),
				'ticks': this.ticks,
				'paused': this.paused,
			};

			return status;
		}
		this.callBack = function(delegate)
		{
			this.delegate = delegate;
		}

		ticks = Math.floor(ticks);
		if (!ticks || ticks < 0)
		{
			console.warn('Ticks must be in the range of 1-64.\n  Set to default: ' + DEFAULT_TICKS_PER_SECOND);
			this.ticks = DEFAULT_TICKS_PER_SECOND;
		}
		else
		{
			this.ticks = ticks;
		}

		var self = this;
		this.refresh = function()
		{
			self.status();

			if (self.delegate)
			{
				self.delegate(self.status());
			}
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
	setTicks: function(ticks)
	{
		ticks = Math.floor(ticks);
		if (ticks && ticks > 0)
		{
			this.__setTicks(ticks);
		}
	},
	__setTicks: function(ticks)
	{
		this.ticks = ticks;
	},
	__start: function()
	{
		this.interval = this.refresh.periodical(this.refreshRate());
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
