var RaceMatch = require('./lib/RaceMatch.js');
var RaceDriver = require('./lib/RaceDriver.js');
var Vue = require('vue');

var myApp = new Vue({

	el: '#app',

	data: {
		heats: [],
	},

	ready: function() {
		this.calcRace();

		this.shuffleHeats();
	},

	methods: {

		calcRace: function() {
			var race = new RaceMatch()
			this.heats = race.setDrivers(12).race();

			
		},

		shuffleHeats: function(){
			function Shuffle(o) {
				for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
				return o;
			};

			this.heats = Shuffle(this.heats);
		},
	},
});