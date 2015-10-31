<?php
require __DIR__ . '/vendor/autoload.php';
$race = new SpeedwayRace();
$heats = $race->race(6);
?>

<table border="1px" style="text-align:center;float:left;margin-right:50px;">
	<thead>
		<tr>
			<th colspan="5">Dynamic Drivers: <?= count($heats) ?></th>
		</tr>
		<tr>
			<th>Heat</th>
			<th>Bane 1</th>
			<th>Bane 2</th>
			<th>Bane 3</th>
			<th>Bane 4</th>
		</tr>
	</thead>
	<tbody>
		<?php foreach($heats as $key => $heat): ?>
			<tr>
				<td><b><?= $key ?></b></td>
				<?php foreach($heat as $lane): ?>
					<td><?= $lane ?></td>
				<?php endforeach; ?>
			</tr>
		<?php endforeach; ?>
	</tbody>
</table>
<table border="1px" style="text-align:center;float:left;margin-right:50px;">
	<thead>
		<tr>
			<th colspan="<?= count($race->drivers)+1 ?>">Dynamic Drivers: <?= count($race->drivers) ?></th>
		</tr>
		<tr>
			<th><b>#</b></th>
		<?php foreach($race->drivers as $driver): ?>
			<th><?= $driver ?></th>
		<?php endforeach; ?>
		</tr>
	</thead>
	<tbody>
		<?php foreach($race->drivers as $driver): ?>
			<tr>
				<td><b><?= $driver ?><b></td>
				<?php
					
					foreach ($race->drivers as $mK => $mDriver) {
						$meets = 0;

						foreach ($heats as $i => $heat) {
							if (in_array($mDriver, $heat) && in_array($driver, $heat)) {
								$meets++;
							}
						}

						echo "<td style='padding:5px;'>".$meets."</td>";
					}

					
				?>
			</tr>
		<?php endforeach; ?>
	</tbody>
</table>
<div style="clear:both;"></div>