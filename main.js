var RaceMatch = require('./lib/RaceMatch.js');
var RaceDriver = require('./lib/RaceDriver.js');
var Vue = require('vue');

Vue.config.debug = true;

var myApp = new Vue({

	el: '#app',

	data: {
		heats: [],
		drivers: [],
	},

	ready: function() {
		this.setDrivers(8);
		this.race();
	},

	methods: {

		race: function() {
			var race = new RaceMatch();
			this.heats = race.setDrivers(this.drivers.length).race();
		},

		shuffleHeats: function(){
			function Shuffle(o) {
				for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
				return o;
			};

			Shuffle(this.heats);
			this.heats.__ob__.dep.notify();
		},

		setDrivers: function(count) {
			this.drivers.length = 0;

			for (var i = count - 1; i >= 0; i--) {
				this.drivers.push(new RaceDriver(i, 'John Christiansen', '4B', 'Tommerup'));
			};

			this.race();
		},

		addDriver: function() {
			this.drivers.push(new RaceDriver());
			this.race();
		},

		removeDriver: function() {
			if (this.drivers.length <= 4) {
				return;
			}
			this.drivers.pop();
			this.race();
		},

		getDriver: function(id) {
			if (this.drivers[id-1]) {
				return this.drivers[id-1];
			}
			return;
		},

		getHeatDrivers: function(heatId) {
			var heat = this.heats[heatId];
			if (heat == null) {
				return;
			}
			var heatDrivers = [
				this.getDriver(heat[0]),
				this.getDriver(heat[1]),
				this.getDriver(heat[2]),
				this.getDriver(heat[3]),
			];

			var string = '';
			for (var i = heatDrivers.length - 1; i >= 0; i--) {

				if (heatDrivers[i].number != null) {
					string += heatDrivers[i].number;
				}
				if (i != 0) {
					string += ' - ';
				}
			}
			return string;
		},

		print: function() {
			window.print();
		}
	},
});