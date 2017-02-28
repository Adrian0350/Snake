/**
 * Tick will be the game's life changer (literally).
 */
var Tick = new Class({
	initialize: function(ticks)
	{
		var DEFAULT_REFRESH_RATE = 100;           // 200 Milliseconds
		var DEFAULT_TICKS_PER_SECOND = 1; // 1 Per second
		var TIME_SECOND = 60;             // 1 Second.

		this.type         = 'Ticker';
		this.refresh_rate = DEFAULT_REFRESH_RATE;
		this.ticks        = DEFAULT_TICKS_PER_SECOND;
		this.next_tick    = false;
		this.last_tick    = false;
		this.paused       = false;
		this.delegate     = null;

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
			return Date.now() + (this.iteration() / this.ticks);
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
			console.warn('Ticks must be in the range of 1-60.\n  Set to default: ' + DEFAULT_TICKS_PER_SECOND);
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

			if (self.last_tick + self.refreshRate() >= self.next_tick)
			{
				self.next_tick = self.nextTick();
				if (self.delegate)
				{
					self.delegate(self.status());
				}
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
	pause: function()
	{
		this.next_tick = null;
	},
	unpause: function()
	{
		this.next_tick = this.nextTick();
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
		this.last_tick = this.__getCurrentTime();
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
