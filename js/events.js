//define functions here

$(document).ready(function(){

// call functions here
function getIt() {
  $('p').on("click", function(){
    alert('Hey!');
    return;
  });
}

function frameIt() {
  $('img').on("load", function(){
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('form').on("keydown", function(key){
    if (key.which == 103) {
      alert('')
    }
  })
}

function submitIt() {
  $('form').on("submit", function() {
    alert()
  })
}


});
