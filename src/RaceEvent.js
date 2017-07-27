var RaceMatch = require('./RaceMatch.js');
var _ = require('lodash');

module.exports = function(drivers) {
	this.drivers = drivers || [];
	this.matches = {};
	this.heats = [];

	this.run = function(display) {
		var display = display != false ? true : false;
		var groups = _.chain(this.drivers).groupBy('group').sort().value();

		for (var key in groups) {
			var match = new RaceMatch(key);
			match.setDrivers(groups[key]);
			match.race();

			this.matches[key] = match;
		}

		var heats = [];
		var longest = 0;

		for (var i in this.matches) {
			if (this.matches[i].heats.length > longest) {
				longest = this.matches[i].heats.length;
			}
		}

		for (var i = 0; i < longest; i++) {
			
			for (var key in this.matches) {
				if (typeof this.matches[key].heats[i] === 'undefined') {
					continue;
				}

				this.heats.push({
					group: key,
					round: i+1,
				});
			}
		}

		return this.heats;
	}
}