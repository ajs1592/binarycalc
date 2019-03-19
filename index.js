//Cleaned Up Code - Joe
var score = 0;
var binaryNumber;
var userBinaryNum = [];

getRandomNumber();
convertToBinary();

$(document).ready(function(){
  $("#question").text((originalRandomNumber));
  $("#newScore").text("Score: " + score)
  $(document).keypress(function(key){
    if (key.which === 13)  {
      for (var i = 1; i < 7; i++){
        let x = document.getElementById(i).value
        userBinaryNum.push(x);
      }
        var x = userBinaryNum.join('');
        console.log(x);
        checkAnswer(x);
        $("#1").val('');
        $("#2").val('');
        $("#3").val('');
        $("#4").val('');
        $("#5").val('');
        $("#6").val('');  
    }
  })
})

$("input").keyup(function() {
    if($(this).val().length >= 1) {
      var input_flds = $(this).closest('form').find(':input');
      input_flds.eq(input_flds.index(this) + 1).focus();
    }
});

function getRandomNumber() {
  randomNumber = Math.floor(Math.random() * 63);
  originalRandomNumber = randomNumber
  newNumber = []
}

function convertToBinary() {
  //Dry code courtesy of James
  for (var i = 5; i > -1; i--){
  var e = Math.pow(2, i);
    if (randomNumber >= e) {
      newNumber.push('1');
      randomNumber = randomNumber - e;
    } else {
      newNumber.push('0');
    }
  }
  binaryNumber = newNumber.join('')
}

//console.log('answer:' + binaryNumber);

function checkAnswer(value) {
  //console.log("The user input being checked is " + value)
  //console.log("The random binary number they should enter is +" + binaryNumber)
  if (value == binaryNumber) {
    score++;
    $("#newScore").text("Score: " + score)
    $("#correctness").text("Correct!")
    reset();
    $("#question").text((originalRandomNumber));
    $('#1').focus().select();
    //console.log('answer:' + binaryNumber);
  } else {
    $("#correctness").text("Incorrect!")
    $("#newScore").text("Score: " + score)
    reset();
    $("#question").text((originalRandomNumber));
    $('#1').focus().select();
    //console.log('answer:' + binaryNumber);
  }
}

//The problem was that binaryNumber and userBinaryNum
//had their new values stacking on each other
//I added a complete reset function to fix this - Joe
function reset(){
  binaryNumber = null;
  userBinaryNum = [];
  getRandomNumber();
  convertToBinary();
}

$("#begin").click( function(){
   var counter = 31;
   setInterval(function() {
     counter--;
      if (counter >= 0) {
         span = document.getElementById("timer");
         span.innerHTML = "Timer: " + counter;
      }
      if (counter === 0) {
        
        Swal.fire(
  'Time is up!',
  'You scored: ' + score,
  'info'
);
         
         clearInterval(counter);
       }
     }, 1000);
});