$( document ).ready(function(){


    var Random= Math.floor(Math.random()* 80) + 19
    var num1= Math.floor(Math.random()* 15 + 1)
    var num2= Math.floor(Math.random()* 15 + 1)
    var num3= Math.floor(Math.random()* 15 + 1)
    var num4= Math.floor(Math.random()* 15 + 1)
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
   

    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);
    $('#randomNumber').text(Random);

    function winner(){
    alert("No way! You won!");
        wins++; 
        $('#numberWins').text(wins);
        reset();
    }

    function loser(){
    alert ("I will always win! You lose!");
        losses++;
        $('#numberLosses').text(losses);
        reset()
    }

    $('#crystalOne').on ('click', function(){
      userTotal = userTotal + num1;
      $('#finalScore').text(userTotal); 
            
          if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })  
    $('#crystalTwo').on ('click', function(){
      userTotal = userTotal + num2;
      $('#finalScore').text(userTotal); 
          if (userTotal == Random){
            winer();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#crystalThree').on ('click', function(){
      userTotal = userTotal + num3;
      $('#finalScore').text(userTotal);

            if (userTotal == Random){
                winner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#crystalFour').on ('click', function(){
      userTotal = userTotal + num4;
      $('#finalScore').text(userTotal); 
        
            if (userTotal == Random){
                winner();
          }
          else if ( userTotal > Random){
            loser();
          }
    });   

    function reset(){
        Random=Math.floor(Math.random()*101+19);
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalScore').text(userTotal);
        } 
  }); 