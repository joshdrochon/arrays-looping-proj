

$(document).ready(function(){

  $("form#form1").submit(function(event){
    event.preventDefault();

    var inputNum = parseInt(prompt("enter a number between 0 & 20"));

    var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

      for(i=0; i <= inputNum; i++){
        console.log(numbers[i]);
      };

  });

});
