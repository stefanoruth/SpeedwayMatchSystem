var RaceMatch = require('../src/RaceMatch.js');
var RaceDriver = require('../src/RaceDriver.js');
var RaceEvent = require('../src/RaceEvent.js');
var Vue = require('vue');

window._ = require('lodash');
Vue.config.productionTip = false;

new Vue({
	el: '#app',

	data: {
		drivers: [],
		raceEvent: null,
	},

	computed: {
		sortedDrivers: function(){
			return _.chain(this.drivers).orderBy('number').groupBy('group').sort().value();
		}
	},

	mounted: function() {
		this.exampleData();
	},

	methods: {

		race: function() {
			var event = (new RaceEvent(this.drivers));
			event.run(false);
			this.raceEvent = event;
		},

		shuffleHeats: function(){
			function Shuffle(o) {
				for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
				return o;
			};

			Shuffle(this.raceEvent.heats);
			this.raceEvent.heats.__ob__.dep.notify();
		},

		addDriver: function() {
			this.drivers.push(new RaceDriver);
			this.race();
		},

		removeDriver: function() {
			if (this.drivers.length <= 4) {
				return;
			}
			this.drivers.pop();
			this.race();
		},

		clearDrivers: function() {
			this.drivers.length = 0;

			for (var i = 0; i < 4; i++) {
				this.drivers.push(new RaceDriver);
			}

			this.race();
		},

		exampleData: function() {
			this.drivers.length = 0;

			this.drivers.push(new RaceDriver(30, 'John Doe', '4A', 'OKM'));
			this.drivers.push(new RaceDriver(31, 'John Doe', '4A', 'Munkebo'));
			this.drivers.push(new RaceDriver(50, 'John Doe', '4B', 'Tommerup'));
			this.drivers.push(new RaceDriver(51, 'John Doe', '4B', 'Sanderum'));
			this.drivers.push(new RaceDriver(60, 'John Doe', '5A', 'Næsby'));
			this.drivers.push(new RaceDriver(61, 'John Doe', '5A', 'OKM'));
			this.drivers.push(new RaceDriver(90, 'John Doe', '5B', 'Munkebo'));
			this.drivers.push(new RaceDriver(91, 'John Doe', '5B', 'Sanderum'));
			this.drivers.push(new RaceDriver(92, 'John Doe', '5B', 'Næsby'));
			this.drivers.push(new RaceDriver(100, 'John Longname Doe', '6A', 'OKM'));

			this.race();
		},

		getDriver: function(id) {
			if (this.drivers[id-1]) {
				return this.drivers[id-1];
			}
			return;
		},

		heatDrivers: function(group, round) {
			var drivers = this.raceEvent.matches[group].getHeatDrivers(round-1);

			for (var i = drivers.length - 1; i >= 0; i--) {
				if (drivers[i] == '') {
					drivers[i] = '@';
				}
			}

			return drivers.join(' - ');
		},

		print: function() {
			window.print();
		},
	},
});