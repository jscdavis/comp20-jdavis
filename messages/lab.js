request = new XMLHttpRequest();

request.open("GET", "data.json", true);

request.onreadystatechange = callme;

request.send();

		function callme () {
			if (request.readyState == 4 && request.status == 200) {
				raw = request.responseText;
				parsedData = JSON.parse(raw);
				document.getElementById("messages").innerHTML = parsedData[0].content + " " + "<h2>" + parsedData[0].username + "<br>" + "</h2>"
				+ parsedData[1].content + " " + "<h2>" + parsedData[1].username + "</h2>";
			}
		};