

$(document).ready(function(){

  $("form#form1").submit(function(event){
    event.preventDefault();

    var inputNum = parseInt(prompt("enter a number between 1 & 20"));

    var numbers = [1,2,3,4,5,6,7,8,9,10,
                  11,12,13,14,15,16,17,18,19,20]; //literal syntax recommended to make arrays
                  //21,22,23,24,25,26,27,28,29,30,
                  //31,32,33,34,35,36,37,38,39,30,
                  //41,42,43,44,45,46,47,48,49,50

          function modifier(){

          	if(numbers[i] % 3 === 0){
            	console.log("I'm sorry, Dave!");
          	}else if(numbers[i] === 1 || numbers[i] >= 10 && numbers[i] <= 19){
          		console.log("Boop");
            }else if(numbers[i] === 20){
              console.log("Beep");
            }else{
              console.log(i);
            }
        	}// end modifier

          for(i=0; i <= inputNum; i++){
						modifier();
					}; //end for loop


  }); //end submit handleer
}); //end doc ready handler

Final output: 1: "Beep"
              2: 2
              3: "Sorry, Charlie"
              4: 4
              5: 5
              6: "Sorry, Charlie"
              7: 7
              8: 8
              9: "Sorry, Charlie"
              10: "Beep"
              11: "Beep"
              12: "Sorry, Charlie"
              13: "Beep"
              14: "Beep"
              15: "Sorry, Charlie"
              16: "Beep"
              17: "Beep"
              18: "Sorry, Charlie"
              19: "Beep"
              20: "Boop"
