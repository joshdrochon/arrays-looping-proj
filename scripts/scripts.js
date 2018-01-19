

$(document).ready(function(){

  $("form#form1").submit(function(event){
    event.preventDefault();

    var inputNum = parseInt(prompt("enter a number between 0 & 20"));

    var inputNum = parseInt(prompt("enter a number between 0 & 20"));

    var numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; //literal syntax recommended to make arrays

          function modifier(){

          	if(numbers[i] % 3 === 0){
            	console.log(i + ": I'm sorry, Dave!");
          	}else{
          		return false;
          	}
        	}// end modifier

          for(i=0; i <= inputNum; i++){
						modifier();
					}; //end for loop


  }); //end submit handleer
}); //end doc ready handler


var alterNumbers = numbers.map(modifier(numbers))
