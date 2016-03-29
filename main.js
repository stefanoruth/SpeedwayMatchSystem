var RaceMatch = require('./lib/RaceMatch.js');
var RaceDriver = require('./lib/RaceDriver.js');
var Vue = require('vue');

Vue.config.debug = true;

var myApp = new Vue({

	el: '#app',

	data: {
		numDrivers: 8,
		heats: [],
		drivers: [],
	},

	ready: function() {
		this.setDrivers();
		this.race();
		console.log(this.heats);
	},

	methods: {

		race: function() {
			var race = new RaceMatch()
			this.heats = race.setDrivers(this.numDrivers).race();
		},

		shuffleHeats: function(){
			function Shuffle(o) {
				for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
				return o;
			};

			Shuffle(this.heats);
			this.heats.__ob__.dep.notify();
			console.log('shuffle');
		},

		setDrivers: function() {
			this.drivers.length = 0;

			for (var i = this.numDrivers - 1; i >= 0; i--) {
				this.drivers.push(new RaceDriver());
			};

			this.race();
		},


		resetDrivers: function() {
			this.drivers.length = 0;
			console.log(this.drivers.__ob__.dep.notify());
		},

		getDriverNumber: function(id) {
			if (this.drivers[id-1]) {
				return this.drivers[id-1].number;
			}
			return;
		},
	},
});