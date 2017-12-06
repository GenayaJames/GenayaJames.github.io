function main() {

	var d = document;
	var all = 0;
		
	function makeTable(month, year, start, end, monthNum) {
		var content = '';
		var count = 1;
		var i, j, k;

		content += '<table id=\"' +month.toLowerCase()+ '\" class=\"innertable\"><tr><th colspan=\"7\">' + month + ' ' + year + '</th></tr><tr class=\"days\">';

		for(i = 0; i < day_array.length; i++) {
			content += '<td>' + day_array[i] + '</td>';
		}

		for (j = 0; j < 6; j++) {
			content += '<tr>';

			for (k = 0; k < 7; k++) {
				if (start > 0) {
					content += '<td></td>';
					start--;
				}else {
					if(count <= end) {
						content += '<td id=\"'+monthNum+count+year+'\">'+count+'</td>';
						count++;
					}
					else {
						if(k == 0) {
							content += '<td><span class="invisible">0</span></td>';
						}
						else {
							content += '<td></td>';
						}
						
					}
				}
				
				
			}

			content += '</tr>';
		}

		content+= '</tr>';

		content+='</table>';

		d.getElementById("calendar_"+year).innerHTML += content;

		all++;

		if( all == 24) {
			var e1, e2, e3;
			for(e1 = 28; e1 < 32; e1++) {
				addEvent("8"+e1+"2017", "M828F901", e1);
			}

			for(e2 = 23; e2 < 25; e2++) {
				addEvent("11"+e2+"2017", "T1123F1124", e2);
			}

			var id_array = ["912017", "942017", "1092017", "11102017", "1152018", "2192018", "3302018", "5282018"];
			var id2_array = ["M828F901", "M904", "M1009", "F1110", "M115", "M219", "F330", "M528"];
			var id_day_array = [1, 4, 9, 10, 15, 19, 30, 28];
			var id_array_length = id_array.length;
			
			for(e3 = 0; e3 < id_array_length; e3++) {
				addEvent(id_array[e3], id2_array[e3], id_day_array[e3]);
			}
		}


	}



	function addEvent(id_name, ref_name, day) {
		d.getElementById(id_name).innerHTML = '<a class=\"eventAdded\">'+day+'</a>';
	}


	function makeEvent(id_name, d_event, e_descrip) {
		var node = d.createElement("DIV");
		node.id = id_name;
		node.className = "allEvents";

		var node2 = d.createElement("DIV");
		node2.className = "pencil_icon";

		node.appendChild(node2);

		var node3 = d.createElement("H2");
		var node3x = d.createTextNode(d_event);
		node3.appendChild(node3x);
		node.appendChild(node3);

		var node4 = d.createElement("P");
		var node4x = d.createTextNode(e_descrip);
		node4.appendChild(node4x);
		node.appendChild(node4);

	    d.getElementById("eventInfo").insertBefore(node, d.getElementById("pencil_end"));
	}

	var m1_array = [["M828F901", "Monday, August 28, 2017", "Closed until Friday, September 1, 2017"], ["M904","Monday, September 4, 2017", "Labor Day - Closed"],["M1009", "Monday, October 9, 2017", "Columbus Day  - Closed"], ["F1110", "Friday, November 10, 2017", "Veterans Day  - Closed"], ["T1123F1124", "Thursday, November 23 - Friday, November 24, 2017", "Thanksgiving  - Closed"], ["M115", "Monday, January 15, 2018", "Martin Luther King Day - Closed"], ["M219", "Monday, February 19, 2018", "President's Day - Closed"], ["F330", "Friday, March 30, 2018", "Good Friday - Closed"], ["M528", "Monday, May 28, 2018", "Memorial Day - Closed"]];
	var m1;
	var m1_length = m1_array.length;

	for(m1 = 0; m1 < m1_length; m1++) {
		makeEvent(m1_array[m1][0], m1_array[m1][1], m1_array[m1][2]);
	} 



	

	var month_array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var day_array = ["S", "M", "T", "W", "T", "F", "S"];

	// Created calendar 2017

	var start2017_array = [0,3,3,6,1,4,6,2,5,0,3,5];
	var end_array = [31,28,31,30,31,30,31,31,30,31,30,31];
	var cal;
	var monthsarraylength = month_array.length;

	for (cal = 0; cal < monthsarraylength; cal++) {
		makeTable(month_array[cal], 2017, start2017_array[cal], end_array[cal],cal+1);
	}

	//End of calendar 2017

	// Created calendar 2018

	var start2018_array = [1,4,4,0,2,5,0,3,6,1,4,6];

	for (cal = 0; cal < monthsarraylength; cal++) {
		makeTable(month_array[cal], 2018, start2018_array[cal], end_array[cal],cal+1);
	}

	//End of calendar 2018
	

	function viewCalendar(year) {
		var viewCal = d.getElementById("button"+year);		

		if(viewCal.addEventListener) {
			viewCal.addEventListener("click", function(){calendarView(year);},false);
		}
		else if(viewCal.attachEvent) {
			viewCal.attachEvent("onclick", function(){calendarView(year);},false);
		}
	}

	function calendarView(year) {
		var i;
		var calendars = d.querySelectorAll(".calendar");
		var calendarlength = calendars.length;
		for(i=0; i < calendarlength; i++) {
			calendars[i].style.display = "none";
		}
		d.getElementById("calendar_"+year).style.display = "block";
	}

	viewCalendar(2017);
	viewCalendar(2018);	

	
	function eventHeader(year1, year2) {
		var lbl = '';
		var i;

		for(i = 0; i < year1.length; i++) {
			lbl += '<p>'+year1[i]+'</p>';			
		}

		lbl += '<p>&nbsp;</p><p>&darr;</p><p>&nbsp;</p>';

		for(i = 0; i < year2.length; i++) {
			lbl += '<p>'+year2[i]+'</p>';			
		}


		d.getElementById("eventInfoHeader").innerHTML += lbl;
	}

	eventHeader("2017", "2018");

	
}






if(document.readyState!="loading") main();
else if (document.addEventListener) document.addEventListener("DOMContentLoaded", main);
else document.attachEvent("onreadystatechange", function(){
	if(document.readyState=="complete") main();
})