var RaceMatch = require('../src/RaceMatch.js');
var RaceDriver = require('../src/RaceDriver.js');
var RaceEvent = require('../src/RaceEvent.js');
var Vue = require('vue');

window._ = require('lodash');
Vue.config.productionTip = false;

new Vue({

	el: '#app',

	data: {
		mobileMenu: false,
		heats: [],
		drivers: [],
		raceOb: null,
	},

	computed: {
		sortedDrivers: function(){
			return _.chain(this.drivers).orderBy('number').groupBy('group').sort().value();
		}
	},

	mounted: function() {
		this.clearDrivers();
	},

	methods: {

		mobileMenuToggle: function(){
			this.mobileMenu = !this.mobileMenu;
		},

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

		print: function() {
			window.print();
		}
	},
});