


//variable
var wins = 0;
var numGuessRemain =10;
var lettersAlreadyGuessed = [];



 // Creates an array that lists out all of the options.
 //this does not work with the same letter in different indices
    var hangmanChoices = ["kanye", "cardib","tink","twista","madonna"];

    //create a random generator for the hangman word
    var hangmanWord = hangmanChoices[Math.floor(Math.random() * hangmanChoices.length)];
    console.log(hangmanWord)

    var hangmanPlacementholders = [];
    
    for(var i = 0; i< hangmanWord.length; i++){
        hangmanPlacementholders.push("_");       
    
  }



//user press enter to play game function


    document.onkeyup=function(event) {
        //gets the key from the user
        var keyPressed = event.key;
        //gets the index of the hangmanword
        var charIndex = hangmanWord.indexOf(keyPressed);

      if(hangmanPlacementholders.indexOf("_") === -1){
        alert("You Won!")
      }

      //if there are still guesses left then proceed with the game
      else if(numGuessRemain != 0){
        //if the letter does not exists in the word
        if(charIndex === -1){
            
            lettersAlreadyGuessed.push(keyPressed); 
            //console.log(lettersAlreadyGuessed);
            numGuessRemain=numGuessRemain-1; //decrement number of guesses
            alert("Try Again! You have " +numGuessRemain+ " guesses left"); //pop alert try again 

        }
        else{
          lettersAlreadyGuessed.push(keyPressed);
          numGuessRemain = numGuessRemain-1;
          for(var i=0;i<hangmanPlacementholders.length;i++){
            if(hangmanWord[i] === keyPressed){
              hangmanPlacementholders[i] = keyPressed;
            }
             //document.getElementById('wordisplay').textContent(hangmanPlacementholders[i]);
          }
        }

      }

      

      else{
        alert("You lose");
      }
        console.log(hangmanPlacementholders);
        //window.document.getElementById('paragraph2').textContent='Some sort of text goes here.';            
        //document.getElementById('wordisplay').textContent(hangmanPlacementholders);
      };

     



        //main logic, startup code

  




    //functions

    

