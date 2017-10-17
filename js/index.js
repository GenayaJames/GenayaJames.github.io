function main() {
	
	rightSide();

	function rightSide() {
		var content = '<div id=\"info\" class=\"rightSide\"><h2>About Us</h2><div class=\"clear\"></div><div id=\"houseIMG\"></div><div id=\"address\"><p><span class=\"bold\">Address: </span><a href=\"https://www.google.com/maps/place/3745+Willett+Ave,+Bronx,+NY+10467/@40.883136,-73.8671797,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2f33d8f414921:0x8dd28dea0c0a368d!8m2!3d40.883136!4d-73.864991\">3745 Willett Ave, Bronx, NY, 10467</a></p><p><span class=\"bold\">Office Phone: </span><a id=\"number\" href=\"tel:718-519-6170\">(718) 519-6170</a></p><p><span class=\"bold\">Business Days: </span>Monday - Friday</p><p><span class=\"bold\">Business Hours: </span>7:00AM - 6:30PM</p></div></div>';

		content+='<div id="events" class="rightSide"><h2>Upcoming Events</h2><div class="clear"></div><div class="event"><dl>';

		var events_array = [["Monday, August 28, 2017","School will be closed until Friday, September 1, 2017"],
		["Tuesday, August 29, 2017","Permission slips for the trip to the zoo are due."],
		["Monday, September 04, 2017","Labor Day - School will be closed"],
		["Monday, September 05, 2017","School is in session"],
		["Monday, September 11, 2017","Patriot Day"],
		["Friday, September 15, 2017","National POW/MIA Recognition Day"]];

		var events_length = events_array.length;

		for(var i = 0; i < events_length; i++) {
			content += '<dt class=\"bold\">'+events_array[i][0]+'</dt><dd>'+events_array[i][1]+'</dd>';
		}

            
          content += '</dl></div></div><div class="rightSide"></div>';


		document.getElementById("right").innerHTML = content;
	}

}





if(document.readyState!="loading") main();
else if (document.addEventListener) document.addEventListener("DOMContentLoaded", main);
else document.attachEvent("onreadystatechange", function(){
	if(document.readyState=="complete") main();
})