/**
*	@filename	ChestMania.js
*	@author		kolton
*	@desc		Open chests in configured areas
*/

function ChestMania() {
	var prop, i;
	Town.doChores();

	for (prop in Config.ChestMania) {
		if (Config.ChestMania.hasOwnProperty(prop)) {
			for (i = 0; i < Config.ChestMania[prop].length; i += 1) {
				if(Config.ChestMania[prop][i] == 79) {
					countCampfires();
				}
				Pather.journeyTo(Config.ChestMania[prop][i]);
				Precast.doPrecast(i == 0 ? true : false);
				Misc.openChestsInArea(Config.ChestMania[prop][i]);
			}
			Town.doChores();
		}
	}
	return true;
}

function countCampfires() {
	if(getArea().id != 75) {
		Pather.journeyTo(75);
	}
	var countCampfires = 0;
	var presetUnits = getPresetUnits(79, 2);
	for (var i = 0; i < presetUnits.length; i++) {
		if(presetUnits[i].id == 160) {
			countCampfires++;
		}
	}
	say("There are " + countCampfires + " campfire(s) in Lower Kurast.");
	return true;
}