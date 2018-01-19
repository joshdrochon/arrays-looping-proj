

$(document).ready(function(){

  $("form#form1").submit(function(event){
    event.preventDefault();

    var inputNum = parseInt(prompt("enter a number between 0 & 20"));

    var numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; //literal syntax recommended to make arrays

      for(i=0; i <= inputNum; i++){

        function modifier(){

          if(numbers[i] % 3 === 0){
            console.log(i + "Sorry!" + "<br"); //will say "Sorry, Dave"
          }else if(numbers[i].includes(1)){
            console.log(i + "contains 1" + "<br>"); //will replace all nums containing 1 w/ "boop"
          }else if(numbers[i].includes(0)){
            console.log(i + "contains 0" + "<br>"); //will replace all nums container 0 w "beep"
          }else{
            return false;
          }

        }// end modifier
      }; //end for loop

  }); //end submit handleer
}); //end doc ready handler
