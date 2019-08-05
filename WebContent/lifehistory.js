/**
 * 
 */
function init() {
	var index = 0;
	var key;
	var value;
	var valueArray = [];
	var aListItem;
	for(var index = 0; key = window.localStorage.key(index); index++ ) {
		if(key != null) {
			value = window.localStorage.getItem(key);
			if(value != null){
				valueArray = value.split("|||");
				if(valueArray != null && valueArray.length != 0){
					aListItem = makeHistoryLiElement(valueArray);
					appendLiNodeToHistoryList(aListItem);
				}
			}
		} else {
			break;
		}
	}
}

function registerHistory(){
	console.log("register button clicked!!");
	// get history data values from the form
	var historyData = [];
	historyData[0] = document.getElementById("dateTimeInput").value;
	historyData[1] = document.getElementById("locationInput").value;
	historyData[2] = document.getElementById("eventInput").value;
	historyData[3] = document.getElementById("companiesInput").value;
	historyData[4] = document.getElementById("detailInput").value;
	// make history <li> elements
	var listItem = makeHistoryLiElement(historyData)
	// store to localStorage
	var uuidKey = uuidv4();
	console.log("key : [" + uuidKey + "]");
	window.localStorage.setItem(uuidKey, historyData.join("|||"));
	// append to history list
	appendLiNodeToHistoryList(listItem);
}

function appendLiNodeToHistoryList(aNode){
	document.getElementById("registeredHistories").appendChild(aNode);
}
function makeHistoryLiElement(dataArray){
	// make history <li> elements
	var liNode = document.createElement("LI");
	var datum;
	for(datum of dataArray){
		var spanNode = document.createElement("SPAN");
		var textNode = document.createTextNode(datum);
		spanNode.appendChild(textNode);
		liNode.appendChild(spanNode);
	}
	return liNode;	
}

function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}
