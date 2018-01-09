function main() {
	var all = 0;
	var m1_array = [
	  ["M828F901", "Monday, August 28, 2017", "Closed until Friday, September 1, 2017"], 
	  ["M904","Monday, September 4, 2017", "Labor Day - Closed"],
	  ["M1009", "Monday, October 9, 2017", "Columbus Day  - Closed"], 
	  ["F1110", "Friday, November 10, 2017", "Veterans Day  - Closed"], 
	  ["T1123F1124", "Thursday, November 23 - Friday, November 24, 2017", "Thanksgiving  - Closed"], 
	  ["M115", "Monday, January 15, 2018", "Martin Luther King Day - Closed"], 
	  ["M219", "Monday, February 19, 2018", "President's Day - Closed"], 
	  ["F330", "Friday, March 30, 2018", "Good Friday - Closed"], 
	  ["M528", "Monday, May 28, 2018", "Memorial Day - Closed"]
	];
	var month_array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var day_array = ["S", "M", "T", "W", "T", "F", "S"];
	var start2017_array = [0,3,3,6,1,4,6,2,5,0,3,5];
	var start2018_array = [1,4,4,0,2,5,0,3,6,1,4,6];
	var end_array = [31,28,31,30,31,30,31,31,30,31,30,31];
	var id_array = ["912017", "942017", "1092017", "11102017", "1152018", "2192018", "3302018", "5282018"];
	var id2_array = ["M828F901", "M904", "M1009", "F1110", "M115", "M219", "F330", "M528"];
	var id_day_array = [1, 4, 9, 10, 15, 19, 30, 28];

	init();

	function init() {
		for(var m1 = 0; m1 < m1_array.length; m1++) {
		  makeEvent(m1_array[m1][0], m1_array[m1][1], m1_array[m1][2]);
	  }
	  createCalendar(2017, start2017_array);
    createCalendar(2018, start2018_array);
    viewCalendar(2017);
	  viewCalendar(2018);
	  eventHeader("2017", "2018");
	  scrollTo();	  
	}

	function scrollTo() {
		for(var i = 28; i < 32; i++) {
		  goToThatSpot("#8"+i+"2017", "#M828F901");
	  }
	  for(var i = 23; i < 25; i++) {
		  goToThatSpot("#11"+i+"2017", "#T1123F1124");
	  }			
	  for(var i = 0; i < id_array.length; i++) {
		  goToThatSpot("#"+id_array[i], "#"+id2_array[i]);
	  }
	}
		
	function makeTable(month, year, start, end, monthNum) {
		var content = '<table id=\"' +month.toLowerCase()+ '\" class=\"innertable\"><tr><th colspan=\"7\">' + month + ' ' + year + '</th></tr><tr class=\"days\">';
		for(var i = 0; i < day_array.length; i++) {
			content += '<td>' + day_array[i] + '</td>';
		}
		content+= tableId(monthNum, year, start, end);
		content+= '</tr></table>';
		document.getElementById("calendar_"+year).innerHTML += content;
		all++;	
		if(all === 24) {
			putEventsOnTable();
		}	
	}

	function tableId(monthNum, year, start, end) {
		var count = 1;
		var content = "";
		for (var i = 0; i < 6; i++) {
			content += '<tr>';
			for (var j = 0; j < 7; j++) {
				if (start > 0) {
					content += '<td></td>';
					start--;
				}else {
					if(count <= end) {
						content += '<td id=\"'+monthNum+count+year+'\">'+count+'</td>';
						count++;
					}
					else {
						if(j == 0) {
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
		return content;
	}

  function putEventsOnTable() {
		for(var i = 28; i < 32; i++) {
			addEvent("8"+i+"2017", "M828F901", i);
		}
		for(var i = 23; i < 25; i++) {
			addEvent("11"+i+"2017", "T1123F1124", i);
		}			
		for(var i = 0; i < id_array.length; i++) {
			addEvent(id_array[i], id2_array[i], id_day_array[i]);
		}		
  }

	function addEvent(id_name, ref_name, day) {
		document.getElementById(id_name).innerHTML = '<a class=\"eventAdded\">'+day+'</a>';
	}

	function makeEvent(id_name, d_event, e_descrip) {
		var node = document.createElement("DIV");
		node.id = id_name;
		node.className = "allEvents";
		var node2 = document.createElement("DIV");
		node2.className = "pencil_icon";
		node.appendChild(node2);
		var node3 = document.createElement("H2");
		var node3x = document.createTextNode(d_event);
		node3.appendChild(node3x);
		node.appendChild(node3);
		var node4 = document.createElement("P");
		var node4x = document.createTextNode(e_descrip);				
		node4.appendChild(node4x);
		node.appendChild(node4);
	  document.getElementById("eventInfo").insertBefore(node, document.getElementById("pencil_end"));
	}	

	function createCalendar(year, array) {
		for (var cal = 0; cal < month_array.length; cal++) {
		  makeTable(month_array[cal], year, array[cal], end_array[cal],cal+1);
	  }
	}	

	function viewCalendar(year) {
		var viewCal = document.getElementById("button"+year);	
		if(viewCal.addEventListener) {
			viewCal.addEventListener("click", function(){calendarView(year);},false);
		}
		else if(viewCal.attachEvent) {
			viewCal.attachEvent("onclick", function(){calendarView(year);},false);
		}
	}

	function calendarView(year) {
		var calendars = document.querySelectorAll(".calendar");
		for(var i = 0; i < calendars.length; i++) {
			calendars[i].style.display = "none";
		}
		document.getElementById("calendar_"+year).style.display = "block";
	}
	
	function eventHeader(year1, year2) {
		var lbl = '';
		for(var i = 0; i < year1.length; i++) {
			lbl += '<p>'+year1[i]+'</p>';			
		}
		lbl += '<p>&nbsp;</p><p>&darr;</p><p>&nbsp;</p>';
		for(var i = 0; i < year2.length; i++) {
			lbl += '<p>'+year2[i]+'</p>';			
		}
		document.getElementById("eventInfoHeader").innerHTML += lbl;
	}

	function goToThatSpot(spot1, spot2) {
		$(spot1).on('click', function(){
			var loc = spot2;
    		$('html, body').animate({
        		scrollTop: $(loc).offset().top
    		}, 1000);
		});
	}	
}

if(document.readyState!="loading") main();
else if (document.addEventListener) document.addEventListener("DOMContentLoaded", main);
else document.attachEvent("onreadystatechange", function(){
	if(document.readyState=="complete") main();
})