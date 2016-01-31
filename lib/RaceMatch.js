module.exports = function(){
	this.title = 'Speedway';
	this.drivers = [];
	this.lanes = 4;
	this.heats = new Array();

	this.setDrivers = function(count){
		for (var i = 0; i <= count - 1; i++) {
			this.drivers[i] = i;
		}

		return this;
	}

	this.race = function(){
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
		if ((driver + 3 == heat) || (heat <= 3 && (this.drivers.length - 3 + heat == driver))) {
			return true;
		}
		return false;
	}

	this.setStartPosition4 = function(heat, driver) {
		if (this.drivers.length < 7) {
			var driversMiddle = Math.round(this.drivers.length / 2);
		}

		// Drivers >= 7
		else if (this.drivers.length >= 7 && ((driver + 6 == heat) || (heat <= 6 && (this.drivers.length - 6 + heat == driver)))) {
			return true;
		}
		return false;
	}

	/*this.setStartPosition4 = function(heat, driver) {
		// Drivers 4
		if (this.drivers.length == 4) {
			//console.log(this.drivers.length / 2, heat, (Math.round(this.drivers.length / 2) + heat <= this.drivers.length), Math.abs(this.drivers.length  - (Math.round(this.drivers.length / 2) + heat)) == driver);
			if (Math.round(this.drivers.length / 2) + heat <= this.drivers.length) {
				return true;
			} else if (Math.abs(this.drivers.length  - (Math.round(this.drivers.length / 2) + heat)) == driver) {
				return true;
			}
		}

		// Drivers 5
		else if (this.drivers.length == 5) {
			if (Math.round(this.drivers.length / 2) + heat <= this.drivers.length) {
				return true;
			} else if (Math.abs(this.drivers.length  - (Math.round(this.drivers.length / 2) + heat)) == driver) {
				return true;
			}
		}

		// Drivers 6
		else if (this.drivers.length == 6) {
			if (heat + 1 == driver) {
				return true;
			} else if (this.drivers.length - heat + 1 == driver) {
				return true;
			}
		
		}

		// Drivers 7
		else if (this.drivers.length == 7 && (this.drivers.length-6+heat) == driver) {
			return true;
		
		}

		// Drivers > 7
		else {
			if (driver + 6 == heat) {
				return true;
			} else if (heat <= 5 && (((this.drivers.length - 6 + heat) == driver) || (driver - 1 == heat))) {
				return true;
			}
		}
		return false;
	}*/
}