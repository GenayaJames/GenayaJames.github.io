function main() {
	var larrays = ["about", "games", "contact_us", "schedule"];
	var events_array = [
	  {
		  date: "Monday, January 15, 2018", 
		  event: "Martin Luther King Day - Closed"
		},
		{
		  date: "Monday, February 19, 2018", 
		  event: "President's Day - Closed"
		},
		{
		  date: "Friday, March 30, 2018", 
		   event: "Good Friday - Closed"
		},
		{
		  date: "Monday, May 28, 2018", 
		  event: "Memorial Day - Closed"
		}
	];

	init();

	function init() {
		rightSide();
		for(var i = 0; i < larrays.length; i++) {
		  idHeaders(larrays[i]);
	  }
	}	

	function rightSide() {
		var content = '<div id=\"info\" class=\"rightSide\"><h2>About Us</h2><div class=\"clear\"></div><div id=\"houseIMG\"></div><div id=\"address\"><p><span class=\"bold\">Address: </span><a href=\"https://www.google.com/maps/place/3745+Willett+Ave,+Bronx,+NY+10467/@40.883136,-73.8671797,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2f33d8f414921:0x8dd28dea0c0a368d!8m2!3d40.883136!4d-73.864991\">3745 Willett Ave, Bronx, NY, 10467</a></p><p><span class=\"bold\">Office Phone: </span><a id=\"number\" href=\"tel:718-519-6170\">(718) 519-6170</a></p><p><span class=\"bold\">Business Days: </span>Monday - Friday</p><p><span class=\"bold\">Business Hours: </span>7:00AM - 6:30PM</p></div></div>';
		content+='<div id="events" class="rightSide"><h2>Upcoming Events</h2><div class="clear"></div><div class="event"><dl>';
		for(var i = 0; i < events_array.length; i++) {
			content += '<dt class=\"bold\">'+events_array[i].date+'</dt><dd>'+events_array[i].event+'</dd>';
		}           
    content += '</dl></div></div><div class="rightSide"></div>';
		document.getElementById("right").innerHTML = content;
	}	

	function idHeaders(label) {
		if(document.getElementById(label+"InfoHeader")!=null) {
			var lbl = '';
			for(var i = 0; i < label.length; i++) {
				if(label[i] == "_") {
					lbl += '<p>&nbsp;</p>';
				}
				else {
					lbl += '<p>'+label[i]+'</p>';
				}			
			}
			document.getElementById(label+"InfoHeader").innerHTML = lbl;
		}		
	}	
}

if(document.readyState!="loading") main();
else if (document.addEventListener) document.addEventListener("DOMContentLoaded", main);
else document.attachEvent("onreadystatechange", function(){
	if(document.readyState=="complete") main();
})