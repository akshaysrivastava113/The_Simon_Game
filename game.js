var userArr = [];
var gameArr = [];

var started = false;

var level = 0;

$(document).keypress( function() {
  if(started == false){
  nextSequence();
  $('body').css('background-color','#fefbec')
  started = true;
  }
});

$('.btn').on('click', function() {
  var userNum = Number($(this).attr('value'));
  // $(this).addClass('animate-seq');
  // setInterval(function() {
  //   $(this).removeClass('animate-seq');
  // },100);
  // $($(this)).fadeIn(100).fadeOut(100).fadeIn(100);
  userArr.push(userNum);
  checkAnswer(userArr.length-1);
});

function checkAnswer(currentLev){
  if(userArr[currentLev] === gameArr[currentLev]){
    if(userArr.length === gameArr.length){
      nextSequence();
    }
  } else {
    startOver();
  }
}

function nextSequence() {
  userArr=[];
  level++;
  $('#level-title').html('Level: '+level);
  var randomN = Math.floor(Math.random()*4)+1;
  //blink
  var randomElem = '#btn-'+randomN;
  $(randomElem).fadeIn(100).fadeOut(100).fadeIn(100);
  console.log(randomN);
  gameArr.push(randomN);
}

function startOver() {
    $('#level-title').html('Incorrect! Press any key to start again.');
    $('body').css('background-color','rgb(255, 115, 115)')
    started = false;
    gameArr = [];
    level=0;
}