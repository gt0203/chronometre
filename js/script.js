
window.onload = function () {
  // On déclare les variables
    var secondes = 00; 
    var number = 00; 
    var minutes = 00;
    var appendnumber = document.getElementById("number")
    var appendSecondes = document.getElementById("secondes")
    var appendMinutes = document.getElementById("minutes")
    var boutonStart = document.getElementById('bouton-start');
    var boutonStop = document.getElementById('bouton-stop');
    var boutonReset = document.getElementById('bouton-reset');
    var Interval ;
  
    boutonStart.onclick = function() {
      
       clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      boutonStop.onclick = function() {
         clearInterval(Interval);
         localStorage.setItem("minutes", minutes);
         localStorage.getItem(minutes);
         localStorage.setItem("secondes", secondes);
         localStorage.getItem(secondes);
         localStorage.setItem("milisecondes", number);
         localStorage.getItem(number);
    }
    
  
    boutonReset.onclick = function() {
       clearInterval(Interval);
        minutes = "00"; 
        number = "00";
        secondes = "00";
        appendMinutes.innerHTML = minutes;
        appendnumber.innerHTML = number;
        appendSecondes.innerHTML = secondes;
        localStorage.removeItem("minutes", minutes);
        localStorage.removeItem(number);
        localStorage.removeItem("secondes", secondes);
        localStorage.removeItem(number);
        localStorage.removeItem("milisecondes", number);
        localStorage.removeItem(number);
    }
    
     
    
    function startTimer () {
      number++; 
      // si le nombre est en dessous de 9, on met le "0" en premiere position
      if(number < 9){
        appendnumber.innerHTML = "0" + number;
      }
      // si le nombre est au dessus de 9, on enleve le "0" en premiere position
      if (number > 9){
        appendnumber.innerHTML = number;
        
      } 
      
      if (number > 99) {
        console.log("secondes");
        secondes++;    
        appendSecondes.innerHTML = "0" + secondes;
        number = 0;
        appendnumber.innerHTML = "0" + 0;
      }
      
      if (secondes > 9){
        appendSecondes.innerHTML = secondes;
      }

      if (secondes > 59) {
        console.log("minutes");
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        secondes = 0;
        appendSecondes.innerHTML = "0" + 0;
      }
      
      if (minutes > 9){
        appendMinutes.innerHTML = minutes;
      }
    
    }
    
  
}