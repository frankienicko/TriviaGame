var screen2
var screen3

//$("Start").click(function() {
//  $("#container").toggle();
//});


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

  jQuery(function ($) {
    var threeMinutes = 60 * 3,
        display = $("#time");
   startTimer(threeMinutes, display);
 });

var i = $('#Answers input:checked').closest(".answer").index();
//$(document).ready(function(){


//$(".screen2").hide();
//$(".screen3").hide();

//when click start button is clicked
//$("#start").click(function(){
//  $(".screen2").show();
// $(".screen1").hide();
//});


//$(".radio-inline").on("click",function(){
//   alert(this.id);
//    var ans = this.id
//    if (ans=="true"){
//        correct++
//        blank = 10 - (correct + incorrect)
//    } else {incorrect++;
//        blank = 10 - (correct + incorrect)
//    }
//});  

//var start = false;
//$(function() {
//  $(document).keyup(function(evt) {
//   if (evt.keyCode == 32) {
//    start = false;
//    }
//  }).keydown(function(evt) {
//   if (evt.keyCode == 32) {
//      start = true;
//      console.log("Start")

//    }
//  });
//});

//var next = false;
//$(function() {
//  $(document).keyup(function(evt) {
//    if (evt.keyCode == 32) {
//      next = false;
//    }
//  }).keydown(function(evt) {
//    if (evt.keyCode == 32) {
//      next = true;
//     console.log("Next")
//    }
// });
//});
 
//$('#button').click(function() {
//    $('#login').css('visibility', 'visible');
//});
//$('#closelogin').click(function() {
 //   $('#login').css('visibility', 'hidden');
//});





//define variables
var correct = 0;
var wrong = 0;
var unanswered = 0;
//create timer function
window.onload = function(){
(function(){
  var timer = 30;
  setInterval(function() {
    timer--;
    if (timer > 0) {
      document.getElementById("timer").innerHTML = count + "timer";
    
      //show and hide answer screen
      $(".game").show();
      $(".score").hide();
    }
    else if (timer === 0) {
        //alert("Game Over.");
        clearInterval(timer);
        //show and hide answer screen
        $(".score").show();
        $(".game").hide();
        $("correct").html(correct);
        $("wrong").html(wrong);
        $("unanswered").html(unanswered);
    }
  }, 1000);
})();
}
//check user selected answer against array of correct answers
$(document).ready (function () {
  $(":input").on("click", function() {
    if($(this).val() == "true"){
      correct++;
      $("correct").html(correct);
      unanswered = 7 - (correct + wrong);
      $("unanswered").html(unanswered);
    } else if($(this).val() == "false") {
      wrong++;
      $("wrong").html(wrong);
      unanswered = 7 - (correct + wrong);
      $("unanswered").html(unanswered);
    } 
      console.log(wrong);
      console.log(correct);
      console.log(unanswered);
  });
});