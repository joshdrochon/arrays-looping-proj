

$(document).ready(function(){

  $("form#form1").submit(function(event){
    event.preventDefault();

    var inputNum = parseInt($("#input-num").val());

    var numbers = [0,1,2,3,4,5,6,7,8,9,
                  10,11,12,13,14,15,16,17,18,19,
                 	20,21,22,23,24,25,26,27,28,29,
                  30,31,32,33,34,35,36,37,38,39,
                  40,41,42,43,44,45,46,47,48,49,50];

    var badLuck = "Sorry, Jenkins, no dice!";
    var beep = "beep";
    var boop = "boop";

    function modifier(){

      if(i % 3 === 0){
        $(".result").append("<li>" + badLuck + "</li>");
        //console.log(badLuck);
      }else if(i === 1 || i >= 10 && i <= 19 || i === 31 || i === 41){
        $(".result").append("<li>" + beep + "</li>");
        //console.log(beep);
      }else if(i === 20 || i === 40 || i === 50){
        $(".result").append("<li>" + boop + "</li>");
        //console.log(boop);
      }else{
        $(".result").append("<li>" + i + "</li>");
        //console.log(i);
      }
    }// end modifier

    for (i = 1 ; i <= inputNum; i++){
			modifier();
		};

    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();

  }); //end submit handleer

  $("#restart").click(function(event){
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });

}); //end doc ready handler
