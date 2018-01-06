// Selects a random number to be shown at the start of the game
// Number should be should be between 19 - 120
//

$(document).ready(function(){
  var Random=Math.floor(Math.random()*101+19);
 

// Appending random number to the randomNumber id in the html doc
  //  
  $('#randomNumber').text(Random);
  
// Setting up random numbers for each jewel
// Random number has to be between 1 - 12
//
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)
  $('#one').data('clickvalue', num1);
  $('#two').data('clickvalue', num2);
  $('#three').data('clickvalue', num3);
  $('#four').data('clickvalue', num4);
   
//  Decaring variables for tallies
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;

  
$('#numberWins').text(wins);
$('#numberLosses').text(losses);

//resets the game  --- trouble getting button to call function reset
$('#resetButton').click(function reset(){

      Random=Math.floor(Math.random()*101+19);
      console.log(Random, 'log in numbertoMatch')
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      $('#one').data('clickvalue', num1);
      $('#two').data('clickvalue', num2);
      $('#three').data('clickvalue', num3);
      $('#four').data('clickvalue', num4);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 
);

//WORKING on this section, instead of pop up solution to remove alert,
// and use new div create dynamically using JS instead of alert resetting game
$('#resetButton').on("click", ".remove", function () {
  $(this).parents('.div').remove();
  reset()
})

//adds the wins to the userTotal
function yay(){
$('.rules').after('<div class="resultBanner"><button id="resetButton">You Won!! Click another to play again!</button></div>');  
  wins++; 
  $('#numberWins').text(wins);
}

//adds the losses to the userTotal
function loser(){
$('.rules').after('<div class="resultBanner"><button id="resetButton">You Lost!! Click another to play again!</button></div>');  
  losses++;
  $('#numberLosses').text(losses);
}


$('.gemImage').on ('click', function(){
  console.log($(this).attr('id'), 'thisgemImage');
  var value=$(this).data('clickvalue');
  console.log('clickvalue', value);
  userTotal = userTotal + value;
  $('#finalTotal').text(userTotal); 
  console.log("New userTotal= " + userTotal);    
        if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        }
}

  )

}

)



//keeping example of how I first had it before working w/ Julia on this.  
// //sets up click for jewels
//   $('#one').on ('click', function(){
//     userTotal = userTotal + num1;
//     console.log("New userTotal= " + userTotal);
//     $('#finalTotal').text(userTotal); 
//           //sets win/lose conditions
//         if (userTotal == Random){
//           yay();
//         }
//         else if ( userTotal > Random){
//           loser();
//         }   
//   }) 

//   $('#two').on ('click', function(){
//     userTotal = userTotal + num2;
//     console.log("New userTotal= " + userTotal);
//     $('#finalTotal').text(userTotal); 
//         if (userTotal == Random){
//           yay();
//         }
//         else if ( userTotal > Random){
//           loser();
//         } 
//   })  

//   $('#three').on ('click', function(){
//     userTotal = userTotal + num3;
//     console.log("New userTotal= " + userTotal);
//     $('#finalTotal').text(userTotal);


// //sets win/lose conditions
//           if (userTotal == Random){
//           yay();
//         }
//         else if ( userTotal > Random){
//           loser();
//         } 
//   })  

//   $('#four').on ('click', function(){
//     userTotal = userTotal + num4;
    
//     $('#finalTotal').text(userTotal); 
      
//           if (userTotal == Random){
//           yay();
//         }
//         else if ( userTotal > Random){
//           loser();
//         }
//   });   
// }); 
