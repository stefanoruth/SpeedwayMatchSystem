var RaceMatch = require('./RaceMatch.js');

module.exports = function(drivers) {
	this.drivers = drivers || [];
	this.groups = {};
	this.groupMatches = {};
	this.groupHeats = {};

	this.runRaces = function() {
		this.splitRacers();
		//console.log(this.groups);

		for (var key in this.groups) {
			var match = new RaceMatch(key);
			match.setDrivers(this.groups[key]);
			match.race();
			
			this.groupHeats[key] = match.heats;
			this.groupMatches[key] = match;

		}

		var finalEvent = [];
		var longest = 0;

		for (var i in this.groupHeats) {
			if (this.groupHeats[i].length > longest) {
				longest = this.groupHeats[i].length;
			}
		}

		//console.log(longest);
		for (var i = 0; i < longest; i++) {
			
			for (var key in this.groupHeats) {
				if (typeof this.groupHeats[key][i] === 'undefined') {
					continue;
				}
				//console.log(this.groupMatches[key].getHeatDrivers(i, true));
				finalEvent.push({
					heat: key+'-'+(i+1),
					drivers: this.groupMatches[key].getHeatDrivers(i, false),
				});
				// finalEvent[key+"-"+(i+1)] = [
				// 	this.groupHeats[key][i],
				// 	this.groupMatches[key].getHeatDrivers(i, true),
				// 	this.groupMatches[key].getHeatDrivers(i, false),
				// ];
			}
		}
		
		//console.log(this.groupMatches);
		//console.log(this.groupHeats);
		//console.log(finalEvent);

		return finalEvent;
	}

	this.splitRacers = function() {
		var groups = {};

		this.drivers.forEach(function(driver){
			if (typeof groups[driver.group] === 'undefined') {
				groups[driver.group] = [];
			}

			groups[driver.group].push(driver);
			//console.log('pushes driver '+driver.number+' to group '+driver.group);
		})


		this.groups = groups;
	}
}