<?php

class SpeedwayRace
{
	public $drivers = [];
	public $lanes = 4;
	public $heats = [];

	public function race($drivers)
	{
		$this->drivers = range(1, $drivers);
		$this->numDrivers = count($this->drivers);


		for($i = 1; $i <= $this->numDrivers; $i++)
		{
			$this->heats[$i] = [];

			foreach ($this->drivers as $driver)
			{
				if($this->lane1($i, $driver))
					continue;

				if($this->lane2($i, $driver))
					continue;

				if($this->lane3($i, $driver))
					continue;

				if($this->lane4($i, $driver))
					continue;
			}
			ksort($this->heats[$i]);
		}


		return $this->heats;
	}

	/**
	 * Set Driver lane 1
	 * @param  int $heat
	 * @param  int $driver
	 * @return bool
	 */
	private function lane1($heat, $driver)
	{
		if($driver == $heat) {
			$this->heats[$heat][0] = $driver;
			return true;
		}
		return false;
	}

	/**
	 * Set Driver lane 2
	 * @param  int $heat
	 * @param  int $driver
	 * @return bool
	 */
	private function lane2($heat, $driver)
	{
		if ($driver == $heat-1) {
			$this->heats[$heat][1] = $driver;
			return true;
		}
		// Lane 2 && Heat 1
		elseif ($heat == 1 && $driver == $this->numDrivers) {
			$this->heats[$heat][1] = $driver;
			return true;
		}
		return false;
	}

	/**
	 * Set Driver lane 3
	 * @param  int $heat
	 * @param  int $driver
	 * @return bool
	 */
	private function lane3($heat, $driver)
	{
		if ($driver+3 == $heat) {
			$this->heats[$heat][2] = $driver;
			return true;
		}
		// Lane 3 && Heat 1-3
		elseif ($heat <= 3 && ($this->numDrivers-3+$heat == $driver)) {
			$this->heats[$heat][2] = $driver;
			return true;
		}
		return false;
	}

	/**
	 * Set Driver lane 4
	 * @param  int $heat
	 * @param  int $driver
	 * @return bool
	 */
	private function lane4($heat, $driver)
	{
		// Driver above 6 and heat below or equal 6
		if ($this->numDrivers > 6) {
			if ($driver+6 == $heat) {
				$this->heats[$heat][3] = $driver;
				return true;
			}
			elseif ($heat <= 6) {
				if (($this->numDrivers-6+$heat) == $driver) {
					$this->heats[$heat][3] = $driver;
					return true;
				}
				else {
					if ($driver-1 == $heat) {
						$this->heats[$heat][3] = $driver;
						return true;
					}
				}
			}
			
		}
		// Heat 1-6
		elseif ($this->numDrivers < 7) {
			// Drivers count over 6
			if ($this->numDrivers > 6 && ($this->numDrivers-6+$heat) == $driver) {
				$this->heats[$heat][3] = $driver;
				return true;
			}
			// Drivers count equal 6
			elseif ($this->numDrivers == 6) {
				if ($heat + 1 == $driver) {
					$this->heats[$heat][3] = $driver;
					return true;
				}
				elseif ($this->numDrivers - $heat + 1 == $driver) {
					$this->heats[$heat][3] = $driver;
					return true;
				}
				
			}
			// Drivers count below 6
			else {
				if (round($this->numDrivers / 2) + $heat <= $this->numDrivers) {
					$this->heats[$heat][3] = $driver;
					return true;
				}
				elseif (abs($this->numDrivers - (round($this->numDrivers / 2) + $heat)) == $driver) {
					$this->heats[$heat][3] = $driver;
					return true;
				}
			}
		}
		return false;
	}
}
