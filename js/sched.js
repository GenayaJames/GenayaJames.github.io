$(document).ready(function(){
	
	function goToThatSpot(spot1, spot2) {
		$(spot1).on('click', function(){
			var loc = spot2;
    		$('html, body').animate({
        		scrollTop: $(loc).offset().top
    		}, 1000);
		});
	}

	var e1, e2, e3;

	for(e1 = 28; e1 < 32; e1++) {
		goToThatSpot("#8"+e1+"2017", "#M828F901");
	}

	for(e2 = 23; e2 < 25; e2++) {
		goToThatSpot("#11"+e2+"2017", "#T1123F1124");
	}

	var id_array = ["#912017", "#942017", "#1092017", "#11102017", "#1152018", "#2192018", "#3302018", "#5282018"];
	var id2_array = ["#M828F901", "#M904", "#M1009", "#F1110", "#M115", "#M219", "#F330", "#M528"];
	var id_array_length = id_array.length;
			
	for(e3 = 0; e3 < id_array_length; e3++) {
		goToThatSpot(id_array[e3], id2_array[e3]);
	}


});