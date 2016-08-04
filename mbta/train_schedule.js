function getSchedule () { //this function is invalid, I was just trying to visualize how to code the scheduling on a
	//separate, cleaner file.

	request.open("GET", "https://powerful-depths-66091.herokuapp.com/redline.json", true);

	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			rawData = request.responseText;
			scheduleData = JSON.parse(rawData);
			elem = document.getElementById(""); //im trying to edit an infowindow, not an element
		}
	}
}
//i still can't figure out pass in the name of the station you click on so that you can send back the correct schedule