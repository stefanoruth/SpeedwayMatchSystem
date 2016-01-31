var RaceMatch = require('./lib/RaceMatch.js');
var RaceDriver = require('./lib/RaceDriver.js');
var Vue = require('vue');

Vue.config.debug = false;

var myApp = new Vue({

	el: '#app',

	data: {
		heats: [],
		numDrivers: 8,
		drivers: [],
	},

	ready: function() {
		this.setDrivers();
		this.race();
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
			this.heats.push(new RaceDriver());
			this.heats.pop();
			console.log('shuffle');
		},

		setDrivers: function() {
			this.drivers.length = 0;

			for (var i = this.numDrivers - 1; i >= 0; i--) {
				this.drivers.push(new RaceDriver(i, i+30, 'John Doe', '4A', 'Doe Club'));
			};

			this.race();
		},

		updateDriver: function(driverId) {

		}
	},
});