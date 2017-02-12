var score;
var min=19;
var max=120;
var win=0;
var lose=0;
var total=0;
var crystals = [];
var random = Math.floor(Math.random()*(max - min + 1)) + min;
$("#myNumber").html(random);


for (var i=0; i<4; i++){
	crystals[i]={
		points:10
	}
	AssignValue(crystals[i])
}

var count=0;
$(".buttons").each(function(){
	var btn= $(this);
	btn.attr("data-crystal", count);
	btn.on("click", function()
		{
			var clickedBtn = $(this);
			var crystalIndex = clickedBtn.attr("data-crystal");
			total=total+crystals[crystalIndex].points;
			$("#currentScore").html(total);
			if (total === random){
			win++;
			$("#winCount").html(win);
			ResetGame();
			}
			else if (total>random) {
			lose++
			$("#lossCount").html(lose);
			ResetGame();
			}

		});
	count++;
});

function AssignValue(crystal){
	var min=1;
	var max=12;
	crystal.points = Math.floor(Math.random()*(max-min+1))+min;

}
function ResetGame(){
	total=0;
	$("#addpoints").html(total);
	random=Math.floor(Math.random()*(max-min+1))+min;
	$("#randomnumber").html(random);
	for (var i=0; i<crystals.length; i++)
	{
		AssignValue(crystals[i])
	}

}
