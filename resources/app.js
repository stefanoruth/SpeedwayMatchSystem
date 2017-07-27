var RaceMatch = require('../src/RaceMatch.js');
var RaceDriver = require('../src/RaceDriver.js');
var RaceEvent = require('../src/RaceEvent.js');
var Vue = require('vue');

Vue.config.debug = true;

var myApp = new Vue({

	el: '#app',

	data: {
		heats: [],
		drivers: [],
		raceOb: null,
	},

	ready: function() {
		this.setDrivers(8);
		this.race();
	},

	methods: {

		race: function() {
			this.raceOb = new RaceMatch();
			this.heats = this.raceOb.setDrivers(this.drivers).race();
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

		print: function() {
			window.print();
		}
	},
});