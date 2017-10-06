function main() {

	var all = 0;
		
	function makeTable(month, year, start, end, monthNum) {
		var content = '';
		var count = 1;

		content += '<table id=\"' +month.toLowerCase()+ '\" class=\"innertable\"><tr><th colspan=\"7\">' + month + ' ' + year + '</th></tr><tr class=\"days\">';

		for(var i = 0; i < day_array.length; i++) {
			content += '<td>' + day_array[i] + '</td>';
		}

		for (var j = 0; j < 6; j++) {
			content += '<tr>';

			for (var k = 0; k < 7; k++) {
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

		document.getElementById("yearlyCalendar").innerHTML += content;

		all++;

		if( all % 12 == 0) {
			for(var e1 = 28; e1 < 32; e1++) {
				addEvent("8"+e1+"2017", "M828F901", e1);
			}
			
			addEvent("912017", "M828F901", 1);
			addEvent("942017", "M904", 4);
			addEvent("1092017", "M1009", 9);
			addEvent("11102017", "F1110", 10);
		}


	}



	function addEvent(id_name, ref_name, day) {
		document.getElementById(id_name).innerHTML = '<a href=\"#'+ref_name+'\" class=\"eventAdded\">'+day+'</a>';
	}

	 



	// Created calendar 2017

	var month_array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var day_array = ["S", "M", "T", "W", "T", "F", "S"];
	var start_array = [0,3,3,6,1,4,6,2,5,0,3,5,];
	var end_array = [31,28,31,30,31,30,31,31,30,31,30,31,];

	for (var cal = 0; cal < 12; cal++) {
		makeTable(month_array[cal], 2017, start_array[cal], end_array[cal],cal+1);
	}

	//End of calendar 2017

	
}






if(document.readyState!="loading") main();
else if (document.addEventListener) document.addEventListener("DOMContentLoaded", main);
else document.attachEvent("onreadystatechange", function(){
	if(document.readyState=="complete") main();
})