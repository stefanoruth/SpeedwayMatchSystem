var RaceDriver = require('./RaceDriver.js');

module.exports = function(group) {
	this.group = (group = typeof group !== 'undefined' ? group : null);
	this.drivers = [];
	this.lanes = 4;
	this.heats = [];

	this.setDrivers = function(drivers) {

		if (typeof drivers === 'number') {
			for (var i = 0; i <= drivers - 1; i++) {
				this.drivers[i] = new RaceDriver(i);
			}
		} else if (typeof drivers === 'object') {
			if (drivers.length < 4) {
				for (var i = drivers.length; i < 4; i++) {
					drivers[i] = new RaceDriver;
				}
			}
			this.drivers = drivers;
		}

		return this;
	}

	this.race = function() {
		for (var heat = 0; heat <= this.drivers.length - 1; heat++) {
			this.heats[heat] = new Array(4);

			for (var driver = 0; driver <= this.drivers.length - 1; driver++) {
				if (this.setStartPosition1(heat, driver)) {
					this.heats[heat][0] = driver + 1;
				}
				else if (this.setStartPosition2(heat, driver)) {
					this.heats[heat][1] = driver + 1;
				}
				else if (this.setStartPosition3(heat, driver)) {
					this.heats[heat][2] = driver + 1;
				}
				else if (this.setStartPosition4(heat, driver)) {
					this.heats[heat][3] = driver + 1;
				}
			};

			// Replace empty slots.
			for (var i = 0; i < 4; i++) {
				if (typeof this.heats[heat][i] === 'undefined') {
					this.heats[heat][i] = null;
				}
			}
		}

		return this.heats;
	}

	this.setStartPosition1 = function(heat, driver) {
		if (driver == heat) {
			return true;
		}
		return false;
	}

	this.setStartPosition2 = function(heat, driver) {
		if ((driver == heat - 1) || (heat == 0 && driver + 1 == this.drivers.length)) {
			return true;
		}
		return false;
	}

	this.setStartPosition3 = function(heat, driver) {
		if (this.calcPositionOffset(heat, driver, 3)) {
			return true;
		}
		return false;
	}

	this.setStartPosition4 = function(heat, driver) {
		if (this.drivers.length <= 5 && this.calcPositionOffset(heat, driver, 2)) {
			return true;
		}
		// Drivers == 6
		else if (this.drivers.length == 6 && this.calcPositionOffset(heat, driver, 5)) {
			return true;
		}

		// Drivers >= 7
		else if (this.drivers.length >= 7 && this.calcPositionOffset(heat, driver, 6)) {
			return true;
		}
		return false;
	}

	this.calcPositionOffset = function(heat, driver, offset) {
		if ((driver + offset == heat) || (heat <= offset && (this.drivers.length - offset + heat == driver))) {
			return true;
		}
		return false;
	}

	this.getDriver = function(id) {
		if (this.drivers[id-1]) {
			return this.drivers[id-1].setId(id);
		}
		return;
	}

	this.getHeatDrivers = function(heatId) {
		var heat = this.heats[heatId];
		
		return [
			this.getDriver(heat[0]).number,
			this.getDriver(heat[1]).number,
			this.getDriver(heat[2]).number,
			this.getDriver(heat[3]).number,
		];
	}
}