function main() {
	var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
	var memory_values = [];
	var memory_tile_ids = [];
	var tiles_flipped = 0;
		
	Array.prototype.shuffle = function(){
    	var i = this.length;
    	var j;
    	var temp;
    	while(--i > 0){
        	j = Math.floor(Math.random() * (i+1));
        	temp = this[j];
        	this[j] = this[i];
        	this[i] = temp;
    	}
    }

    function newBoard(){
		tiles_flipped = 0;
		var output = '';
    	memory_array.shuffle();
	}

	newBoard();

	var card_contents = document.getElementsByClassName("card");

	for(var cn = 0; cn < card_contents.length; cn++) {
		document.getElementById("card_"+cn).onclick = function() {
			if(this.id.length === 6) {
				flipOver(this, memory_array[this.id[5]]);
			} else {
				flipOver(this, memory_array[this.id.slice(5,7)])
			}
		}
	}

	function flipOver(card, content) {
		if(card.innerHTML == "" && memory_values.length < 2) {
			card.innerHTML = content;
			card.style.background = "white";
			if(memory_values.length == 0) {
				memory_values.push(content);
				memory_tile_ids.push(card.id);
			} else if (memory_values.length == 1) {
				memory_values.push(content);
				memory_tile_ids.push(card.id);
				if(memory_values[0] == memory_values[1]) {
					var card_1 = document.getElementById(memory_tile_ids[0]);
					var card_2 = document.getElementById(memory_tile_ids[1]);
					card_1.style.background = 'gray';
					card_2.style.background = 'gray';
					tiles_flipped +=2;
					memory_values = [];
					memory_tile_ids = [];

				} else {
					setTimeout(flipAgain, 800);
				}
			}
		}
	}

	function flipAgain() {
		var o_card_1 = document.getElementById(memory_tile_ids[0]);
		var o_card_2 = document.getElementById(memory_tile_ids[1]);
		o_card_1.innerHTML = "";
		o_card_1.style.background = 'blue';
        o_card_2.innerHTML = "";
        o_card_2.style.background = 'blue';   
        memory_values = [];        
        memory_tile_ids = [];
	}

	
	/*function memoryFlipTile(tile,val){
	if(tile.innerHTML == "" && memory_values.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if(memory_values[0] == memory_values[1]){
				var c_tile_1 = document.getElementById(memory_tile_ids[0]);
				var c_tile_2 = document.getElementById(memory_tile_ids[1]);
				c_tile_1.style.background = 'gray';
				c_tile_2.style.background = 'gray';
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            	memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array.length){
					alert("Board cleared... generating new board");
					document.getElementById('memory_board').innerHTML = "";
					newBoard();
				}
			} else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
				    tile_1.style.background = 'blue';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'blue';
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            	    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}*/

}


// in case the document is already rendered
if (document.readyState!="loading") main();
// modern browsers
else if (document.addEventListener) document.addEventListener("DOMContentLoaded", main);
// IE <= 8
else document.attachEvent("onreadystatechange", function(){
    if (document.readyState=='complete') main();
});

