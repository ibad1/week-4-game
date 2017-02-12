
var wins = 0;
var losses = 0;
var score = 0;
var crystalValue = [];
var btn = 0;



$(document).ready(function() {



	function randNum(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}	


	var target = randNum(19, 120);
	
	$('#myNumber').append(target);


	for (var i = 0; i <= 3; i++) {
		crystalValue[i] = randNum(1, 12);
		
	}	


	$('#btn1').click(function(result) {
		var btn = crystalValue[0];
		score += btn;
		$('#currentScore').html(score);
		
		
		
	});


	$('#btn2').click(function(result) {
		var btn = crystalValue[1];
		score += btn;
		$('#currentScore').html(score);
	
		
		
	});

	$('#btn3').click(function(result) {
		var btn = crystalValue[2];
		score += btn;
		$('#currentScore').html(score);


	});


	$('#btn4').click(function(result) {
		var btn = crystalValue[3];
		score += btn;
		$('#currentScore').html(score);

		

	});
	console.log(target);
	console.log(score);
	console.log (crystalValue);

	var test = parseInt($('#currentScore'))
	console.log (test);
	if (target == score) {
		wins++
		$("#winCount").append(wins);
	}
	else if (target < score){
		losses++
		$("#lossCount").append(losses);
	}


}); 

